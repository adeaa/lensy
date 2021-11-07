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

const initialState = {
  usersId: [],
  followings: [],
  followers: [],
  isLoading: null,
  error: null,
};
const InstagramReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_ID:

    case GET_FOLLOWERS:
      return { ...state, isLoading: true };
    case GET_FOLLOWINGS:
      return { ...state, isLoading: true };
    case GET_USER_ID_SUCCESS:
      return { ...state, usersId: payload };
    case GET_FOLLOWERS_SUCCESS:
      return { ...state, followers: payload, isLoading: false };
    case GET_FOLLOWINGS_SUCCESS:
      return { ...state, followings: payload, isLoading: false };
    case GET_FOLLOWERS_FAIL:
      return { ...state, error: payload };
    case GET_FOLLOWINGS_FAIL:
      return { ...state, error: payload };
    case GET_USER_ID_FAIL:
      return { ...state, error: payload };

    default:
      return state;
  }
};

export default InstagramReducer;
