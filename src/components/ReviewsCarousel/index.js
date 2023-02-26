import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeReviewIndex: 0,
  }

  onRightClick = () => {
    const {activeReviewIndex} = this.state
    const {reviewsList} = this.props

    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  renderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="review-container">
        <img src={imgUrl} alt={username} />
        <p className="user-name">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onLeftClick = () => {
    const {activeReviewIndex} = this.state

    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  render() {
    const {activeReviewIndex} = this.state
    const {reviewsList} = this.props
    const currentReviewDetails = reviewsList[activeReviewIndex]

    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="arrow-container">
          <button
            type="button"
            className="arrow-button"
            data-testid="leftArrow"
            onClick={this.onLeftClick}
          >
            <img
              alt="left arrow"
              className="arrow"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            />
          </button>
          {this.renderActiveReview(currentReviewDetails)}
          <button
            type="button"
            className="arrow-button"
            data-testid="rightArrow"
            onClick={this.onRightClick}
          >
            <img
              alt="right arrow"
              className="arrow"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
