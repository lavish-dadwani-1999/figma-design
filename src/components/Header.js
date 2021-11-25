import React from 'react'
import "../App.css"
const Header = () => {
    return (
        <div className="header">
            <img src="/images/frame.png" alt="logo" />
            <div className="navmenu">
                <div className="links">
                    <a href="/">Virtual Tour</a>
                    <a href="/">Blogs</a>
                    <a href="/">Institutions</a>
                    <a href="/">Jobs</a>
                    <a href="/">Profile</a>
                </div>
                <span className="headBtn">
                    <span><img src="/images/Vector.png" alt="" /></span>
                    <button className="btnHead">Account<span><img src="/images/Vector2.png" alt="" /></span></button>
                </span>
            </div>
        </div>
    )
}

export default Header
