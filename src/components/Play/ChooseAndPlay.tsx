import { useOptions } from '../../context/optionsContext';
import HandSelection from '../HandSelection';
import styles from './ChooseAndPlay.module.css';

const ChooseAndPlay = () => {
    const optionsContext = useOptions();
    const HandOptionsArray = optionsContext.options.map((option, i) => {
        return <HandSelection name={option.name} icon={option.icon} key={option.name} handChoiceIndex={i} />
    });
    return (
        <>
            <div className={styles.choiceBtnCtn}>{HandOptionsArray}</div>
            <button className={styles.playBtn}>ROCK</button>
        </>
    )
}

export default ChooseAndPlay;
