import { NavLink } from "react-router-dom";
import logo from '../img/resellmeLogo.png'
const NavBar = () => {
  const navTitles = {

    navTitle: 'Docs',
    navTitle2:'Blog',
    navTitle3: 'About Us',
    navTitle4:'Support',
    navTitle5: 'Portal',
    navTitle6:'Register'
  };
  return (
    <section>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <NavLink to="/" className="navbar-brand">
                <img src={logo} alt="ReSellMe Logo" className="img-fluid" />
            </NavLink>
            <NavLink to="/" className="navbar-brand">
                {navTitles.navTitle}
            </NavLink>
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
