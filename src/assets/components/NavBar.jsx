import { NavLink } from "react-router-dom";
import { useRef } from "react";
import { Sling as Hamburger } from "hamburger-react";
import logo2 from "../img/Navlogo.png";
import logo from "../img/resellmeLogo.png";
const NavBar = () => {
  const navTitles = {
    navTitle: "Docs",
    navTitle2: "Blog",
    navTitle3: "About Us",
    navTitle4: "Support",
    navTitle5: "Portal",
    navTitle6: "Register",
  };
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <header>
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="ReSellMe Logo" className="img-fluid" />
        </NavLink>
        <nav ref={navRef}>
          <a href="/#">{navTitles.navTitle}</a>
          <a href="/#">{navTitles.navTitle2}</a>
          <a href="/#">{navTitles.navTitle3}</a>
          <a href="/#">
            {navTitles.navTitle4}{" "}
            <img src={logo2} alt="" className="img-fluid" />
          </a>
          <a href="/#">
            {navTitles.navTitle5}{" "}
            <img src={logo2} alt="" className="img-fluid" />
          </a>
          <a href="/#">
            {navTitles.navTitle6}{" "}
            <img src={logo2} alt="" className="img-fluid" />
          </a>
        </nav>
        <div className="d-flex  ">
          <p>Menu</p>
          <button className=" btn" onClick={showNavbar}>
            <Hamburger
              direction="right"
              color="#ffff"
              easing="ease-in"
              duration={0.7}
            />
          </button>
        </div>
      </header>
    </>
  );
};

export default NavBar;
