import HandSelection from '../HandSelection';
import styles from './ChooseAndPlay.module.css';
import {FaRegHandRock, FaRegHandPaper, FaRegHandScissors} from 'react-icons/fa';

const ChooseAndPlay = () => {
    return (
        <>
            <div className={styles.choiceBtnCtn}>
                <HandSelection name="rock" icon={<FaRegHandRock size={60} />} />
                <HandSelection name="paper" icon={<FaRegHandPaper size={60} />} />
                <HandSelection name="scissors" icon={<FaRegHandScissors size={60} />} />
            </div>
            <button className={styles.playBtn}>ROCK</button>
        </>
    )
}

export default ChooseAndPlay;
