import axios from "axios";
import { GET_FOLLOWERS, GET_FOLLOWINGS, GET_FOLLOWINGS_FAIL, GET_FOLLOWINGS_SUCCESS, GET_USER_ID, GET_USER_ID_FAIL, GET_USER_ID_SUCCESS } from "../const";
const headers = {
  "x-rapidapi-host": "instagram47.p.rapidapi.com",
  "x-rapidapi-key": "7c77cbbfcfmshec4eed2b8d4985cp1068b1jsncbbb7681baad",
};
export const getUserId = (user1, user2) => async (dispatch) => {
  dispatch({ type: GET_USER_ID });
  // var options1 = {
  //   method: "GET",
  //   url: "https://instagram40.p.rapidapi.com/account-info",
  //   params: { username: { user1 } },
  //   headers,
  // };
  var options1 = {
    method: 'GET',
    url: 'https://instagram40.p.rapidapi.com/account-info',
    params: {username: user1, wrap: '0'},
    headers: {
      'x-rapidapi-host': 'instagram40.p.rapidapi.com',
      'x-rapidapi-key': '7c77cbbfcfmshec4eed2b8d4985cp1068b1jsncbbb7681baad'
    }
  };
  var options2 = {
    method: 'GET',
    url: 'https://instagram40.p.rapidapi.com/account-info',
    params: {username: user2, wrap: '0'},
    headers: {
      'x-rapidapi-host': 'instagram40.p.rapidapi.com',
      'x-rapidapi-key': '7c77cbbfcfmshec4eed2b8d4985cp1068b1jsncbbb7681baad'
    }
  };
  // var options2 = {
  //   method: "GET",
  //   url: "https://instagram47.p.rapidapi.com/get_user_id",
  //   params: { username: { user2 } },
  //   headers,
  // };

  try {
    let usersId = [];
    let { data } = await axios.request(options1);
    usersId = [...usersId, data.id];
    const res = await axios.request(options2);
    usersId = [...usersId, res.data.id];

    dispatch({ type: GET_USER_ID_SUCCESS, payload: usersId });
  } catch (error) {
    // dispatch({ type: GET_USER_ID_FAIL, payload: error.response.data });
    console.error(error);
  }
};

export const getFollowers = (userId1,userId2) => async (dispatch) => {
  dispatch({type:GET_FOLLOWERS})
  // let options1 = {
  //   method: "GET",
  //   url: "https://instagram47.p.rapidapi.com/user_followers",
  //   params: { userid: { usersId1 } },
  //   headers,
  // };
  // let options2 = {
  //   method: "GET",
  //   url: "https://instagram47.p.rapidapi.com/user_followers",
  //   params: { userid: { usersId2 } },
  //   headers,
  // };
  let options1 = {
    method: 'GET',
    url: 'https://instagram40.p.rapidapi.com/followers',
    params: {userid: userId1},
    headers: {
      'x-rapidapi-host': 'instagram40.p.rapidapi.com',
      'x-rapidapi-key': '7c77cbbfcfmshec4eed2b8d4985cp1068b1jsncbbb7681baad'
    }
  };
  let options2 = {
    method: 'GET',
    url: 'https://instagram40.p.rapidapi.com/followers',
    params: {userid: userId2},
    headers: {
      'x-rapidapi-host': 'instagram40.p.rapidapi.com',
      'x-rapidapi-key': '7c77cbbfcfmshec4eed2b8d4985cp1068b1jsncbbb7681baad'
    }
  }
  

  try {
    let usersFollowers = [];
    let { data } = await axios.request(options1);
    usersFollowers = [...usersFollowers, data.users];
    const res = await axios.request(options2);
    usersFollowers = [...usersFollowers, res.data.users];

    dispatch({ type: GET_USER_ID_SUCCESS, payload: usersFollowers });
  } catch (error) {
    // dispatch({ type: GET_USER_ID_FAIL, payload: error.response.data });
    console.error(error);
  }
};


export const getFollowing = (userId1,userId2) => async (dispatch) => {
  dispatch({type:GET_FOLLOWINGS})
  let options1 = {
    method: 'GET',
    url: 'https://instagram40.p.rapidapi.com/following',
    params: {userid: userId1},
    headers: {
      'x-rapidapi-host': 'instagram40.p.rapidapi.com',
      'x-rapidapi-key': '7c77cbbfcfmshec4eed2b8d4985cp1068b1jsncbbb7681baad'
    }
  };
  let options2 = {
    method: 'GET',
    url: 'https://instagram40.p.rapidapi.com/following',
    params: {userid: userId2},
    headers: {
      'x-rapidapi-host': 'instagram40.p.rapidapi.com',
      'x-rapidapi-key': '7c77cbbfcfmshec4eed2b8d4985cp1068b1jsncbbb7681baad'
    }
  }
  

  try {
    let userFollowings = [];
    let { data } = await axios.request(options1);
    userFollowings = [...userFollowings, data.users];
    console.log(data)
    const res = await axios.request(options2);
    userFollowings = [...userFollowings, res.data.users];
    console.log(res.data)

    dispatch({ type: GET_FOLLOWINGS_SUCCESS, payload: userFollowings });
    console.log(userFollowings)
  } catch (error) {
    // dispatch({ type: GET_FOLLOWINGS_FAIL, payload: error.response.data });
    console.error(error);
  }
};


