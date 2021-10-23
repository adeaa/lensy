import React from 'react'
import Followers from './Followers/Followers'
import Followings from './Followings/Followings'
import Search from './Search/Search'

const Instagram = () => {
    return (
        <div className="d-flex">
            <Search/>
            <Followers/>
            <Followings/>
        </div>
    )
}

export default Instagram
