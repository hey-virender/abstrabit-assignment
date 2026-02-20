import Bookmark from "@/components/Bookmark";
import Navbar from "@/components/Navbar";
import { bookmarks } from "@/constants";
import { createClient } from "@/supabase/server";

import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = await createClient();

  const { data } = await supabase.auth.getSession();
  console.log("Session:", data);
  if (!data.session || !data.session.user) {
    redirect("/login");
  }

  return (
    <main>
      <Navbar userName={data.session.user.user_metadata?.name || "User"}/>
      <section className="p-3">
        <h2>Your Bookmarks</h2>
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
