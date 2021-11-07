import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Followings = () => {
  const dispatch = useDispatch();
  const followings = useSelector((state) => state.InstagramReducer.followings);
  let commonFollowings = followings
    .flat()
    .filter((el, index) => index !== followings.lastIndexOf(el));
  console.log("commonFollowings", commonFollowings);

  return (
    <div className="col-md-4">
      <h1>Followings</h1>
      {/* <img src={`https://ui-avatars.com/api/?name=Adam lastname`} className="rounded-circle" width="35" alt=""/> */}
      {commonFollowings &&
        commonFollowings.length > 0 &&
        commonFollowings.map((user) => (
          <div className="d-flex align-items-center">
            {/* <img className="rounded" width="50" src={user.has_anonymous_profile_picture ? "https://www.mindofgenius.org/img/user-avatar.jpg" : user.profile_pic_url} alt="jfdjfdjfdj" /> */}
            <div className="card">
              <img
                src={`https://ui-avatars.com/api/?name=${user.full_name}`}
                className="rounded-circle"
                width="35"
                alt=""
              />
            </div>

            <p className="m-0">{user.username}</p>
          </div>
        ))}
    </div>
  );
};

export default Followings;
