import css from "./NavBar.module.css"


const Navbar = () => {
    return (
      <div className={css.Nav}>
        <ul className={css.NavList}>
        <a href="/">Home</a>
        <a href="/">Manga</a>
        <a href="/">Kontakt</a>
        <a href="/">Ekipa</a>
        </ul>
      </div>
    );
  };

export default Navbar