const Navigation = () => {
    return (
        <nav className="flex flex-col m-0 p-0 gap-4 list-none justify-between md:flex-row">
            <li className="hover:bg-slate-50 hover:text-black rounded-md m-2">
                <a href="#header">Home</a>
            </li>
            <li className="hover:bg-slate-50 hover:text-black rounded-md m-2">
                <a href="">About Us</a>
            </li>
            <li className="hover:bg-slate-50 hover:text-black rounded-md m-2">
                <a href="#contact">Contact</a>
            </li>
        </nav>
    );
};

export default Navigation;
