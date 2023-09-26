import { useEffect, useState } from 'react';
import { useOptions } from '../../context/optionsContext';
import styles from './ScoreAndResults.module.css';
import { OptionActionKind } from '../../reducers/scoreReducerTypes';

const ScoreAndResults = () => {
    const [timer, setTimer] = useState<number>(3);
    const optionsContext = useOptions();
    const { runTimer } = optionsContext.state;
    const { dispatch } = optionsContext;

    useEffect(() => {
        if (runTimer) {
            const newInterval = setInterval(() => {
                setTimer((prev) => {
                    if (prev === 1) {
                        clearInterval(newInterval);
                    }
                    return prev - 1;
                });
            }, 1000);

        }
    }, [runTimer]);

    useEffect(() => {
        if (timer === 0) {
            setTimer(3);
            dispatch({ type: OptionActionKind.RUN_TIMER, payload: false });
        }
    }, [timer]);

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
        <div className={styles.results}>
            <div className={styles.playerHand}></div>
            <div className={styles.midCol}>
                {runTimer && <p data-testid="timer" className={styles.timer}>{timer}</p>}
            </div>
            <div className={styles.computerHand}></div>
        </div>
    </>
};
export default ScoreAndResults;
