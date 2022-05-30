/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-console */
import React from 'react'
import '../css/albumItem.sass'
import album1 from '../assets/1.jpg'
import album2 from '../assets/2.jpg'
import album3 from '../assets/3.jpg'
import album4 from '../assets/4.jpg'
import album5 from '../assets/5.jpg'
import album6 from '../assets/6.jpg'
import album7 from '../assets/7.jpg'
import album8 from '../assets/8.jpg'
import album9 from '../assets/9.jpg'
import album10 from '../assets/10.jpg'
import album11 from '../assets/11.jpg'
import album12 from '../assets/12.jpg'
import album13 from '../assets/13.jpg'
import album14 from '../assets/14.jpg'
import album15 from '../assets/15.jpg'
import album16 from '../assets/16.jpg'

const AlbumTitle = () => <h3 className="title1">HOT ALBUMS</h3>

const AlbumGridItem = () => (
  <div className="AlbumContainer">
    <div className="itemGrid">
      <div>
        <img className="AlbumCover" src={album1} alt="" />
        <div>
          <a href="google.com" className="artistName">
            Alux Nahual
          </a>
          <br />
          <span className="albumTitle">"Americamorfosis"</span>
        </div>
      </div>
      <div>
        <img className="AlbumCover" src={album2} alt="" />
        <div>
          <a href="google.com" className="artistName">
            Charlie Puth
          </a>
          <br />
          <span className="albumTitle">"Voicenotes"</span>
        </div>
      </div>
      <div>
        <img className="AlbumCover" src={album3} alt="" />
        <div>
          <a href="google.com" className="artistName">
            John Mayer
          </a>
          <br />
          <span className="albumTitle">"Continuum"</span>
        </div>
      </div>
      <div>
        <img className="AlbumCover" src={album4} alt="" />
        <div className="text">
          <a href="google.com" className="artistName">
            Dream Theater
          </a>
          <br />
          <span className="albumTitle">"Metropolis Pt.2"</span>
        </div>
      </div>
      <div>
        <img className="AlbumCover" src={album5} alt="" />
        <div className="text">
          <a href="google.com" className="artistName">
            Taylor Swift
          </a>
          <br />
          <span className="albumTitle">"Red (TV)"</span>
        </div>
      </div>
      <div>
        <img className="AlbumCover" src={album6} alt="" />
        <div className="text">
          <a href="google.com" className="artistName">
            Olivia Rodrigo
          </a>
          <br />
          <span className="albumTitle">"SOUR"</span>
        </div>
      </div>
      <div>
        <img className="AlbumCover" src={album7} alt="" />
        <div className="text">
          <a href="google.com" className="artistName">
            Billie Eilish
          </a>
          <br />
          <span className="albumTitle">"Happier Than Ever"</span>
        </div>
      </div>
      <div>
        <img className="AlbumCover" src={album8} alt="" />
        <div className="text">
          <a href="google.com" className="artistName">
            Miles Davis
          </a>
          <br />
          <span className="albumTitle">"Kind of Blue"</span>
        </div>
      </div>
      <div>
        <img className="AlbumCover" src={album9} alt="" />
        <div className="text">
          <a href="google.com" className="artistName">
            Harry Styles
          </a>
          <br />
          <span className="albumTitle">"Harry's House"</span>
        </div>
      </div>
      <div>
        <img className="AlbumCover" src={album10} alt="" />
        <div className="text">
          <a href="google.com" className="artistName">
            Lin-Manuel Miranda
          </a>
          <br />
          <span className="albumTitle">"Hamilton"</span>
        </div>
      </div>
      <div>
        <img className="AlbumCover" src={album11} alt="" />
        <div className="text">
          <a href="google.com" className="artistName">
            Linkin Park
          </a>
          <br />
          <span className="albumTitle">"Hybrid Theory"</span>
        </div>
      </div>
      <div>
        <img className="AlbumCover" src={album12} alt="" />
        <div className="text">
          <a href="google.com" className="artistName">
            Bad Bunny
          </a>
          <br />
          <span className="albumTitle">"Un Verano Sin Ti"</span>
        </div>
      </div>
      <div>
        <img className="AlbumCover" src={album13} alt="" />
        <div className="text">
          <a href="google.com" className="artistName">
            Green Day
          </a>
          <br />
          <span className="albumTitle"> "American Idiot"</span>
        </div>
      </div>
      <div>
        <img className="AlbumCover" src={album14} alt="" />
        <div className="text">
          <a href="google.com" className="artistName">
            FINNEAS
          </a>
          <br />
          <span className="albumTitle">"Blood Harmony"</span>
        </div>
      </div>
      <div>
        <img className="AlbumCover" src={album15} alt="" />
        <div className="text">
          <a href="google.com" className="artistName">
            Los Mesoneros
          </a>
          <br />
          <span className="albumTitle">"Pangea"</span>
        </div>
      </div>
      <div>
        <img className="AlbumCover" src={album16} alt="" />
        <div className="text">
          <a href="google.com" className="artistName">
            Mac Miller
          </a>
          <br />
          <span className="albumTitle">"Swimming"</span>
        </div>
      </div>
    </div>
  </div>
)

const albumGrid = () => (
  <div>
    <AlbumTitle />
    <AlbumGridItem />
  </div>
)

export default albumGrid
