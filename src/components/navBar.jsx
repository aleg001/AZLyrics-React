/* eslint-disable no-unused-vars */
import React from 'react'
import navBar from '../css/navBar.sass'
import image from '../assets/logo.png'

const AtoZ = () => (
  <div className="lettersCont">
    <img src={image} alt="Logo" className="logo" />
    <ul>
      <div className="containerLetters">
        <ul className="horizontalXD">
          <li className="paddington">
            <div className="letter"> A </div>
          </li>
          <li className="paddington">
            <div className="letter"> B </div>
          </li>
          <li className="paddington">
            <div className="letter"> C </div>
          </li>
          <li className="paddington">
            <div className="letter"> D </div>
          </li>
          <li className="paddington">
            <div className="letter"> E </div>
          </li>
          <li className="paddington">
            <div className="letter"> F </div>
          </li>
          <li className="paddington">
            <div className="letter"> G </div>
          </li>
          <li className="paddington">
            <div className="letter"> H </div>
          </li>
          <li className="paddington">
            <div className="letter"> I </div>
          </li>
          <li className="paddington">
            <div className="letter"> J </div>
          </li>
          <li className="paddington">
            <div className="letter"> K </div>
          </li>
          <li className="paddington">
            <div className="letter"> L </div>
          </li>
          <li className="paddington">
            <div className="letter"> M </div>
          </li>
          <li className="paddington">
            <div className="letter"> N </div>
          </li>
          <li className="paddington">
            <div className="letter"> O </div>
          </li>
          <li className="paddington">
            <div className="letter"> P </div>
          </li>
          <li className="paddington">
            <div className="letter"> Q </div>
          </li>
          <li className="paddington">
            <div className="letter"> R </div>
          </li>
          <li className="paddington">
            <div className="letter"> S </div>
          </li>
          <li className="paddington">
            <div className="letter"> T </div>
          </li>
          <li className="paddington">
            <div className="letter"> U </div>
          </li>
          <li className="paddington">
            <div className="letter"> V </div>
          </li>
          <li className="paddington">
            <div className="letter"> W </div>
          </li>
          <li className="paddington">
            <div className="letter"> X </div>
          </li>
          <li className="paddington">
            <div className="letter"> Y </div>
          </li>
          <li className="paddington">
            <div className="letter">Z </div>
          </li>
          <li className="paddington">
            <div className="letter">#</div>
          </li>
        </ul>
      </div>
      <div>
        <div className="searchBar">
          <input className="inputSearch" type="text" />
        </div>
        <div className="searchText">
          <h3 className="Search">Search</h3>
        </div>
      </div>
    </ul>
  </div>
)

const DarkPurpleBlock = () => <div className="lowerContainer"> </div>

const NavBar = () => (
  <div className="fullNavBar">
    <AtoZ />
    <DarkPurpleBlock />
  </div>
)

export default NavBar
