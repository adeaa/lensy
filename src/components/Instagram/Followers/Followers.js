import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Followers = () => {
  const dispatch = useDispatch();
  const followers = useSelector((state) => state.InstagramReducer.followers);
  let commonFollowers = followers
    .flat()
    .filter((el, index) => index !== followers.lastIndexOf(el));

  return (
    <div className="col-md-4">
      <h1>Followers</h1>
      {commonFollowers &&
        commonFollowers.length > 0 &&
        commonFollowers.map((user) => (
          <div className="d-flex align-items-center">
            {/* <img className="rounded" width="50" src={user.has_anonymous_profile_picture ? "https://www.mindofgenius.org/img/user-avatar.jpg" : user.profile_pic_url} alt="jfdjfdjfdj" /> */}
            <div className="card">
            <a href={`https://www.instagram.com/${user.username}/`}>
            <img
              src={`https://ui-avatars.com/api/?name=${user.full_name}`}
              className="rounded-circle"
              width="35"
              alt=""
            />
            </a>
            </div>

            <p>{user.username}</p>
          </div>
        ))}
    </div>
  );
};

export default Followers;
