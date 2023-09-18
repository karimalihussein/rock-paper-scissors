import { useOptions } from '../../context/optionsContext';
import HandSelection from '../HandSelection';
import styles from './ChooseAndPlay.module.css';

const ChooseAndPlay = () => {
    const optionsContext = useOptions();
    const HandOptionsArray = optionsContext.options.map((option) => {
        return <HandSelection name={option.name} icon={option.icon} key={option.name} />
    });
    return (
        <>
            <div className={styles.choiceBtnCtn}>
                {HandOptionsArray}
            </div>
            <button className={styles.playBtn}>ROCK</button>
        </>
    )
}

export default ChooseAndPlay;
