import Header from "@/src/components/layouts/header";
import { PropsWithChildren } from "react"

export type HomePropsChildren = PropsWithChildren<{}>

export default function HomeLayout(props: HomePropsChildren) {
    const {children } = props;

    return <div>
    {children}
    <Header/>
        <p> Test</p>
    </div>
}