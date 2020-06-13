import React, { Component } from "react";
import { formatTweet, formatDate } from "../utils/helpers";
import { connect } from "react-redux";
import { TiArrowBackOutline,TiHeartFullOutline,TiHeartOutline } from "react-icons/ti";
class Tweet extends Component {
  toParent = (e, id) => {
    e.preventDefault();
    //todo
    //handling parent tweet
  };

  handleLike = (e) => {
    e.preventDefault();
    //todo
    //handle likes here
  };
  render() {
    const { tweet } = this.props;
    if (tweet === null) {
      return <p>This Tweet doesn't exists</p>;
    }
    const {
      name,
      id,
      timestamp,
      text,
      avatar,
      likes,
      replies,
      hasLiked,
      parent,
    } = tweet;
    return (
      <div className="tweet">
        <img
          src={avatar}
          alt={`This is picture of ${name}`}
          className="avatar"
        />
        <div className="tweet-info">
          <div>
            <span>{name}</span>
            <div>{formatDate(timestamp)}</div>
            {parent && (
              <button
                className="replying-to"
                onClick={(e) => {
                  this.toParent(e, parent.id);
                }}
              >
                Replying to @{parent.author}
              </button>
            )}
            <p>{text}</p>
          </div>
          <div className="tweet-icon">
            <TiArrowBackOutline className="tweet-icon" />
            <span>{replies !== 0 && replies}</span>
            <button className="heart-button" onclick={this.handleLike}>
              {hasLiked === true ? (
                <TiHeartFullOutline color="#0245e" className="tweet-icon" />
              ) : (
                <TiHeartOutline className="tweet-icon" />
              )}
            </button>
            <span>{likes !== 0 && likes}</span>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ authedUser, tweets, users }, { id }) {
  const tweet = tweets[id];
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null;
  return {
    authedUser,
    tweet: tweet
      ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
      : null,
  };
}
export default connect(mapStateToProps)(Tweet);
