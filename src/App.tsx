import styles from './App.module.css';
import ScoreAndResults from './components/Scores/ScoreAndResults';
import ChooseAndPlay from './components/Play/ChooseAndPlay';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.titleCtn}>
          <h1>ROCK, PAPER, SECISSORS</h1>
          <p>React Typescript Game!</p>
      </div>
      <ScoreAndResults />
      <ChooseAndPlay />
    </div>
  )
}

export default App;
