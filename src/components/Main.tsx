import { ReactNode } from "react";

type Props = {
    bgMain: string;
    children: ReactNode;
}
export const Main = ({bgMain, children}: Props) => {
    return (
        <main className='bg-bg-main bg-no-repeat bg-cover w-screen h-screen text-white'>
            {/* <img src={bgMain} alt="" className="absolute z-0 w-screen h-screen"/> */}
            {children}
        </main>
    );
}