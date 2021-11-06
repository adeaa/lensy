import axios from "axios";
import { GET_FOLLOWERS, GET_FOLLOWINGS, GET_FOLLOWINGS_FAIL, GET_FOLLOWINGS_SUCCESS, GET_USER_ID, GET_USER_ID_FAIL, GET_USER_ID_SUCCESS } from "../const";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
export const getUserId = (user1, user2) => async (dispatch) => {

  let options1 = {
    method: 'GET',
    url: 'https://instagram40.p.rapidapi.com/account-info',
    params: {username: user1, wrap: '0'},
    headers: {
      'x-rapidapi-host': 'instagram40.p.rapidapi.com',
      // 'x-rapidapi-key': '7c77cbbfcfmshec4eed2b8d4985cp1068b1jsncbbb7681baad'
      'x-rapidapi-key': '0099c0a8b8msh8ecaab8c4e20a1cp1d90e7jsn88132f6483ad',
      
    }
  };
  let options2 = {
    method: 'GET',
    url: 'https://instagram40.p.rapidapi.com/account-info',
    params: {username: user2, wrap: '0'},
    headers: {
      'x-rapidapi-host': 'instagram40.p.rapidapi.com',
      // 'x-rapidapi-key': '7c77cbbfcfmshec4eed2b8d4985cp1068b1jsncbbb7681baad'
      'x-rapidapi-key': '0099c0a8b8msh8ecaab8c4e20a1cp1d90e7jsn88132f6483ad'
    }
  };
 

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
  // dispatch({type:GET_FOLLOWERS})

  let options1 = {
    method: 'GET',
    url: `https://instagram85.p.rapidapi.com/account/${userId1}/followers`,
    // params: {userid: userId1},
    headers: {
      'x-rapidapi-host': 'instagram85.p.rapidapi.com',
      // 'x-rapidapi-key': '7c77cbbfcfmshec4eed2b8d4985cp1068b1jsncbbb7681baad'
      'x-rapidapi-key': '0099c0a8b8msh8ecaab8c4e20a1cp1d90e7jsn88132f6483ad'
    }
  };
  let options2 = {
    method: 'GET',
    url: `https://instagram85.p.rapidapi.com/account/${userId2}/followers`,
    // params: {userid: userId2},
    headers: {
      'x-rapidapi-host': 'instagram85.p.rapidapi.com',
      // 'x-rapidapi-key': '7c77cbbfcfmshec4eed2b8d4985cp1068b1jsncbbb7681baad'
      'x-rapidapi-key': '0099c0a8b8msh8ecaab8c4e20a1cp1d90e7jsn88132f6483ad'
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
  // dispatch({type:GET_FOLLOWINGS})
  let options1 = {
    method: 'GET',
    url: 'https://instagram40.p.rapidapi.com/following',
    params: {userid: userId1},
    headers: {
      'x-rapidapi-host': 'instagram40.p.rapidapi.com',
      // 'x-rapidapi-key': '7c77cbbfcfmshec4eed2b8d4985cp1068b1jsncbbb7681baad'
      'x-rapidapi-key': '0099c0a8b8msh8ecaab8c4e20a1cp1d90e7jsn88132f6483ad'
    }
  };
  let options2 = {
    method: 'GET',
    url: 'https://instagram40.p.rapidapi.com/following',
    params: {userid: userId2},
    headers: {
      'x-rapidapi-host': 'instagram40.p.rapidapi.com',
      // 'x-rapidapi-key': '7c77cbbfcfmshec4eed2b8d4985cp1068b1jsncbbb7681baad'
      'x-rapidapi-key': '0099c0a8b8msh8ecaab8c4e20a1cp1d90e7jsn88132f6483ad'
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


