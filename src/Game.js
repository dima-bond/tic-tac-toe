import { useEffect, useState } from 'react';
import { winners, styles } from './helpers';
import Field from './components/Field';
import Welcome from './components/Welcome';
import './Game.css';

function Game() {
  const [player, setPlayer] = useState('zero');
  const [cell, setCell] = useState(Array(9).fill(null));
  const [showWin, setShowWin] = useState(false);
  const [equal, setEqual] = useState(false);
  const [zerosScore, setZerosScore] = useState(0);
  const [crossesScore, setCrossesScore] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true);
  const [playerNameQuery, setPlayerNameQuery] = useState({
    playerOne: '',
    playerTwo: ''
  });

  useEffect(() => {
    for (let i = 0; i < 8; i++) {
      const [a, b, c] = winners[i];
      if (cell[a] && cell[a] === cell[b] && cell[a] === cell[c]) {
        setShowWin(styles[i]);
        if (player === 'zero') {
          return setZerosScore(prev => prev + 1);
        }
        return setCrossesScore(prev => prev + 1);
      }
    }

    if(!cell.includes(null)) {
      return setEqual(true);
    }

    setPlayer(prev => prev === 'zero' ? 'cross' : 'zero');
  }, [cell])

  const handleClick = (index) => {
    if (cell[index] || showWin) {
      return;
    }
    setCell(prev => {
      let x = [...prev];
      x[index] = player;
      return x;
    })
  }

  const handleReset = () => {
    setPlayer('zero');
    setCell(Array(9).fill(null));
    setShowWin(null);
    setEqual(false);
  }

  const handleStart = () => {
    if (playerNameQuery.playerOne === playerNameQuery.playerTwo) {
      setPlayerNameQuery({
        playerOne: 'Player 1',
        playerTwo: 'Player 2'
      });
    }
    setShowWelcome(false);
  }

  const handleInput = (e) => {
    const value = e.target.value;
    setPlayerNameQuery({
      ...playerNameQuery,
      [e.target.name]: value
    });
  }

  return (
    <div className="container">
      {showWelcome && (
        <Welcome
          handleStart={handleStart}
          handleInput={handleInput}
          firstPlayer={playerNameQuery.playerOne}
          secondPlayer={playerNameQuery.playerTwo}
        />
      )}
      <Field onClick={handleClick} cells={cell} showWin={showWin}/>
      <div className="score">
        <p>Score</p>
        <p>{`${playerNameQuery.playerOne} (cross): ${crossesScore}`}</p>
        <p>{`${playerNameQuery.playerTwo} (zero): ${zerosScore}`}</p>
        {(showWin || equal) && (
          <div className="results">
            {showWin ?
            <p>{player === 'zero' ? playerNameQuery.playerTwo : playerNameQuery.playerOne} wins!</p>
            : <p>No sides!</p>}
            <button type="button" onClick={handleReset}>
              Start over!
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Game;
