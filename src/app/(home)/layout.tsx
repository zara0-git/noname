import Header from "@/src/components/layouts/header";
import Footer from "@/src/components/layouts/footer";
import { PropsWithChildren } from "react";

export type HomePropsChildren = PropsWithChildren<{}>;

export default function HomeLayout(props: HomePropsChildren) {
  const { children } = props;

  return (
    <>
      <body className="">
        <>
          <Header />
        </>
        <div
          className="container mr-auto ml-auto w-[1500px]
        "
        >
          {children}
        </div>
        <>
          <Footer />
        </>
      </body>
    </>
  );
}
