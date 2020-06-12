import { getInitialData } from "../utils/api";
import { recieveUsers } from "./users";
import { recieveTweets } from "./tweets";
import { setAuthedUser } from "./autheduser";
const AUTHED_ID = "tylermcginnis";
export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then((users, tweets) => {
      dispatch(recieveTweets(tweets));
      dispatch(recieveUsers(users));
      dispatch(setAuthedUser(SET_AUTHED_ID));
    });
  };
}
