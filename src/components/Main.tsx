import { ReactNode } from "react";

type Props = {
    bgMain: string;
    children: ReactNode;
}
export const Main = ({bgMain, children}: Props) => {
    return (
        <main className='bg-cyan-900 w-screen h-screen text-white'>
            <img src={bgMain} alt="" className="absolute z-0 w-screen h-screen"/>
            {children}
        </main>
    );
}