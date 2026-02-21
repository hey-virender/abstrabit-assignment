"use client";
import Link from "next/link";
import { Trash } from "lucide-react";
import { deleteBookmark } from "@/actions/bookmark.actions";

type Props = {
  url: string;
  id: string;
  title: string;
};

const Bookmark = ({ url, id, title }: Props) => {
  const handleDelete = async () => {
    try {
      const reponse = await deleteBookmark(id);
      console.log("Bookmark deleted:", reponse);
    } catch (error) {
      console.error("Error deleting bookmark:", error);
    }
  };
  return (
    <div
      className="relative
        group
        bg-white
        border border-slate-200
        rounded-xl
        p-5
        h-44
        flex flex-col justify-between
        shadow-sm
        hover:shadow-md
        hover:border-slate-300
        transition-all duration-200
        w-full
      "
    >
      <div className="flex items-start gap-3">
        <div
          className="
          min-w-10 min-h-10
          rounded-lg
          bg-slate-100
          flex items-center justify-center
          text-slate-600
          font-semibold text-sm
          border border-slate-200
        "
        >
          {title.charAt(0).toUpperCase()}
        </div>

        <div className="flex flex-col overflow-hidden">
          <h2
            className="
            text-slate-800
            font-semibold
            text-base
            leading-tight
            truncate
          "
          >
            {title}
          </h2>

          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-slate-500
              text-sm
              truncate
              hover:text-slate-700
              transition-colors
            "
          >
            {url}
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4">
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            text-sm font-medium
            text-slate-700
            hover:text-slate-900
            transition-colors
          "
        >
          Visit →
        </Link>
      </div>
      <button
        className="absolute top-4 right-4 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={handleDelete}
      >
        <Trash className="text-red-500 size-6" />
      </button>
    </div>
  );
};

export default Bookmark;
