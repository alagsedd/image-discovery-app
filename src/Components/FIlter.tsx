import styles from "../Styles/Filter.module.css";

interface Props {
  onSelectSearch: (search: string) => void;
}
const Filter = ({ onSelectSearch }: Props) => {
  return (
    <ul className={styles.ul}>
      <li onClick={() => onSelectSearch("Coding")}>Coding</li>
      <li onClick={() => onSelectSearch("Toys")}>Toys</li>
      <li onClick={() => onSelectSearch("Ocean")}>Ocean</li>
      <li onClick={() => onSelectSearch("Landscape")}>Landscape</li>
      <li onClick={() => onSelectSearch("Tigers")}>Tigers</li>
      <li onClick={() => onSelectSearch("Wolves")}>Wolves</li>
    </ul>
  );
};

export default Filter;
