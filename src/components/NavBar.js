import css from "./NavBar.module.css";

const Navbar = () => {
  return (
    <div className={css.Nav}>
      <div className={css.NavList}>
        <a className={css.NavListItem} href="/">
          Home
        </a>
        <a className={css.NavListItem} href="/">
          Manga
        </a>
        <a className={css.NavListItem} href="/">
          Kontakt
        </a>
        <a className={css.NavListItem} href="/">
          Ekipa
        </a>
      </div>
    </div>
  );
};

export default Navbar;
