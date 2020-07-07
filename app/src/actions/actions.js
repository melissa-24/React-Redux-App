import axios from "axios";
const url = `https://cors-anywhere.herokuapp.com/https://cleanuri.com/api/v1/shorten`;

export const FETCHING_URL = "FETCHING_URL";
export const FETCH_URL_SUCCESS = "FETCH_URL_SUCCESS";
export const FETCH_URL_FAILURE = "FETCH_URL_FAILURE";

export const shortenURL = (userURL) => (dispatch) => {
  console.log(userURL);
  dispatch({ type: FETCHING_URL });
  const urlToSend = userURL.includes("https://")
    ? userURL
    : "https://" + userURL;
  console.log(urlToSend);
  axios
    .post(url, { url: urlToSend })
    .then((res) => {
      //expecting back result_url
      setTimeout(() => {
        console.log(res.data);
        dispatch({ type: FETCH_URL_SUCCESS, payload: res.data.result_url });
      }, 200);
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: FETCH_URL_FAILURE,
        payload: `Something Went Wrong With Your Request...`,
      });
    });
};