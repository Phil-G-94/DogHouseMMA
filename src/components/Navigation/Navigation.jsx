import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <header>
            <nav className="flex flex-col m-0 p-0 gap-4 list-none justify-evenly md:flex-row">
                <NavLink
                    to="/"
                    className="hover:bg-slate-50 hover:text-black rounded-md m-2"
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about-us"
                    className="hover:bg-slate-50 hover:text-black rounded-md m-2"
                >
                    About Us
                </NavLink>
                <NavLink
                    to="/contact"
                    className="hover:bg-slate-50 hover:text-black rounded-md m-2"
                >
                    Contact
                </NavLink>
            </nav>
        </header>
    );
};

export default Navigation;
