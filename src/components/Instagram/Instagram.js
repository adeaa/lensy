import React from "react";
import Followers from "./Followers/Followers";
import Followings from "./Followings/Followings";
import Search from "./Search/Search";
import "./Instagram.css";

const Instagram = () => {
  return (
    <div className="instagramLayout">
      <Search />
      <Followers />
      <Followings />
    </div>
  );
};

export default Instagram;
