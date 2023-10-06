import styles from "../Styles/IntroText.module.css";

const IntroText = () => {
  return (
    <article className={styles.article}>
      <h1 className={styles.motherHeading}>
        {" "}
        <span className={styles.heading}>Welcome to Edmund Alags Images</span>
      </h1>
      <p>
        Explore captivating moments frozen in time. Discover the world's beauty
        through our lens. Enjoy the art of photography.
      </p>
    </article>
  );
};

export default IntroText;
