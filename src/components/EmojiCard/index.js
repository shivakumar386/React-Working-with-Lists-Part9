// import './index.css'

// const EmojiCard = props => {
//   const {emojisList, clickedEmojis} = props
//   const {id, emojiName, emojiUrl} = emojisList
//   const clickedOnEmoji = () => {
//     clickedEmojis(id)
//   }

//   return (
//     <button type="button" className="button" onClick={clickedOnEmoji}>
//       <img src={emojiUrl} alt={emojiName} className="emoji" />
//     </button>
//   )
// }

// export default EmojiCard

import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmojiCard = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-item">
      <button type="button" className="emoji-btn" onClick={onClickEmojiCard}>
        <img className="emoji-icon" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
