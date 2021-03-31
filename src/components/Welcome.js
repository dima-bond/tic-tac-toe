import './Welcome.css'

function Welcome({ handleStart, handleInput, firstPlayer, secondPlayer }) {
  return (
    <div className="welcome__container">
      <div className="welcome">
        <p>Please, enter your name:</p>
        <input
          name="playerOne"
          value={firstPlayer}
          onChange={handleInput}
          type="text" 
          placeholder="Player Cross"
        ></input>
        <input
          name="playerTwo"
          value={secondPlayer}
          onChange={handleInput}
          type="text" 
          placeholder="Player Zero"
        ></input>
        <button type="button" onClick={handleStart}>Start the game!</button>
      </div>
    </div>
  )
}

export default Welcome;
