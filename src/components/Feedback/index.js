import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isFeedbackClicked: false,
  }

  onClickEmoji = () => {
    this.setState({isFeedbackClicked: true})
  }

  renderFeedbackCard = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-container">
        <h1 className="feedback-question">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-list">
          {emojis.map(eachEmoji => (
            <li key={eachEmoji.id}>
              <button
                type="button"
                className="emoji-button"
                onClick={this.onClickEmoji}
              >
                <img
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                  className="emoji-image"
                />
                <br />
                <span className="emoji-name">{eachEmoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankYouCard = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thank-you-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="thank-you-text">Thank You!</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackClicked} = this.state

    return (
      <div className="app-container">
        <div className="emoji-card-container">
          {isFeedbackClicked
            ? this.renderThankYouCard()
            : this.renderFeedbackCard()}
        </div>
      </div>
    )
  }
}

export default Feedback
