"use client";

import { createBookmark } from "@/actions/bookmark.actions";
import { supabaseClient } from "@/supabase/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CreateBookmarkPage() {
  const router = useRouter();
  const supabase = supabaseClient();

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error) console.error(error);
      if (!data.user || !data.user.role || data.user.role !== "authenticated") {
        router.push("/login");
      }
    };

    getSession();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !url) return;

    try {
      setLoading(true);

      // Insert logic here later
      console.log({ title, url });
      const response = await createBookmark(title, url);
      console.log("Bookmark created:", response);

      setTitle("");
      setUrl("");
      router.push("/");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center px-6">
      <div
        className="
        w-full max-w-md
        bg-white
        border border-slate-200
        rounded-xl
        shadow-sm
        p-8
      "
      >
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-slate-800">
            Add Bookmark
          </h1>

          <p className="text-sm text-slate-500 mt-1">
            Save a new link to your collection
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">
              Title
            </label>

            <input
              type="text"
              placeholder="Example: Supabase Docs"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="
                w-full
                px-3 py-2
                border border-slate-300
                rounded-lg
                text-slate-800
                focus:outline-none
                focus:ring-2
                focus:ring-slate-400
                focus:border-slate-400
                transition
              "
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">
              URL
            </label>

            <input
              type="url"
              placeholder="https://example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="
                w-full
                px-3 py-2
                border border-slate-300
                rounded-lg
                text-slate-800
                focus:outline-none
                focus:ring-2
                focus:ring-slate-400
                focus:border-slate-400
                transition
              "
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              bg-slate-700
              hover:bg-slate-800
              text-white
              font-medium
              py-2.5
              rounded-lg
              transition
              shadow-sm
              disabled:opacity-70
            "
          >
            {loading ? "Saving..." : "Save Bookmark"}
          </button>
        </form>
      </div>
    </main>
  );
}
