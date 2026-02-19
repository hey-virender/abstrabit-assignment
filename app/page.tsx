import { createClient } from "@/supabase/server";
import Image from "next/image";
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
      <h1>Welcome, {data.session.user.user_metadata?.name || "User"}</h1>
    </main>
  );
}
