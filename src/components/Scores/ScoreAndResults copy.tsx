import { useEffect, useState } from 'react';
import { useOptions } from '../../context/optionsContext';
import styles from './ScoreAndResults.module.css';
import { OptionActionKind } from '../../reducers/scoreReducerTypes';
import { checkWinner } from '../../utils/checkWinner';

const ScoreAndResults = () => {
    const [timer, setTimer] = useState<number>(3);
    const optionsContext = useOptions();
    const { runTimer } = optionsContext.state;
    const { dispatch, options } = optionsContext;
    const playerHand = optionsContext.state.playerHand;
    const playerHandName = optionsContext.options[playerHand].name;
    const playerHandIcon = optionsContext.options[playerHand].icon;
    const playerScore = optionsContext.state.score.player;

    const computerHand = optionsContext.state.computerHand;
    const computerHandName = optionsContext.options[computerHand].name;
    const computerHandIcon = optionsContext.options[computerHand].icon;
    const computerScore = optionsContext.state.score.computer;

    const { winner, message } = optionsContext.state.results;

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
            checkWinner(dispatch, playerHandName, computerHandName);
        }
    }, [timer]);

    return <>
        <div className={styles.scoreCtn}>
            <div className={styles.score}>
                <h3>SCORE</h3>
                <p>Player: {playerScore}</p>
            </div>
            <div className={styles.score}>
                <h3>SCORE</h3>
                <p>Computer: {computerScore}</p>
            </div>
        </div>
        <div className={styles.results}>
            <div className={`${styles.playerHand} ${winner === 'Player' ? styles.winnerAnimation : ''}`}>

                {runTimer && <div className={styles.palyerShake}>{options[0].icon}</div>}
                {!runTimer && winner && (
                    <>
                        <div> {playerHandIcon}</div>
                        <p data-testid="playerHand" className={styles.playerHandName}>{playerHandName}</p>
                    </>
                )}
            </div>
            <div className={styles.midCol}>
                {runTimer && <p data-testid="timer" className={styles.timer}>{timer}</p>}
                {!runTimer && winner &&
                    <div className={styles.winnerCtn}>
                        <p data-testid="winner" className={styles.winner}>{winner}</p>
                        <p data-testid="message" className={styles.message}>{message}</p>
                    </div>
                 }
            </div>
            {/* <div className={styles.computerHand}> */}
            <div className={`${styles.computerHand} ${winner === 'Computer' ? styles.winnerAnimation : ''}`}>
                {runTimer && <div className={styles.computerShake}>{options[0].icon}</div>}
                {!runTimer && winner && (
                    <>
                        <div> {computerHandIcon}</div>
                        <p data-testid="computerHand" className={styles.computerHandName}>{computerHandName}</p>
                    </>
                )}
            </div>
        </div>
    </>
};
export default ScoreAndResults;
