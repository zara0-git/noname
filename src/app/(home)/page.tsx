import React from "react";
import Suggest from "@/src/components/utils/suggest";
import suggest from "@/src/data/suggest";
import { SubTitle, SubTitle2 } from "./subTitle";
import Gridlist from "@/src/components/utils/gridlist";
import gridlist from "@/src/data/gridlist";
import Card from "@/src/components/utils/card";

export default function HomePage() {
  return (
    <>
      <SubTitle title="Санал болгох">
        <div className="flex flex-wrap -mx-2">
          {suggest.map((s, index) => (
            <div key={index} className="w-full 2xl:w-1/3 md:w-full">
              <Suggest
                imgUrl={s.imgUrl}
                title={s.title}
                desc={s.desc}
                link={s.url}
              />
            </div>
          ))}
        </div>
      </SubTitle>
      <SubTitle2
        supertitle="Манай технологитой танилцана уу"
        link={"/tech"}
        desc={
          "Дэлхий нийтийн техник технологийн хөгжилтэй хөл нийлүүлэн алхан, хүчирхэг технологиудыг монголдоо анхлан нэвтрүүлж, шилдэг програм хангамжийг хөгжүүлэх"
        }
      >
        <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-0.5 place-items-stretch w-full">
          {gridlist.map((s, index) => (
            <Gridlist
              key={index}
              link={s.url}
              desc={s.desc}
              imgUrl={s.imgUrl}
            />
          ))}
        </div>
      </SubTitle2>
      <SubTitle2
        supertitle="Мэдээ мэдээлэл"
        link={"/news"}
        desc={
          "Мэдээлэл бол бидэнд мэдээллэдэг хэрэгсэл юм. Өөрөөр хэлвэл, энэ нь ямарваа нэг асуултын хариулт болж өгдөг. Түүнчлэн мэдээлэл нь өгөгдөл болон мэдлэгтэй холбогддог."
        }
      >
        {/* <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-0.5 place-items-stretch w-full">
          s
        </div> */}
        <Card />
      </SubTitle2>
    </>
  );
}
