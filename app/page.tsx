import { getMyBookmarks } from "@/actions/bookmark.actions";
import Navbar from "@/components/Navbar";
import { createClient } from "@/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import BookmarksList from "@/components/BookmarksList";

export default async function Home() {
  const supabase = await createClient();

  const { data } = await supabase.auth.getUser();

  if (!data.user) {
    redirect("/login");
  }

  const bookmarks = await getMyBookmarks();

  return (
    <main>
      <Navbar userName={data.user.user_metadata?.name || "User"} />

      <section className="p-6">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-semibold text-slate-800">
            Your Bookmarks
          </h2>

          <Link href="/bookmark/new">
            <button className="bg-slate-600 hover:bg-slate-800 text-white font-medium py-2 px-4 rounded-lg transition">
              New Bookmark
            </button>
          </Link>

        </div>

        {/* Client Component handles realtime */}
        <BookmarksList initialBookmarks={bookmarks} />

      </section>
    </main>
  );
}