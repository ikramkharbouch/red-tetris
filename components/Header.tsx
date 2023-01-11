import styles from '../styles/Header.module.css'

const Header = () => {
    return(
    <div className={styles.main}>
        <h1 className={styles.logo}>Red Tetris</h1>
        {/* <ul className={styles.list}>
            <li>Home</li>
            <li>Join</li>
        </ul> */}
        <button className="btn">
            Start
        </button>
    </div>)
}

export default Header;