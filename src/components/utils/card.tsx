// components/Suggest.tsx
import Link from "next/link";
import React from "react";

type Card = {
  //   imgUrl: string;
  //   title: string;
  //   desc: string;
  //   link: string;
};

const Card: React.FC<Card> = ({}) => {
  return (
    <Link href="/">
      <div className="h-[330px] w-[220px] p-3 hover:-translate-y-[10px] transitiion-all duration-300 rounded shadow-md flex flex-col">
        <div className="h-1/2 w-full">
          <img
            className="h-full w-[100%] object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7PETXe5dLZODtdN9AUafllEpnmUORAitGbg&s"
            alt="s"
          />
        </div>
        <p className="text-start text-slate-500 font-light text-sm">
          2024-07-07
        </p>
        <h1 className="text-start font-semibold text-lg">
          Мэдээний гарчиг байрлах хэсэг энд байна тиймаа
        </h1>
        {/* <p className="text-justify text-slate-500 font-light text-sm">
          Мэдээлэл бол бидэнд мэдээллэдэг хэрэгсэл юм. Өөрөөр хэлвэл, энэ нь
          ямарваа нэг асуултын хариулт болж өгдөг. Түүнчлэн мэдээлэл нь өгөгдөл
          болон мэдлэгтэй холбогддог.
        </p> */}
      </div>
    </Link>
  );
};

export default Card;
