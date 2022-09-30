// import './index.css'

// const WinOrLoseCard = props => {
//   const {images, isWin} = props

//   const image = isWin
//     ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
//     : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

//   return (
//     <div className="win-or-lose-container">
//       <div className="content-container">
//         <h1 className="win-card-heading">You Won</h1>
//         <p className="win-card-para">Best Score</p>
//         <p className="win-card-score">12/12</p>
//         <button type="button" className="win-card-button">
//           Play Again
//         </button>
//       </div>
//       <img
//         src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
//         alt="win-or-lose"
//         className="win-card-image"
//       />
//     </div>
//   )
// }

// export default WinOrLoseCard

import './index.css'

const LOSE_IMAGE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WON_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const imageUrl = isWon ? WON_IMAGE : LOSE_IMAGE
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-or-lose-card">
      <div className="details-section">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="current-score-label">{scoreLabel}</p>
        <p className="current-score-value">{score}/12</p>
        <button
          type="button"
          className="play-again-button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="image-section">
        <img className="win-or-lose-image" src={imageUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
