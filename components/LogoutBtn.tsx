'use client'

import { logout } from "@/actions/auth.actions";

const LogoutBtn = () => {
  const handleLogout = async () => {
    await logout();
  }
  return (
    <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors hover:shadow-lg hover:scale-101 hover:shadow-red-300/50  transition-transform duration-300 ease-in-out cursor-pointer" onClick={handleLogout}>
        Logout
      </button>
  )
}

export default LogoutBtn