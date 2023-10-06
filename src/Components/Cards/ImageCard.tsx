import styles from "../../Styles/ImageCard.module.css";

interface Props {
  image: string;
  photographer: string;
  alt: string;
}
const ImageCard = ({ photographer, alt, image }: Props) => {
  return (
    <article className={styles.article}>
      <img src={image} alt={alt} className={styles.image} />
      <span className={styles.taken}>Photographer: {photographer}</span>
    </article>
  );
};

export default ImageCard;
