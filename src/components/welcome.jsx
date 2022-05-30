/* eslint-disable no-unused-vars */
import React from 'react'
import welcome from '../css/welcome.sass'

const Text = () => (
  <div className="container">
    <h3 className="welcome">Welcome to AZLyrics!</h3>
    <br />
    <span> It is a place where all searches end!</span>
    <br />
    <br />
    <span>We have a large, legal, every day growing</span>
    <br />
    <span>universe of lyrics where stars of all genres</span>
    <br />
    <span>and ages shine.</span>
    <div>
      <div className="searchBar">
        <input className="inputSearch1" type="text" />
      </div>
      <h5 className="enter">Enter artist name or song title</h5>
    </div>
  </div>
)

const Welcome = () => (
  <div>
    <Text />
  </div>
)

export default Welcome
