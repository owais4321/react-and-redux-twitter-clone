import React, { Component } from "react";
import { formatTweet, formatDate } from "../utils/helpers";
import { connect } from "react-redux";
import { TiArrowBackOutline,TiHeartFullOutline,TiHeartOutline } from "react-icons/ti";
import {toggleTweetHandler} from '../actions/tweets';
class Tweet extends Component {
  toParent = (e, id) => {
    e.preventDefault();
//todo
//implement this function
  };

  handleLike = (e) => {
    e.preventDefault();
    const {dispatch,tweet,authedUser}=this.props;
    dispatch(toggleTweetHandler({
      id:tweet.id,
      hasLiked:tweet.hasLiked,
      authedUser
    }));
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
            <button className="heart-button" onClick={(e)=>{this.handleLike(e)}}>
              {hasLiked === true ? (
                <TiHeartFullOutline color="red" className="tweet-icon" />
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
