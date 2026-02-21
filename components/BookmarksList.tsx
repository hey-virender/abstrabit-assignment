"use client";

import { useState, useCallback } from "react";
import Bookmark from "@/components/Bookmark";
import { useBookmarksRealtime } from "@/hooks/useBookmarksRealtime";
import { supabaseClient } from "@/supabase/client";

type BookmarkType = {
  id: string;
  title: string;
  url: string;
};

export default function BookmarksList({
  initialBookmarks,
}: {
  initialBookmarks: BookmarkType[];
}) {
  const [bookmarks, setBookmarks] = useState(initialBookmarks);

  const fetchBookmarks = useCallback(async () => {
    const supabase = supabaseClient();

    const { data, error } = await supabase
      .from("bookmarks")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setBookmarks(data);
    }
  }, []);

  // Realtime subscription
  useBookmarksRealtime(fetchBookmarks);

  return (
    <div className="flex gap-4 flex-wrap">
      {bookmarks.map((bookmark) => (
        <Bookmark
          key={bookmark.id}
          id={bookmark.id}
          title={bookmark.title}
          url={bookmark.url}
        />
      ))}
    </div>
  );
}