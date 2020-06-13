import { getInitialData } from "../utils/api";
import { recieveUsers } from "./users";
import { recieveTweets } from "./tweets";
import { setAuthedUser } from "./autheduser";
import { showLoading, hideLoading } from "react-redux-loading";
const AUTHED_ID = "tylermcginnis";
export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, tweets }) => {
      dispatch(recieveTweets(tweets));
      dispatch(recieveUsers(users));
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
}
