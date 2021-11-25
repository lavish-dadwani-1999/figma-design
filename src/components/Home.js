import React, { useState } from 'react';
import Rangs from "./Rangs"
import './home.css';
import "./card.css"
import Cards from "./Cards"
const Home = () => {

    const [display1, setdisplay1] = useState("block")
    const [display2, setdisplay2] = useState("block")
    const [display3, setdisplay3] = useState("block")
    const [display4, setdisplay4] = useState("block")
    const [display5, setdisplay5] = useState("block")
    const [display6, setdisplay6] = useState("block")
    const [display7, setdisplay7] = useState("block")

    const onclick1 = ()=>{
        if(display1 === "block"){setdisplay1("none")}
        else setdisplay1("block")
    }

    const onclick2 = ()=>{
        if(display2 === "block"){setdisplay2("none")}
        else setdisplay2("block")
    }
    const onclick3 = ()=>{
        if(display3 === "block"){setdisplay3("none")}
        else setdisplay3("block")
    }
    const onclick4 = ()=>{
        if(display4 === "block"){setdisplay4("none")}
        else setdisplay4("block")
    }
    const onclick5 = ()=>{
        if(display5 === "block"){setdisplay5("none")}
        else setdisplay5("block")
    }
    const onclick6 = ()=>{
        if(display6 === "block"){setdisplay6("none")}
        else setdisplay6("block")
    }
    const onclick7 = ()=>{
        if(display7 === "block"){setdisplay7("none")}
        else setdisplay7("block")
    }
  return (
      <>
    <div className="content">
      <div  className="home">
        <div className="filter">
          <h3>Filters</h3>
          <h4>CLEAR ALL</h4>
        </div>
        <div className="type">
          <div className="typeHead">
            <h4>TYPE</h4>
            <button onClick={onclick1} className="BtnType">
              <span>
                <img src="/images/Vector2.png" alt="" />
              </span>
            </button>
          </div>
          <form className="check" style={{display:display1}} >
            <div className="checkbox">
              <input
                type="checkbox"
                id="all"
                checked="checked"
                name="fav_language"
                value="All"
              />
                <label for="all">All</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="featured"
                name="fav_language"
                value="Featured"
              />
                <label for="featured">Featured</label>
            </div>
          </form>
        </div>
        <div className="type" >
            <div className="typeHead">
          <h4>INSTITUTE TYPE</h4>
          <button onClick={onclick2} className="BtnType" >
            <span>
              <img src="/images/Vector2.png" alt="" />
            </span>
          </button>
            </div>
          <form className="check" style={{display:display2}}>
              <div>
            <input
              type="checkbox"
              id="all"
              checked={true}
              name="fav_language"
              value="All"
              />
              <label for="all">College</label>
              </div>
              <div>
            <input
              type="checkbox"
              id="featured"
              name="fav_language"
              value="All"
              />
              <label for="all">School</label>
              </div>
          </form>
        </div>
        <div className="type">
            <div className="typeHead">
          <h4>COURSE</h4>
          <button onClick={onclick3} className="BtnType" >
            <span>
              <img src="/images/Vector2.png" alt="" />
            </span>
          </button>
            </div>
          <form style={{display:display3}} >
              <div className="search" >
                  <span className="searchSpan"><img src="/images/Search.png" alt="" /> <input style={{border:"none",outline:"none"}} placeholder="Search Course" /></span>
              </div>
              <div>
            <input
              type="checkbox"
              id="all"
              name="fav_language"
              value="All"
              />
              <label for="all">Diploman in Accounting and Finance</label>
              </div>
              <div>
            <input
              type="checkbox"
              id="featured"
              name="fav_language"
              value="All"
              />
              <label for="all">Bachelors of Commerce </label>
              </div>
              <div>
            <input
              type="checkbox"
              id="featured"
              name="fav_language"
              value="All"
              />
              <label for="all"> Bachelors of Computers</label>
              </div>
          </form>
        </div>
        <div className="type">
          <div className="typeHead">
            <h4>COURSE FEES</h4>
            <button onClick={onclick4} className="BtnType">
              <span>
                <img src="/images/Vector2.png" alt="" />
              </span>
            </button>
          </div>
          <div style={{display:display4}}>

          <Rangs/>
          </div>
        </div>
        <div className="type">
          <div className="typeHead">
            <h4>AFFILIATED TO</h4>
            <button onClick={onclick5} className="BtnType">
              <span>
                <img src="/images/Vector2.png" alt="" />
              </span>
            </button>
          </div>
          <form className="check" style={{display:display5}}>
          <div className="search2" >
                  <span className="searchuni"> <input style={{border:"none",outline:"none"}} placeholder="Search City Or Town" /></span>
              </div>
            <div className="checkbox">
              <input
                type="checkbox"
                id="all"
                name="fav_language"
                value="All"
              />
                <label for="all">Bangalore University</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="featured"
                name="fav_language"
                value="Featured"
              />
                <label for="featured">Christ University</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="featured"
                name="fav_language"
                value="Featured"
              />
                <label for="featured">Mysore University</label>
            </div>
          </form>
        </div>
        <div className="type">
            <div className="typeHead">
          <h4>CITY / TOWN</h4>
          <button onClick={onclick6} className="BtnType" >
            <span>
              <img src="/images/Vector2.png" alt="" />
            </span>
          </button>
            </div>
          <form  style={{display:display6}}>
              <div className="search" >
                  <span className="searchSpan"><img src="/images/Search.png" alt="" /> <input style={{border:"none",outline:"none"}} placeholder="Search City Or Town" /></span>
              </div>
              <div>
            <input
              type="checkbox"
              id="all"
              name="fav_language"
              value="All"
              />
              <label for="all">Neardy</label>
              </div>
              <div>
            <input
              type="checkbox"
              id="featured"
              name="fav_language"
              value="All"
              />
              <label for="all">Chennai</label>
              </div>
              <div>
            <input
              type="checkbox"
              id="featured"
              name="fav_language"
              value="All"
              />
              <label for="all">Hyderabaf</label>
              </div>
          </form>
        </div>
        <div className="type1">
          <div className="typeHead">
            <h4>COLLEGE TYPE</h4>
            <button onClick={onclick7} className="BtnType">
              <span>
                <img src="/images/Vector2.png" alt="" />
              </span>
            </button>
          </div>
          <form className="check" style={{display:display7}}>
            <div className="checkbox">
              <input
                type="checkbox"
                id="all"
                checked="checked"
                name="fav_language"
                value="All"
              />
                <label for="all">All</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="featured"
                name="fav_language"
                value="Featured"
              />
                <label for="featured">Government</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="featured"
                name="fav_language"
                value="Featured"
              />
                <label for="featured">Aided</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="featured"
                name="fav_language"
                value="Featured"
              />
                <label for="featured">Private</label>
            </div>
          </form>
        </div>
      </div>
      <div className="home2">
        <div className="head2">
            <div className="menu1">
                <span>APPLIED FILTER</span>
                <button className="btnh2">Bangalore<span><img style={{height:"16px"}} src="/images/cros.png" alt="" /> </span></button>
                <button className="btnh2">MBA/PGDMA<span>  <img style={{height:"16px"}} src="/images/cros.png" alt="" /> </span></button>
            </div>
            <div className="menu2">
                <button className="btnh2">Best Match<span>  <img src="/images/Vector2.png" alt="" /> </span></button>

            </div>
        </div>
        <div className="container">
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Home;
