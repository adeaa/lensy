import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getFollowers, getFollowing, getUserId } from "../../../state/action/actions";
import { findRenderedDOMComponentWithClass } from "react-dom/cjs/react-dom-test-utils.development";

const Search = () => {

  const [user1, setUser1] = useState("");
  const [user2, setUser2] = useState("");
  let user1Ref = useRef("");
  let user2Ref = useRef("");
  const dispatch = useDispatch()
  const {isLoading,usersId,followers,followings}  = useSelector(state => state.InstagramReducer)
//   useEffect(() => {
//     getUsers();
//   }, []);

  // const getUserId = () => {
  //   var options = {
  //     method: "GET",
  //     url: "https://instagram47.p.rapidapi.com/get_user_id",
  //     params: { username: "taneja.gaurav" },
  //     headers: {
  //       "x-rapidapi-host": "instagram47.p.rapidapi.com",
  //       "x-rapidapi-key": "7c77cbbfcfmshec4eed2b8d4985cp1068b1jsncbbb7681baad",
  //     },
  //   };

  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       console.log(response.data.user_id);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // };

//   const getUsers = () => {
//     var options = {
//       method: "GET",
//       url: "https://instagram85.p.rapidapi.com/account/search/wassim",
//       headers: {
//         "x-rapidapi-host": "instagram85.p.rapidapi.com",
//         "x-rapidapi-key": "7c77cbbfcfmshec4eed2b8d4985cp1068b1jsncbbb7681baad",
//       },
//     };

//     axios
//       .request(options)
//       .then(function (response) {
//         console.log(response.data);
//       })
//       .catch(function (error) {
//         console.error(error);
//       });
//   };

  //    const handleChange =async (e) => {
  //        if (user1Ref.current.value){
  //         await setUser1(e.target.value)
  //         getUsers(user1)
  //        }
  //        if (user2Ref.current.value){
  //         await setUser2(e.target.value)
  //         getUsers(user2)
  //        }

  //       setUser1("")

  //    }
  // const handleClick = () => {
  //   let id1 = getUserId(user1);
  //   let id2 = getUserId(user2);
  // };

  const handleClick = async () => {
    if (user1 && user2){
      await dispatch(getUserId(user1,user2))
    }
    if (usersId && usersId.length==2){
      await dispatch(getFollowers(usersId[0],usersId[1]))
    }

    if (usersId && usersId.length==2){
      await dispatch(getFollowing(usersId[0],usersId[1]))
    }
    
  }
  
  return (
    <div className="col-md-4">
      <label htmlFor="">Enter first username :</label>
      <input
        ref={user1Ref}
        type="text"
        className="form-control"
        placeholder="@username"
        onChange={(e) => setUser1(e.target.value)}
      />
      {/* <div>
                 {
                     users1.map(user => (
                         <div>{JSON.stringify(user)}</div>
                     ))
                 }
            </div> */}
      <label htmlFor="">Enter second username :</label>
      <input
        ref={user2Ref}
        type="text"
        className="form-control"
        placeholder="@username"
        onChange={(e) => setUser2(e.target.value)}
      />
      <button
        type="button"
        className="btn btn-primary btn-sm btn-block col-md-3 mt-2"
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
