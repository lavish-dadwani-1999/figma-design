import React from 'react'

const Cards = () => {
    return (
        <>
            <div className="card">
                <img className="backImg" src="/images/frame2.png" alt="" />
                <div className="carditems">
                <div className="cardhead">
                    <span className="hed1">Featured</span>
                    <span className="hed2">4.0 <img src="/images/star.png" alt="" /></span>
                </div>
                <div className="cardhead2">
                    <img className="frame3" src="/images/frame3.png" alt="" />
                    <div className="subcardhead2">
                        <img className="videoImg" src="/images/video.png" alt="" />
                        <div className="messg">

                        <span style={{fontSize:"14px"}} >Maharishi Dayanand University...</span><br/>
                        <span style={{fontSize:"10px"}}><img src="/images/loco.png" alt="" />Delhi Bypass, Rohtak, Haryana</span>
                        </div>
                    </div>
                </div>
                <div className="fees" >
                    <div className="subfees">
                        <img src="/images/heart.png" alt="" />
                    </div>
                    <div className="feestructure">
                    <div className="dth">
                        <p>Average yearly Fee</p>
                        <span><img src="/images/r.png" alt="" /> 8k - 72k</span>
                    </div>
                    <div className="dth">
                        <p>Available  Courses</p>
                        <span>30 courses</span>
                    </div>
                    <div className="dth1">
                        <p>Rank</p>
                        <span>85</span>
                    </div>
                    </div>
                </div>
                <div className="btncard">
                    <button className="btnc" ><span><img src="/images/down.png" style={{marginRight:"7px"}}  alt="" />Brochure</span></button>
                    <button className="btnc2" >Apply</button>
                </div>
                </div>
            </div>
        </>
    )
}

export default Cards
