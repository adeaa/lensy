import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFollowers,
  getFollowing,
  getUserId,
} from "../../../state/action/actions";

const Search = () => {
  const [user1, setUser1] = useState("");
  const [user2, setUser2] = useState("");
  const dispatch = useDispatch();
  const { isLoading, usersId, followers, followings } = useSelector(
    (state) => state.InstagramReducer
  );
  const handleClick = async () => {
    if (user1 && user2) {
      console.log(user1, user2);
      await dispatch(getUserId(user1, user2));
   
      console.log(usersId[0], usersId[1]);
      await dispatch(getFollowing(usersId[0], usersId[1]));
      console.log(usersId[0], usersId[1]);
      await dispatch(getFollowers(usersId[0], usersId[1]));
      // if (usersId && usersId.length==2){
      //   
      //   await dispatch(getFollowing(usersId[0], usersId[1]));
      // }
      // if (usersId && usersId.length==2){
      //   console.log(usersId[0], usersId[1]);
      //   await dispatch(getFollowers(usersId[0], usersId[1]));
      // }
      // }
      // console.log(usersId[0], usersId[1]);
      // if (usersId && usersId.length == 2) {
      //   setTimeout(dispatch(getFollowing(usersId[0], usersId[1])), 8000);
      // }
      // if (usersId && usersId.length==2){
      //   setTimeout(dispatch(getFollowers(usersId[0],usersId[1])),16000)
      // }
    }
  };

  return (
    <div className="">
      <label htmlFor="">Enter first username :</label>
      <input
        type="text"
        className="form-control"
        placeholder="@username"
        onChange={(e) => setUser1(e.target.value)}
      />
      <label htmlFor="">Enter second username :</label>
      <input
        type="text"
        className="form-control"
        placeholder="@username"
        onChange={(e) => setUser2(e.target.value)}
      />
      <button
        type="button"
        className="btn btn-primary btn-sm mt-2"
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
