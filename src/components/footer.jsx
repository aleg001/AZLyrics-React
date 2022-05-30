/* eslint-disable no-unused-vars */
import React from 'react'
import footer from '../css/footer.sass'
import image from '../assets/logo.png'

const FooterBar = () => (
  <div className="FooterBar">
    <a href="http://" target="_blank" rel="noopener noreferrer" className="innerText">
      Submit Lyrics
    </a>
    <a href="http://" target="_blank" rel="noopener noreferrer" className="innerText">
      Soundtracks
    </a>
    <a href="http://" target="_blank" rel="noopener noreferrer" className="innerText">
      Facebook
    </a>
    <a href="http://" target="_blank" rel="noopener noreferrer" className="innerText">
      Contact Us
    </a>
  </div>
)

const LowerFooter = () => (
  <div>
    <a href="http://" target="_blank" rel="noopener noreferrer" className="underlinedText">
      Advertise Here
    </a>
    <a href="http://" target="_blank" rel="noopener noreferrer" className="underlinedText">
      Privacy Policy
    </a>
    <a href="http://" target="_blank" rel="noopener noreferrer" className="underlinedText">
      Cookie Policy
    </a>
    <a href="http://" target="_blank" rel="noopener noreferrer" className="underlinedText">
      DMCA Policy
    </a>
    <h3 className="copy">Copyright @ 2000-2022 AZLyrics.com </h3>
  </div>
)

const Footer = () => (
  <div>
    <FooterBar />
    <LowerFooter />
  </div>
)

export default Footer
