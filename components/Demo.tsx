import styles from '../styles/Demo.module.css'

const Demo = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h2>Welcome to</h2>
                    <h1>Red Tetris</h1>
                </div>

                <div className={styles.demoBtn}><button className="btn">Demo</button></div>
                <div className={styles.liveDemo}>&nbsp;</div>
            </div>
        </>
    )
}

export default Demo;