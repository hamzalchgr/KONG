import { useRef } from "react";

import { navLinks } from "../../../lib/constants/navLinks";

import useHideOnScroll from "./hook/useHideOnScroll";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
// import Search from "../../media/Search";

import { Outlet } from "react-router-dom";

const Header = () => {
  const headerRef = useRef(null);
  const navRef = useRef(null);

  useHideOnScroll({ navRef, headerRef });

  // const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header ref={headerRef}>
        <DesktopNav
          navRef={navRef}
          navLinks={navLinks}
          // isSearchOpen={isSearchOpen}
          // setIsSearchOpen={setIsSearchOpen}
        />

        <MobileNav
          navLinks={navLinks}
          // isSearchOpen={isSearchOpen}
          // setIsSearchOpen={setIsSearchOpen}
        />

        {/* <Search isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} /> */}

      <Outlet />
      </header>
    </>
  );
};

export default Header;
