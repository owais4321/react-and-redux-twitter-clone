export const RECIEVE_TWEETS = "RECIEVE_TWEETS";
export  function recieveTweets(tweets) {
  return {
    type: RECIEVE_TWEETS,
    tweets,
  };
}
