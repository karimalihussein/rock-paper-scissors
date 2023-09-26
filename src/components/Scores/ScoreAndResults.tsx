import React, { useEffect, useState } from 'react';
import { useOptions } from '../../context/optionsContext';
import styles from './ScoreAndResults.module.css';
import { OptionActionKind } from '../../reducers/scoreReducerTypes';
import { checkWinner } from '../../utils/checkWinner';

const ScoreAndResults = () => {
    const [timer, setTimer] = useState<number>(3);
    const { state, dispatch, options } = useOptions();
    const { runTimer, playerHand, computerHand, score, results } = state;
    const { winner, message } = results;

    const playerHandName = options[playerHand]?.name || '';
    const playerHandIcon = options[playerHand]?.icon || '';
    const computerHandName = options[computerHand]?.name || '';
    const computerHandIcon = options[computerHand]?.icon || '';
    const { player: playerScore, computer: computerScore } = score;

    const handleTimer = () => {
        if (timer === 0) {
            setTimer(3);
            dispatch({ type: OptionActionKind.RUN_TIMER, payload: false });
            checkWinner(dispatch, playerHandName, computerHandName);
        }
    };

    useEffect(() => {
        let intervalId: NodeJS.Timeout;

        if (runTimer) {
            intervalId = setInterval(() => {
                setTimer((prev) => {
                    if (prev === 1) {
                        clearInterval(intervalId);
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [runTimer]);

    useEffect(handleTimer, [timer]);

    const renderHand = (handIcon: React.ReactNode, handName: string) => {
        if (runTimer) {
            return <div className={styles.shake}>{options[0].icon}</div>;
        }

        if (winner) {
            return (
                <>
                    <div>{handIcon}</div>
                    <p data-testid={`${handName}Hand`} className={styles.handName}>
                        {handName}
                    </p>
                </>
            );
        }
        return null;
    };

    const renderWinner = () => {
        if (winner) {
            return (
                <div className={styles.winnerCtn}>
                    <p data-testid="winner" className={styles.winner}>
                        {winner}
                    </p>
                    <p data-testid="message" className={styles.message}>
                        {message}
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className={styles.scoreAndResults}>
            {/* Score section */}
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

            {/* Results section */}
            <div className={styles.results}>
                {/* Player hand */}
                <div
                    className={`${styles.playerHand} ${
                        winner === "Player" ? styles.winnerAnimation : ""
                    }`}
                >
                    {renderHand(playerHandIcon, playerHandName)}
                </div>

                {/* Middle column */}
                <div className={styles.midCol}>
                    {/* Timer */}
                    {runTimer && (
                        <p data-testid="timer" className={styles.timer}>
                            {timer}
                        </p>
                    )}

                    {/* Winner */}
                    {renderWinner()}
                </div>

                {/* Computer hand */}
                <div
                    className={`${styles.computerHand} ${
                        winner === "Computer" ? styles.winnerAnimation : ""
                    }`}
                >
                    {renderHand(computerHandIcon, computerHandName)}
                </div>
            </div>
        </div>
    );
};

export default ScoreAndResults;
