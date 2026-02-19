import Link from "next/link";
import React from "react";

type Props = {
  url: string;
  id: string;
  title: string;
};

const Bookmark = ({ url, id, title }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      <Link href={url} target="_blank" rel="noopener noreferrer">
        {url}
      </Link>
    </div>
  );
};

export default Bookmark;
