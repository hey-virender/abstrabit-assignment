"use client";

import { signInWithGoogle } from "@/actions/auth.actions";
import { useState } from "react";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      await signInWithGoogle();
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 flex items-center justify-center px-6">

     
      <div className="w-full max-w-md">

        
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-slate-800 tracking-tight">
            Bookmark Vault
          </h1>
          <p className="text-slate-600 mt-2 text-sm">
            Save, organize, and access your bookmarks securely
          </p>
        </div>

        
        <div className="
          bg-white/80 backdrop-blur-sm
          border border-slate-200
          shadow-lg shadow-slate-400/20
          rounded-2xl
          p-8
        ">

          <button
            onClick={handleLogin}
            disabled={loading}
            className="
              w-full
              flex items-center justify-center gap-3
              bg-slate-700 hover:bg-slate-800
              text-white
              font-medium
              py-3 px-4
              rounded-lg
              transition-all duration-200
              shadow-md hover:shadow-lg
              disabled:opacity-70 disabled:cursor-not-allowed
            "
          >
            {loading ? (
              <span className="animate-pulse">Signing in...</span>
            ) : (
              <>
               
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M21.35 11.1H12v2.98h5.37c-.23 1.48-1.7 4.35-5.37 4.35-3.23 
                    0-5.86-2.67-5.86-5.95s2.63-5.95 5.86-5.95c1.84 
                    0 3.07.79 3.77 1.47l2.57-2.48C16.87 
                    3.9 14.65 3 12 3 6.92 3 2.8 7.12 
                    2.8 12s4.12 9 9.2 9c5.3 0 8.8-3.72 
                    8.8-8.97 0-.6-.06-1.05-.15-1.43z"
                  />
                </svg>

                Sign in with Google
              </>
            )}
          </button>

          
          <div className="my-6 flex items-center">
            <div className="flex-1 h-px bg-slate-200"></div>
            <span className="px-3 text-xs text-slate-500">
              Secure OAuth Authentication
            </span>
            <div className="flex-1 h-px bg-slate-200"></div>
          </div>

         
          <p className="text-center text-xs text-slate-500">
            Powered by Supabase Auth
          </p>

        </div>

      </div>

    </main>
  );
}