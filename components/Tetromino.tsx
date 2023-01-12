import styles from '../styles/Tetromino.module.css'


const Cube = ({ cubeColor }: any) => {
    return (
        <div className={styles.cube} style={{ backgroundColor: cubeColor }}>
            &nbsp;
        </div>
    )
}

// How many shapes do we have: seven shapes (five are raw), two come in right and left
// The shapes to make are
const T_tetromino = () => {
    return (<>
        <div>
            <div><Cube cubeColor="#00B2FF" /></div>
            <div className={styles.flexRow}>
                <Cube cubeColor="#00B2FF" />
                <Cube cubeColor="#00B2FF" />
                <Cube cubeColor="#00B2FF" />
            </div>
        </div>

    </>)
}

const L_Tetromino_Right = () => {

}

const L_Tetromino_Left = () => {

}

const Skew_Tetromino_Right = () => {

}

const Skew_Tetromino_Left = () => {

}

const Square_Tetromino = () => {
    return (<>
        <div>
            <div className={styles.flexRow}><Cube cubeColor="#DC1569" /><Cube cubeColor="#DC1569" /></div>
            <div className={styles.flexRow}>
                <Cube cubeColor="#DC1569" />
                <Cube cubeColor="#DC1569" />

            </div>
        </div>

    </>)
}

const Straight_Tetromino = () => {

}

const Tetrominos = () => {
    return (<>
        <div className={styles.sideTetrominoes}>
            <T_tetromino />
            <Square_Tetromino />
        </div>

    </>)
}

export default Tetrominos;