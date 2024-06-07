import React from "react";
import Link from "next/link";

interface ChildrenProps {
  children: React.ReactNode;
  title?: string;
  supertitle?: string;
  desc?: string;
  link?: string;
}

export const SubTitle: React.FC<ChildrenProps> = ({ children, title }) => {
  return (
    <div className="p-5">
      <h2 className="font-bold text-xl pb-3">{title}</h2>
      <div className="flex flex-wrap -mx-2">{children}</div>
    </div>
  );
};

export const SubTitle2: React.FC<ChildrenProps> = ({
  children,
  supertitle,
  desc,
  link,
}) => {
  return (
    <div className="p-5">
      <div className="p-3 w-full flex flex-col md:flex-row">
        <div className="w-4/5 md:2/5">
          <h2 className="w-4/6 font-semibold text-3xl ">{supertitle}</h2>
        </div>
        <div className="w-5/5 md:3/5">
          <h2 className="font-extralight text-base text-gray-700">{desc}</h2>
          {link && (
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
          )}
        </div>
      </div>
      <div className="flex flex-wrap -mx-2">{children}</div>
    </div>
  );
};
