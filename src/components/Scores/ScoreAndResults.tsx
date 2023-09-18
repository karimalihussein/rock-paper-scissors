import styles from './ScoreAndResults.module.css';

const ScoreAndResults = () => {
    return <>
        <div className={styles.scoreCtn}>
            <div className={styles.score}>
                <h3>SCORE</h3>
                <p>Player: 0</p>
            </div>
            <div className={styles.score}>
                <h3>SCORE</h3>
                <p>Computer: 0</p>
            </div>
        </div>
        <div className={styles.result}>
            <div className={styles.playerHand}></div>
            <div className={styles.midCol}></div>
            <div className={styles.computerHand}></div>
        </div>
    </>
};
export default ScoreAndResults;
