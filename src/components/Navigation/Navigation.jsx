import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        // should these be LIs?
        <header>
            <nav className="flex flex-col m-0 p-0 gap-2 list-none justify-evenly md:flex-row">
                <NavLink
                    to="/"
                    className="  rounded-md m-2 hover:bg-yellow-500 hover:text-black visited:bg-yellow-500" // visited property doesn't display as intended
                    end
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about-us"
                    className="  rounded-md m-2 hover:bg-yellow-500 hover:text-black visited:bg-yellow-500"
                >
                    About Us
                </NavLink>
                <NavLink
                    to="/contact"
                    className=" rounded-md m-2 hover:bg-yellow-500 hover:text-black visited:bg-yellow-500"
                >
                    Contact
                </NavLink>
                <NavLink
                    to="/comps"
                    className="rounded-md m-2 hover:bg-yellow-500 hover:text-black visited:bg-yellow-500"
                >
                    Comps
                </NavLink>
            </nav>
        </header>
    );
};

export default Navigation;
