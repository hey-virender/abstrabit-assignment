import React from "react";
import LogoutBtn from "./LogoutBtn";

type Props = {
  userName: string;
};
const Navbar = ({ userName }: Props) => {
  return (
    <div className="bg-slate-300 p-4 rounded-lg mb-6 flex items-center justify-between">
      <h1 className="text-xl text-slate-600 font-medium">
        Welcome,{" "}
        <span className="text-slate-800 italic font-semibold">{userName}</span>
      </h1>
      <LogoutBtn/>
    </div>
  );
};

export default Navbar;
