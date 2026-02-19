"use server"

import { createClient } from "@/supabase/server"
import { redirect } from "next/navigation";


export const signInWithGoogle = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
  provider: 'google',
  options: {
    redirectTo: 'http://example.com/auth/callback',
  },
})
if (data.url) {
  redirect(data.url) // use the redirect API for your server framework
}
};