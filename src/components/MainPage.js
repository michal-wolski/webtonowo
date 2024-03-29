import css from "./MainPage.module.css";
import succubus from "../images/mySuccubusGirfiend.jpg";
import solo from "../images/solo.jpg";

const MainPage = () => {
  return (
    <div className={css.MainContainer}>
      <div className={css.LeftBox}>
        <h2 className={css.Title}>My Succubus Girlfriend</h2>
        <p className={css.Description}>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry.
        </p>
      </div>
      <div className={css.RightBox}>
        <ul className={css.List}>
          <li className={css.ListItem}>
            <img
              className={css.Image}
              src={succubus}
              alt="My Succubus Girlfriend logo"
            />
          </li>
          <li className={css.ListItem}>
            <img className={css.Image} src={solo} alt="Solo bug player logo" />
          </li>
          <li className={css.ListItem}>
            <img className={css.Image} src={solo} alt="onepunmchman" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainPage;
