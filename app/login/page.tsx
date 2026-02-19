"use client";

import { signInWithGoogle } from "@/actions/auth.actions";

export default function LoginButton() {
  const handleLogin = async () => {
    await signInWithGoogle();

    
  };

  return (
    <button onClick={handleLogin}>
      Sign in with Google
    </button>
  );
}
