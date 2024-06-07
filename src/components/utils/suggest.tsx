// components/Suggest.tsx
import Link from "next/link";
import React from "react";

type ServiceCardProps = {
  imgUrl: string;
  title: string;
  desc: string;
  link: string;
};

const Suggest: React.FC<ServiceCardProps> = ({ imgUrl, title, desc, link }) => {
  return (
    <div className="w-auto rounded shadow-md flex flex-col xl:flex-row items-center p-3 hover:-translate-y-[10px] transitiion-all duration-300">
      <div className="h-[200px] w-1/2 bg-slate-500 content-center">
        <img
          className="h-full w-[100%] object-cover"
          src={imgUrl}
          alt={title}
        />
      </div>

      <div className="pl-0 md:pl-3 pr-2 py-4 w-full md:w-2/3">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base mt-2">{desc}</p>
        <Link
          href={link}
          className="text-blue-500 hover:text-blue-700 flex items-center mt-2"
        >
          <span>Дэлгэрэнгүй</span>
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Suggest;
