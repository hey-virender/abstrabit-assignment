import Link from "next/link";
import React from "react";

type Props = {
  url: string;
  id: string;
  title: string;
};

const Bookmark = ({ url, id, title }: Props) => {
  return (
    <div className="bg-slate-700/50 p-10 w-1/4 rounded-lg h-52">
      <h1 className="text-2xl font-medium">{title}</h1>
      <Link href={url} target="_blank" rel="noopener noreferrer" className="text-black/60 pt-4 block text-lg truncate">
        {url}
      </Link>
    </div>
  );
};

export default Bookmark;
