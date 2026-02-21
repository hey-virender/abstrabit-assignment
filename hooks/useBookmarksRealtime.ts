"use client";

import { supabaseClient } from "@/supabase/client";
import { useEffect } from "react";

export function useBookmarksRealtime(onChange: () => void) {
  useEffect(() => {
    const supabase = supabaseClient();

    const channel = supabase
      .channel("bookmarks-realtime")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "bookmarks",
        },
        () => {
          onChange();
        }
      )
      .subscribe((status) => {
        console.log("Realtime status:", status);
      });

    return () => {
      supabase.removeChannel(channel);
    };
  }, [onChange]);
}