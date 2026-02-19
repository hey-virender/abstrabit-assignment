'use client'

import { supabaseClient } from "@/supabase/client"
import { useEffect } from "react";


const page = () => {
  const supabase = supabaseClient()
   useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession();

      console.log("Session data:", data);
      console.log("User:", data.session?.user);

      if (error) {
        console.error(error);
      }
    };

    getSession();
  }, []);
  
  return (
    <div>page</div>
  )
}

export default page