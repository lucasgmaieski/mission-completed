import logo from "../assets/react.svg";

export const Header = () => {
    return (
        <>
            <header className="flex flex-col gap-5 justify-evenly items-center border-b-cyan-900 border-b-2 py-3 font-custom">
                <h1 className="block text-white">Mission Completed</h1>
                <div>
                    <img src={logo} alt="" />
                </div>
            </header>
        </>
    );
}