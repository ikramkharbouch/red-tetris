import styles from '../styles/Demo.module.css'
import Tetrominos from './Tetromino';

const Demo = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.leftTetrominoes}><Tetrominos /></div>
                <div>
                    <div className={styles.title}>
                        <h2>Welcome to</h2>
                        <h1>Red Tetris</h1>
                    </div>

                    <div className={styles.demoBtn}><button className="btn">Demo</button></div>
                    <div className={styles.liveDemo}>&nbsp;</div>
                </div>
                <div>
                    {/* <Tetrominos /> */}
                </div>

            </div>
        </>
    )
}

export default Demo;