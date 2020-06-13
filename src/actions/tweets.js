import { saveLikeToggle } from "../utils/api";
export const RECIEVE_TWEETS = "RECIEVE_TWEETS";
export const TOGGLE_TWEET = "TOGGLE_TWEET";
export function recieveTweets(tweets) {
  return {
    type: RECIEVE_TWEETS,
    tweets,
  };
}

function toggleTweet({ id, hasLiked, authedUser }) {
  return {
    type: TOGGLE_TWEET,
    id,
    hasLiked,
    authedUser,
  };
}

export function toggleTweetHandler(info) {
  return (dispatch) => 
  {dispatch(toggleTweet(info));
  return saveLikeToggle(info).catch((e) => {
    console.log(e);
    dispatch(toggleTweet(info));
    alert("Problem liking tweet"); 
  });
}
}
