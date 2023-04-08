import { ReactNode } from "react";

type Props = {
    bgMain: string;
    children: ReactNode;
}
export const Container = ({bgMain, children}: Props) => {
    return (
        <main className='bg-bg-main bg-no-repeat bg-cover w-screen h-screen text-white'>
            {children}
        </main>
    );
}