import { NavLink } from "react-router-dom"

import logo from "../../../assets/logo.png"
import { Search } from "lucide-react"

const DesktopNav = ({ navRef, navLinks }) => {
  return (
    <nav
        ref={navRef}
        aria-label="desktop navigation menu"
        className="fixed top-0 z-50 w-full grid grid-cols-3 bg-black px-4 py-2.5 md:px-10 will-change-transform"
      >
        <NavLink 
          to={"/"} 
          className="flex items-center h-10"
        >
          <img 
            className="h-6"
            src={logo} alt="Home page" />
        </NavLink>

        <ul 
          className="hidden md:flex justify-center items-center gap-6"
        >
          {navLinks.map((link) => (
            <li 
              key={link.id}
              className="hover:opacity-75 transition-300"
            >
              <NavLink 
                to={link.path}
                className=""
              >{link.label}</NavLink>
            </li>
          ))}
        </ul>

        <div
          className="hidden md:flex justify-end"
        >
          <button
          type="button"
          aria-label="search button"
          className="h-10 w-10 flex-center text-2xl hover:opacity-75 transition-300"
        >
          <Search />
        </button>
        </div>
      </nav>
  )
}

export default DesktopNav