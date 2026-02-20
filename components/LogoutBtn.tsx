"use client";

import { logout } from "@/actions/auth.actions";

const LogoutBtn = () => {
  const handleLogout = async () => {
    await logout();
  };
  return (
    <button
      onClick={handleLogout}
      className="
        border
        border-slate-800
        rounded-lg
        px-4
        py-2
        text-sm font-medium
        bg-slate-200
        text-slate-600
        hover:text-slate-900
        hover:bg-slate-100
        transition-colors
        cursor-pointer
      "
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
