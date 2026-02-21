"use server"

import { createClient } from "@/supabase/server"
import { redirect } from "next/navigation";


export const signInWithGoogle = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
  provider: 'google',
  options: {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
  },
})
if (data.url) {
  console.log("Redirecting to:", data.url);
  redirect(data.url) 
}
};

export const logout = async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}