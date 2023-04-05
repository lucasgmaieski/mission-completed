import logo from "../assets/react.svg";

export const Header = () => {
    return (
        <>
            <header className="flex flex-row gap-5 justify-evenly items-center border-b-cyan-900 border-b-2 py-3">
                <div>
                    <img src={logo} alt="" />
                </div>
                <h1 className="block text-orange-600">Mission Completed</h1>
            </header>
        </>
    );
}