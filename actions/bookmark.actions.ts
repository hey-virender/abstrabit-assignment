"use server"

import { createClient } from "@/supabase/server"

export const createBookmark = async (title: string, url: string) => {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()
  if(error) {
    console.error("Error fetching user:", error)
    throw new Error("Failed to fetch user")
  }
  if (!data.user || !data.user.role || data.user.role !== "authenticated") {
    throw new Error("User not authenticated")
  }
  const { data:response, error:bookMarkError } = await supabase.from("bookmarks").insert({
    title,
    url,
    user: data.user.id

  }).select()
  if (bookMarkError) {
    console.error("Error creating bookmark:", bookMarkError)
    throw new Error("Failed to create bookmark")
  }
  return response
}


export const getMyBookmarks = async () => {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()
  if(error) {
    console.error("Error fetching user:", error)
    throw new Error("Failed to fetch user")
  }
  if (!data.user || !data.user.role || data.user.role !== "authenticated") {
    throw new Error("User not authenticated")
  }
  const { data:response, error:bookMarkError } = await supabase.from("bookmarks").select("*").eq("user", data.user.id)
  if (bookMarkError) {
    console.error("Error fetching bookmarks:", bookMarkError)
    throw new Error("Failed to fetch bookmarks")
  }
  return response
}

export const deleteBookmark = async (id: string) => {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()
  if(error) {
    console.error("Error fetching user:", error)
    throw new Error("Failed to fetch user")
  }
  if (!data.user || !data.user.role || data.user.role !== "authenticated") {
    throw new Error("User not authenticated")
  }
  const { data:response, error:bookMarkError } = await supabase.from("bookmarks").delete().eq("id", id).eq("user", data.user.id)
  if (bookMarkError) {
    console.error("Error deleting bookmark:", bookMarkError)
    throw new Error("Failed to delete bookmark")
  }
  return response
}