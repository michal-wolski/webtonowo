import css from "./MainPage.module.css";
import image from "../images/onepunch.jpg";

const MainPage = () => {
  return (
    <div className={css.MainContainer}>
      <div className={css.LeftBox}>
        <h2 className={css.Title}>Shotgun Boys</h2>
        <p className={css.Description}>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry.
        </p>
      </div>
      <div className={css.RightBox}>
        <img
          className={css.Image}
          src={image}
          alt="onepunmchman"
          width="256px"
        />
      </div>
    </div>
  );
};

export default MainPage;
