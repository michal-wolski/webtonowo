import css from "./NavBar.module.css";

const Navbar = () => {
  return (
    <div className={css.Nav}>
      <div className={css.NavList}>
        <a href="/">Home</a>
        <a href="/">Manga</a>
        <a href="/">Kontakt</a>
        <a href="/">Ekipa</a>
      </div>
    </div>
  );
};

export default Navbar;
