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
              className={({ isActive }) =>
                isActive
                  ? "rounded-md  hover:bg-amber-500 hover:text-black "
                  : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive
                  ? "rounded-md hover:bg-amber-500 hover:text-black "
                  : undefined
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "rounded-md hover:bg-amber-500 hover:text-black "
                  : undefined
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/comps"
              className={({ isActive }) =>
                isActive
                  ? "rounded-md hover:bg-amber-500 hover:text-black "
                  : undefined
              }
            >
              Comps
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive
                  ? "rounded-md hover:bg-amber-500 hover:text-black "
                  : undefined
              }
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
