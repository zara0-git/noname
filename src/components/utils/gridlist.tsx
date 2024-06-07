// components/Suggest.tsx
import Link from "next/link";
import React from "react";

type Gridlist = {
  imgUrl?: string;
  desc?: string;
  link: string;
};

const Gridlist: React.FC<Gridlist> = ({ imgUrl, desc, link }) => {
  return (
    <Link href={link}>
      <div className="h-[200px] p-3 hover:-translate-y-[10px] transitiion-all duration-300 rounded shadow-md flex flex-col">
        <div className="w-[100px] h-[100px]">
          <img
            src={imgUrl}
            alt={imgUrl}
            className="object-cover w-full h-full"
          />
        </div>
        <h1 className="w-full font-normal text-gray-700">{desc}</h1>
      </div>
    </Link>
  );
};

export default Gridlist;
