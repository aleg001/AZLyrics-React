/* eslint-disable import/extensions */
import React from 'react'
import './css/App.sass'
import AlbumGrid from './components/albumGrid.jsx'
import NavBar from './components/navBar.jsx'
import Footer from './components/footer.jsx'
import Welcome from './components/welcome.jsx'
import HotSongs from './components/songs.jsx'

const App = () => (
  <>
    <div className="App" />
    <NavBar />
    <Welcome />
    <HotSongs />
    <AlbumGrid />
    <Footer />
  </>
)

export default App
