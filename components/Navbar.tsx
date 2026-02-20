import React from "react";
import LogoutBtn from "./LogoutBtn";

type Props = {
  userName: string;
};

const Navbar = ({ userName }: Props) => {
  return (
    <header
      className="
        w-full
        bg-white/70 backdrop-blur-md
        border border-slate-200
        shadow-sm
        rounded-xl
        px-6 py-4
        mb-6
        flex items-center justify-between
      "
    >
      
      <div className="flex items-center gap-4">

        
        <div className="
          w-10 h-10
          rounded-lg
          bg-slate-700
          flex items-center justify-center
          text-white font-semibold text-sm
          shadow-sm
        ">
          BV
        </div>

      
        <div className="flex flex-col leading-tight">
          <span className="text-sm text-slate-500">
            Welcome back
          </span>

          <span className="text-lg font-semibold text-slate-800 tracking-tight">
            {userName}
          </span>
        </div>

      </div>

    
      <div className="flex items-center gap-4">

       
        <div className="w-px h-12 bg-slate-200"></div>

        
        <LogoutBtn />

      </div>
    </header>
  );
};

export default Navbar;