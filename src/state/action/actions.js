import axios from "axios";
import {
  GET_FOLLOWERS,
  GET_FOLLOWERS_FAIL,
  GET_FOLLOWERS_SUCCESS,
  GET_FOLLOWINGS,
  GET_FOLLOWINGS_FAIL,
  GET_FOLLOWINGS_SUCCESS,
  GET_USER_ID,
  GET_USER_ID_FAIL,
  GET_USER_ID_SUCCESS,
} from "../const";

const options = (endpoint,params) => {
  let opt = {
    method: "GET",
    url: `https://instagram40.p.rapidapi.com/${endpoint}`,
    params,
    headers: {
      "x-rapidapi-host": "instagram40.p.rapidapi.com",
      // 'x-rapidapi-key': '7c77cbbfcfmshec4eed2b8d4985cp1068b1jsncbbb7681baad'
      "x-rapidapi-key": "0678428f1cmsh00c8fb4608b2d1dp112d6bjsndca4e7b2fa1c",
    },
  };
  return opt
}
export const getUserId = (user1, user2) => async (dispatch) => {
  let options1 = options("account-info",{ username: user1, wrap: "0" })
  let options2 = options("account-info",{ username: user2, wrap: "0" })


  try {
    let usersId = [];
    let { data } = await axios.request(options1);
    usersId = [...usersId, data.id];
    const res = await axios.request(options2);
    usersId = [...usersId, res.data.id];
    return { type: GET_USER_ID_SUCCESS, payload: usersId };
  } catch (error) {
    console.error(error);
    return { type: GET_USER_ID_FAIL, payload: error.response.data };
    
  }
};

export const getFollowers = (userId1, userId2) => async (dispatch) => {
  // dispatch({type:GET_FOLLOWERS})
  let options1 = options("followers",{ userid: userId1 })
  let options2 = options("followers",{ userid: userId2 })

  // let options1 = {
  //   method: "GET",
  //   url: `https://instagram85.p.rapidapi.com/account/${userId1}/followers`,
  //   // params: {userid: userId1},
  //   headers: {
  //     "x-rapidapi-host": "instagram85.p.rapidapi.com",
  //     // 'x-rapidapi-key': '7c77cbbfcfmshec4eed2b8d4985cp1068b1jsncbbb7681baad'
  //     "x-rapidapi-key": "0099c0a8b8msh8ecaab8c4e20a1cp1d90e7jsn88132f6483ad",
  //   },
  // };
  // let options2 = {
  //   method: "GET",
  //   url: `https://instagram85.p.rapidapi.com/account/${userId2}/followers`,
  //   // params: {userid: userId2},
  //   headers: {
  //     "x-rapidapi-host": "instagram85.p.rapidapi.com",
  //     // 'x-rapidapi-key': '7c77cbbfcfmshec4eed2b8d4985cp1068b1jsncbbb7681baad'
  //     "x-rapidapi-key": "0099c0a8b8msh8ecaab8c4e20a1cp1d90e7jsn88132f6483ad",
  //   },
  // };

  try {
    let usersFollowers = [];
    let { data } = await axios.request(options1);
    usersFollowers = [...usersFollowers, data.users];
    const res = await axios.request(options2);
    usersFollowers = [...usersFollowers, res.data.users];
    dispatch({ type: GET_FOLLOWERS_SUCCESS, payload: usersFollowers });
  } catch (error) {
    dispatch({ type: GET_FOLLOWERS_FAIL, payload: error.response.data });
    console.error(error);
  }
};

export const getFollowing = (userId1, userId2) => async (dispatch) => {
  // dispatch({type:GET_FOLLOWINGS})
  let options1 = options("following",{ userid: userId1 })
  let options2 = options("following",{ userid: userId2 })


  try {
    let userFollowings = [];
    let { data } = await axios.request(options1);
    userFollowings = [...userFollowings, data.users];
    console.log(data);
    const res = await axios.request(options2);
    userFollowings = [...userFollowings, res.data.users];
    console.log(res.data);

    dispatch({ type: GET_FOLLOWINGS_SUCCESS, payload: userFollowings });
    console.log(userFollowings);
  } catch (error) {
    dispatch({ type: GET_FOLLOWINGS_FAIL, payload: error.response.data });
    console.error(error);
  }
};
