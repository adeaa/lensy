import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Followings = () => {
    const dispatch = useDispatch()
    const followings = useSelector(state => state.InstagramReducer.followings)
     let commonFollowings = followings.flat().filter((el,index) => index!== followings.lastIndexOf(el) )
        console.log("commonFollowings",commonFollowings) 
    
  
    return (
        <div className="col-md-4">
            <h1>Followings</h1>
              {
                  commonFollowings && commonFollowings.length>0 &&
                  commonFollowings.map(user => (
                      <div>
                          <img className="rounded" width="50" src={user.has_anonymous_profile_picture ? "https://www.mindofgenius.org/img/user-avatar.jpg" : user.profile_pic_url} alt="jfdjfdjfdj" />
                           <p>{user.username}</p>
                      </div>
                  ))
              }
        </div>
    )
}

export default Followings
