import { useOptions } from '../../context/optionsContext';
import { OptionActionKind } from '../../reducers/scoreReducerTypes';
import { generateRandomIndex } from '../../utils/generateRandomIndex';
import HandSelection from '../HandSelection';
import styles from './ChooseAndPlay.module.css';

const ChooseAndPlay = () => {
    const optionsContext = useOptions();
    const { dispatch } = optionsContext;
    const HandOptionsArray = optionsContext.options.map((option, i) => {
        return <HandSelection name={option.name} icon={option.icon} key={option.name} handChoiceIndex={i} />
    });
    const play = () => {
        const randomIndex = generateRandomIndex();
        dispatch({ type: OptionActionKind.UPDATE_COMPUTER_CHOICE, payload: randomIndex });
    }
    return (
        <>
            <div className={styles.choiceBtnCtn}>{HandOptionsArray}</div>
            <button className={styles.playBtn} onClick={play}>Play</button>
        </>
    )
}

export default ChooseAndPlay;
