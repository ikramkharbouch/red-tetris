import styles from "../styles/Header.module.css";
import lobbyStyles from "../styles/Lobby.module.css";

const Lobby = () => {
    return (<>
        <div className={styles.main}>
      <h1 className={styles.logo}>Red Tetris</h1>
        <button className="btn">Menu</button>
    </div>

    <div className={lobbyStyles.container}>
        <div className={lobbyStyles.game}>
            <div className={lobbyStyles.score}>&nbsp;</div>
            <div className={lobbyStyles.tetris}>&nbsp;</div>
        </div>
        <div className={lobbyStyles.controls}>&nbsp;</div>
    </div>
    </>)
}

export default Lobby;