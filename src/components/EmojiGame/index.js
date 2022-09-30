// /*
// Quick Tip

// - Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

// const shuffledEmojisList = () => {
//   const {emojisList} = this.props
//   return emojisList.sort(() => Math.random() - 0.5)
// }

// */

// import {Component} from 'react'
// import NavBar from '../NavBar/index'
// import EmojiCard from '../EmojiCard/index'
// import WinOrLoseCard from '../WinOrLoseCard/index'
// import './index.css'

// class EmojiGame extends Component {
//   state = {score: 0, topScore: 0, clickedEmojiList: []}

//   clickedEmojis = id => {
//     const {emojisList} = this.props
//     const {score, clickedEmojiList} = this.state

//     this.setState(prevState => ({
//       clickedEmojiList: [...prevState.clickedEmojiList, id],
//     }))
//     const booleanValue = clickedEmojiList.includes(id)
//     if (booleanValue === true) {
//       this.setState(prevState => ({score: prevState.score + 1}))
//     }
//     console.log(score)
//   }

//   render() {
//     const {emojisList} = this.props
//     const {score, topScore, clickedEmojiList} = this.state
//     console.log(clickedEmojiList)
//     return (
//       <div className="bg-container">
//         <NavBar score={score} />
//         <div className="card-container">
//           <div className="emojis-container">
//             {emojisList.map(eachEmoji => (
//               <EmojiCard
//                 emojisList={eachEmoji}
//                 key={eachEmoji.id}
//                 clickedEmojis={this.clickedEmojis}
//               />
//             ))}
//           </div>
//           <WinOrLoseCard />
//         </div>
//       </div>
//     )
//   }
// }

// export default EmojiGame

import {Component} from 'react'

import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojisList: [],
    isGameInProgress: true,
    topScore: 0,
  }

  resetGame = () => {
    this.setState({clickedEmojisList: [], isGameInProgress: true})
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isWon = clickedEmojisList.length === emojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={this.resetGame}
        score={clickedEmojisList.length}
      />
    )
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }

    this.setState({topScore: newTopScore, isGameInProgress: false})
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isEmojiPresent = clickedEmojisList.includes(id)
    const clickedEmojisLength = clickedEmojisList.length

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(previousState => ({
        clickedEmojisList: [...previousState.clickedEmojisList, id],
      }))
    }
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props

    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojisList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()

    return (
      <ul className="emojis-list-container">
        {shuffledEmojisList.map(emojiObject => (
          <EmojiCard
            key={emojiObject.id}
            emojiDetails={emojiObject}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {clickedEmojisList, isGameInProgress, topScore} = this.state

    return (
      <div className="app-container">
        <NavBar
          currentScore={clickedEmojisList.length}
          isGameInProgress={isGameInProgress}
          topScore={topScore}
        />
        <div className="emoji-game-body">
          {isGameInProgress ? this.renderEmojisList() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
