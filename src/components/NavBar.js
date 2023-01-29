import css from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={css.Nav}>
      <NavLink className={css.Logo} to="/">
        Webtonowo
      </NavLink>
      <nav className={css.NavList}>
        <NavLink className={css.NavListItem} to="/">
          Home
        </NavLink>
        <NavLink className={css.NavListItem} to="/manga">
          Manga
        </NavLink>
        <NavLink className={css.NavListItem} to="/contact">
          Kontakt
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
