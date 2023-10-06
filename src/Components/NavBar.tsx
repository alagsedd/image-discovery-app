import { useRef } from "react";
import logo from "../assets/Images/logo.jpg";
import styles from "../Styles/NavBar.module.css";

interface Props {
  onSearchGame: (search: string) => void;
}
const NavBar = ({ onSearchGame }: Props) => {
  const searchRef = useRef<HTMLInputElement>(null);

  const handleFormSubmission = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchRef.current !== null) {
      onSearchGame(searchRef.current.value);
      console.log(searchRef.current.value);
      searchRef.current.value = "";
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" className={styles.image} />
      </div>
      <form onSubmit={handleFormSubmission}>
        <input
          ref={searchRef}
          placeholder="Search 89,000 images"
          type="text"
          className={`form-control`}
        />
      </form>
    </nav>
  );
};

export default NavBar;
