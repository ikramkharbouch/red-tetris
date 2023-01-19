import styles from "../styles/Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.logo}>Red Tetris</h1>
      <Link href="/lobby">
        <button className="btn">Start</button>
      </Link>
    </div>
  );
};

export default Header;
