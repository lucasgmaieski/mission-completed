import logo from "../assets/react.svg";
type Props = {
    animatedCompleted: boolean;
}
export const Header = ({animatedCompleted}: Props) => {
    console.log("animação no header" + animatedCompleted);

    return (
        <>
            <header className='flex flex-col gap-5 justify-evenly items-center border-b-cyan-900 border-b-2 py-3 font-custom' >
                <h1 className={`block ${animatedCompleted ? 'text-orange-600' : 'text-white'}`}>Mission Completed</h1>
                <div>
                    <img src={logo} alt="" />
                </div>
            </header>
        </>
    );
}