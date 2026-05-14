
import { Search, House, Popcorn, Tv } from "lucide-react";
import { NavLink } from "react-router-dom";

const MobileNav = ({ navLinks }) => {
  return (
    <nav
      aria-label="Mobile navigation menu"
      className="grid grid-cols-[3fr_1fr] md:hidden bg-black fixed z-50 bottom-0 w-full left-0"
    >
      <ul className="grid grid-cols-3">
        {navLinks.map((link) => (
          <li key={link.id} className="hover:opacity-75 transition-300">
            <NavLink
              to={link.path}
              className="w-full h-11 flex-center text-2xl"
            >
              {link.id === "home" ? <House /> : link.id === "tv" ? <Tv /> : <Popcorn />}
            </NavLink>
          </li>
        ))}
      </ul>

      <button
        type="button"
        aria-label="search button"
        className="w-full h-11 flex-center text-2xl hover:opacity-75 transition-300 text-white"
      >
        <Search />
      </button>
    </nav>
  );
};

export default MobileNav;
