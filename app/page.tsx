import Bookmark from "@/components/Bookmark";
import Navbar from "@/components/Navbar";
import { bookmarks } from "@/constants";
import { createClient } from "@/supabase/server";
import Link from "next/link";

import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  console.log("User:", data.user);

  if (!data.user || !data.user.role || data.user.role !== "authenticated") {
    redirect("/login");
  }

  return (
    <main>
      <Navbar userName={data.user.user_metadata?.name || "User"} />
      <section className="p-3">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">
            Your Bookmarks
          </h2>
          
          <Link href="/bookmark/new" className="mb-4 inline-block cursor-pointer">
            <button className="bg-slate-600 hover:bg-slate-800 text-white font-medium py-2 px-4 rounded-lg transition cursor-pointer">
              New Bookmark
            </button>
          </Link>
        </div>
        <div className="flex gap-4">
          {bookmarks.map((bookmark) => (
            <Bookmark
              key={bookmark.id}
              id={bookmark.id}
              title={bookmark.title}
              url={bookmark.url}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
