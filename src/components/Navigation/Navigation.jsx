import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        // should these be LIs?
        <header>
            <nav>
                <ul className="flex flex-row place-content-center gap-4 md:gap-10 lg:gap-20">
                    <li>
                        <NavLink
                            to="/"
                            className="rounded-md  hover:bg-amber-500 hover:text-black"
                            end
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about-us"
                            className="rounded-md  hover:bg-amber-500 hover:text-black "
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className="rounded-md  hover:bg-amber-500 hover:text-black "
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/comps"
                            className="rounded-md  hover:bg-amber-500 hover:text-black "
                        >
                            Comps
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/shop"
                            className="rounded-md  hover:bg-amber-500 hover:text-black "
                        >
                            Shop
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;
