import React from 'react'
import Followers from './Followers/Followers'
import Followings from './Followings/Followings'
import Search from './Search/Search'

const Instagram = () => {
    return (
        <div className="d-flex justify-content-around w-100">
            <div className="col-md-3">
            <Search/>
            </div>
            <div className="line"></div>
            <div className="col-md-3">
            <Followers/>
            </div>
            <div className="line"></div>
            <div className="col-md-3">
            <Followings/>
            </div>
        </div>
    )
}

export default Instagram
