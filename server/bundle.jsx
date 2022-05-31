/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: external "react"
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_namespaceObject);
;// CONCATENATED MODULE: external "react-dom/server"
const server_namespaceObject = require("react-dom/server");
;// CONCATENATED MODULE: external "express"
const external_express_namespaceObject = require("express");
var external_express_default = /*#__PURE__*/__webpack_require__.n(external_express_namespaceObject);
;// CONCATENATED MODULE: ./src/css/App.sass
/* harmony default export */ const App = (__webpack_require__.p + "d731700b366b5b24c64c9ca48a728cb8.sass");
;// CONCATENATED MODULE: ./src/css/albumItem.sass
/* harmony default export */ const albumItem = (__webpack_require__.p + "1d61241bb86381a6e850eb5094374b6d.sass");
;// CONCATENATED MODULE: ./src/assets/1.jpg
const _1_namespaceObject = __webpack_require__.p + "f3b8f3049ff4e2ac885f.jpg";
;// CONCATENATED MODULE: ./src/assets/2.jpg
const _2_namespaceObject = __webpack_require__.p + "888ef393a7f31978e2a0.jpg";
;// CONCATENATED MODULE: ./src/assets/3.jpg
const _3_namespaceObject = __webpack_require__.p + "fa63e2d19e5c66cab557.jpg";
;// CONCATENATED MODULE: ./src/assets/4.jpg
const _4_namespaceObject = __webpack_require__.p + "442b78c5babd1e966a35.jpg";
;// CONCATENATED MODULE: ./src/assets/5.jpg
const _5_namespaceObject = __webpack_require__.p + "ec490fa6295efdc78cb9.jpg";
;// CONCATENATED MODULE: ./src/assets/6.jpg
const _6_namespaceObject = __webpack_require__.p + "61290859f0e708fa292b.jpg";
;// CONCATENATED MODULE: ./src/assets/7.jpg
const _7_namespaceObject = __webpack_require__.p + "5859ae0a0378d4f4df0d.jpg";
;// CONCATENATED MODULE: ./src/assets/8.jpg
const _8_namespaceObject = __webpack_require__.p + "f48de8eb39dc221d3506.jpg";
;// CONCATENATED MODULE: ./src/assets/9.jpg
const _9_namespaceObject = __webpack_require__.p + "d808856fafb7f0a55664.jpg";
;// CONCATENATED MODULE: ./src/assets/10.jpg
const _10_namespaceObject = __webpack_require__.p + "180feaa838007ae2abdb.jpg";
;// CONCATENATED MODULE: ./src/assets/11.jpg
const _11_namespaceObject = __webpack_require__.p + "14e9269ac068b04169d3.jpg";
;// CONCATENATED MODULE: ./src/assets/12.jpg
const _12_namespaceObject = __webpack_require__.p + "8c64f50d565cded63df1.jpg";
;// CONCATENATED MODULE: ./src/assets/13.jpg
const _13_namespaceObject = __webpack_require__.p + "ac59543cdef51eb0e1f5.jpg";
;// CONCATENATED MODULE: ./src/assets/14.jpg
const _14_namespaceObject = __webpack_require__.p + "f4caf9ef1000268c8425.jpg";
;// CONCATENATED MODULE: ./src/assets/15.jpg
const _15_namespaceObject = __webpack_require__.p + "6864335f84a7fb4deec5.jpg";
;// CONCATENATED MODULE: ./src/assets/16.jpg
const _16_namespaceObject = __webpack_require__.p + "91c91f6723a379907d14.jpg";
;// CONCATENATED MODULE: ./src/components/albumGrid.jsx
/* eslint-disable react/no-unescaped-entities */

/* eslint-disable no-console */



















var AlbumTitle = function AlbumTitle() {
  return /*#__PURE__*/external_react_default().createElement("h3", {
    className: "title1"
  }, "HOT ALBUMS");
};

var AlbumGridItem = function AlbumGridItem() {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "AlbumContainer"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "itemGrid"
  }, /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("img", {
    className: "AlbumCover",
    src: _1_namespaceObject,
    alt: ""
  }), /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("a", {
    href: "google.com",
    className: "artistName"
  }, "Alux Nahual"), /*#__PURE__*/external_react_default().createElement("br", null), /*#__PURE__*/external_react_default().createElement("span", {
    className: "albumTitle"
  }, "\"Americamorfosis\""))), /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("img", {
    className: "AlbumCover",
    src: _2_namespaceObject,
    alt: ""
  }), /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("a", {
    href: "google.com",
    className: "artistName"
  }, "Charlie Puth"), /*#__PURE__*/external_react_default().createElement("br", null), /*#__PURE__*/external_react_default().createElement("span", {
    className: "albumTitle"
  }, "\"Voicenotes\""))), /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("img", {
    className: "AlbumCover",
    src: _3_namespaceObject,
    alt: ""
  }), /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("a", {
    href: "google.com",
    className: "artistName"
  }, "John Mayer"), /*#__PURE__*/external_react_default().createElement("br", null), /*#__PURE__*/external_react_default().createElement("span", {
    className: "albumTitle"
  }, "\"Continuum\""))), /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("img", {
    className: "AlbumCover",
    src: _4_namespaceObject,
    alt: ""
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: "text"
  }, /*#__PURE__*/external_react_default().createElement("a", {
    href: "google.com",
    className: "artistName"
  }, "Dream Theater"), /*#__PURE__*/external_react_default().createElement("br", null), /*#__PURE__*/external_react_default().createElement("span", {
    className: "albumTitle"
  }, "\"Metropolis Pt.2\""))), /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("img", {
    className: "AlbumCover",
    src: _5_namespaceObject,
    alt: ""
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: "text"
  }, /*#__PURE__*/external_react_default().createElement("a", {
    href: "google.com",
    className: "artistName"
  }, "Taylor Swift"), /*#__PURE__*/external_react_default().createElement("br", null), /*#__PURE__*/external_react_default().createElement("span", {
    className: "albumTitle"
  }, "\"Red (TV)\""))), /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("img", {
    className: "AlbumCover",
    src: _6_namespaceObject,
    alt: ""
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: "text"
  }, /*#__PURE__*/external_react_default().createElement("a", {
    href: "google.com",
    className: "artistName"
  }, "Olivia Rodrigo"), /*#__PURE__*/external_react_default().createElement("br", null), /*#__PURE__*/external_react_default().createElement("span", {
    className: "albumTitle"
  }, "\"SOUR\""))), /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("img", {
    className: "AlbumCover",
    src: _7_namespaceObject,
    alt: ""
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: "text"
  }, /*#__PURE__*/external_react_default().createElement("a", {
    href: "google.com",
    className: "artistName"
  }, "Billie Eilish"), /*#__PURE__*/external_react_default().createElement("br", null), /*#__PURE__*/external_react_default().createElement("span", {
    className: "albumTitle"
  }, "\"Happier Than Ever\""))), /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("img", {
    className: "AlbumCover",
    src: _8_namespaceObject,
    alt: ""
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: "text"
  }, /*#__PURE__*/external_react_default().createElement("a", {
    href: "google.com",
    className: "artistName"
  }, "Miles Davis"), /*#__PURE__*/external_react_default().createElement("br", null), /*#__PURE__*/external_react_default().createElement("span", {
    className: "albumTitle"
  }, "\"Kind of Blue\""))), /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("img", {
    className: "AlbumCover",
    src: _9_namespaceObject,
    alt: ""
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: "text"
  }, /*#__PURE__*/external_react_default().createElement("a", {
    href: "google.com",
    className: "artistName"
  }, "Harry Styles"), /*#__PURE__*/external_react_default().createElement("br", null), /*#__PURE__*/external_react_default().createElement("span", {
    className: "albumTitle"
  }, "\"Harry's House\""))), /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("img", {
    className: "AlbumCover",
    src: _10_namespaceObject,
    alt: ""
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: "text"
  }, /*#__PURE__*/external_react_default().createElement("a", {
    href: "google.com",
    className: "artistName"
  }, "Lin-Manuel Miranda"), /*#__PURE__*/external_react_default().createElement("br", null), /*#__PURE__*/external_react_default().createElement("span", {
    className: "albumTitle"
  }, "\"Hamilton\""))), /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("img", {
    className: "AlbumCover",
    src: _11_namespaceObject,
    alt: ""
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: "text"
  }, /*#__PURE__*/external_react_default().createElement("a", {
    href: "google.com",
    className: "artistName"
  }, "Linkin Park"), /*#__PURE__*/external_react_default().createElement("br", null), /*#__PURE__*/external_react_default().createElement("span", {
    className: "albumTitle"
  }, "\"Hybrid Theory\""))), /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("img", {
    className: "AlbumCover",
    src: _12_namespaceObject,
    alt: ""
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: "text"
  }, /*#__PURE__*/external_react_default().createElement("a", {
    href: "google.com",
    className: "artistName"
  }, "Bad Bunny"), /*#__PURE__*/external_react_default().createElement("br", null), /*#__PURE__*/external_react_default().createElement("span", {
    className: "albumTitle"
  }, "\"Un Verano Sin Ti\""))), /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("img", {
    className: "AlbumCover",
    src: _13_namespaceObject,
    alt: ""
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: "text"
  }, /*#__PURE__*/external_react_default().createElement("a", {
    href: "google.com",
    className: "artistName"
  }, "Green Day"), /*#__PURE__*/external_react_default().createElement("br", null), /*#__PURE__*/external_react_default().createElement("span", {
    className: "albumTitle"
  }, " \"American Idiot\""))), /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("img", {
    className: "AlbumCover",
    src: _14_namespaceObject,
    alt: ""
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: "text"
  }, /*#__PURE__*/external_react_default().createElement("a", {
    href: "google.com",
    className: "artistName"
  }, "FINNEAS"), /*#__PURE__*/external_react_default().createElement("br", null), /*#__PURE__*/external_react_default().createElement("span", {
    className: "albumTitle"
  }, "\"Blood Harmony\""))), /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("img", {
    className: "AlbumCover",
    src: _15_namespaceObject,
    alt: ""
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: "text"
  }, /*#__PURE__*/external_react_default().createElement("a", {
    href: "google.com",
    className: "artistName"
  }, "Los Mesoneros"), /*#__PURE__*/external_react_default().createElement("br", null), /*#__PURE__*/external_react_default().createElement("span", {
    className: "albumTitle"
  }, "\"Pangea\""))), /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("img", {
    className: "AlbumCover",
    src: _16_namespaceObject,
    alt: ""
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: "text"
  }, /*#__PURE__*/external_react_default().createElement("a", {
    href: "google.com",
    className: "artistName"
  }, "Mac Miller"), /*#__PURE__*/external_react_default().createElement("br", null), /*#__PURE__*/external_react_default().createElement("span", {
    className: "albumTitle"
  }, "\"Swimming\"")))));
};

var albumGrid = function albumGrid() {
  return /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement(AlbumTitle, null), /*#__PURE__*/external_react_default().createElement(AlbumGridItem, null));
};

/* harmony default export */ const components_albumGrid = (albumGrid);
;// CONCATENATED MODULE: ./src/css/navBar.sass
/* harmony default export */ const navBar = (__webpack_require__.p + "9c53d714f3bf03463e8683250d06bcfd.sass");
;// CONCATENATED MODULE: ./src/assets/logo.png
const logo_namespaceObject = __webpack_require__.p + "f0baa8d53397cd47f94d.png";
;// CONCATENATED MODULE: ./src/components/navBar.jsx
/* eslint-disable no-unused-vars */




var AtoZ = function AtoZ() {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "lettersCont"
  }, /*#__PURE__*/external_react_default().createElement("img", {
    src: logo_namespaceObject,
    alt: "Logo",
    className: "logo"
  }), /*#__PURE__*/external_react_default().createElement("ul", null, /*#__PURE__*/external_react_default().createElement("div", {
    className: "containerLetters"
  }, /*#__PURE__*/external_react_default().createElement("ul", {
    className: "horizontalXD"
  }, /*#__PURE__*/external_react_default().createElement("li", {
    className: "paddington"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "letter"
  }, " A ")), /*#__PURE__*/external_react_default().createElement("li", {
    className: "paddington"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "letter"
  }, " B ")), /*#__PURE__*/external_react_default().createElement("li", {
    className: "paddington"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "letter"
  }, " C ")), /*#__PURE__*/external_react_default().createElement("li", {
    className: "paddington"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "letter"
  }, " D ")), /*#__PURE__*/external_react_default().createElement("li", {
    className: "paddington"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "letter"
  }, " E ")), /*#__PURE__*/external_react_default().createElement("li", {
    className: "paddington"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "letter"
  }, " F ")), /*#__PURE__*/external_react_default().createElement("li", {
    className: "paddington"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "letter"
  }, " G ")), /*#__PURE__*/external_react_default().createElement("li", {
    className: "paddington"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "letter"
  }, " H ")), /*#__PURE__*/external_react_default().createElement("li", {
    className: "paddington"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "letter"
  }, " I ")), /*#__PURE__*/external_react_default().createElement("li", {
    className: "paddington"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "letter"
  }, " J ")), /*#__PURE__*/external_react_default().createElement("li", {
    className: "paddington"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "letter"
  }, " K ")), /*#__PURE__*/external_react_default().createElement("li", {
    className: "paddington"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "letter"
  }, " L ")), /*#__PURE__*/external_react_default().createElement("li", {
    className: "paddington"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "letter"
  }, " M ")), /*#__PURE__*/external_react_default().createElement("li", {
    className: "paddington"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "letter"
  }, " N ")), /*#__PURE__*/external_react_default().createElement("li", {
    className: "paddington"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "letter"
  }, " O ")), /*#__PURE__*/external_react_default().createElement("li", {
    className: "paddington"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "letter"
  }, " P ")), /*#__PURE__*/external_react_default().createElement("li", {
    className: "paddington"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "letter"
  }, " Q ")), /*#__PURE__*/external_react_default().createElement("li", {
    className: "paddington"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "letter"
  }, " R ")), /*#__PURE__*/external_react_default().createElement("li", {
    className: "paddington"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "letter"
  }, " S ")), /*#__PURE__*/external_react_default().createElement("li", {
    className: "paddington"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "letter"
  }, " T ")), /*#__PURE__*/external_react_default().createElement("li", {
    className: "paddington"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "letter"
  }, " U ")), /*#__PURE__*/external_react_default().createElement("li", {
    className: "paddington"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "letter"
  }, " V ")), /*#__PURE__*/external_react_default().createElement("li", {
    className: "paddington"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "letter"
  }, " W ")), /*#__PURE__*/external_react_default().createElement("li", {
    className: "paddington"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "letter"
  }, " X ")), /*#__PURE__*/external_react_default().createElement("li", {
    className: "paddington"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "letter"
  }, " Y ")), /*#__PURE__*/external_react_default().createElement("li", {
    className: "paddington"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "letter"
  }, "Z ")), /*#__PURE__*/external_react_default().createElement("li", {
    className: "paddington"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "letter"
  }, "#")))), /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("div", {
    className: "searchBar"
  }, /*#__PURE__*/external_react_default().createElement("input", {
    className: "inputSearch",
    type: "text"
  })), /*#__PURE__*/external_react_default().createElement("div", {
    className: "searchText"
  }, /*#__PURE__*/external_react_default().createElement("h3", {
    className: "Search"
  }, "Search")))));
};

var DarkPurpleBlock = function DarkPurpleBlock() {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "lowerContainer"
  }, " ");
};

var NavBar = function NavBar() {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "fullNavBar"
  }, /*#__PURE__*/external_react_default().createElement(AtoZ, null), /*#__PURE__*/external_react_default().createElement(DarkPurpleBlock, null));
};

/* harmony default export */ const components_navBar = (NavBar);
;// CONCATENATED MODULE: ./src/css/footer.sass
/* harmony default export */ const footer = (__webpack_require__.p + "2820b871a87dc5df16751421425a1a11.sass");
;// CONCATENATED MODULE: ./src/components/footer.jsx
/* eslint-disable no-unused-vars */




var FooterBar = function FooterBar() {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "FooterBar"
  }, /*#__PURE__*/external_react_default().createElement("a", {
    href: "http://",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "innerText"
  }, "Submit Lyrics"), /*#__PURE__*/external_react_default().createElement("a", {
    href: "http://",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "innerText"
  }, "Soundtracks"), /*#__PURE__*/external_react_default().createElement("a", {
    href: "http://",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "innerText"
  }, "Facebook"), /*#__PURE__*/external_react_default().createElement("a", {
    href: "http://",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "innerText"
  }, "Contact Us"));
};

var LowerFooter = function LowerFooter() {
  return /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("a", {
    href: "http://",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "underlinedText"
  }, "Advertise Here"), /*#__PURE__*/external_react_default().createElement("a", {
    href: "http://",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "underlinedText"
  }, "Privacy Policy"), /*#__PURE__*/external_react_default().createElement("a", {
    href: "http://",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "underlinedText"
  }, "Cookie Policy"), /*#__PURE__*/external_react_default().createElement("a", {
    href: "http://",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "underlinedText"
  }, "DMCA Policy"), /*#__PURE__*/external_react_default().createElement("h3", {
    className: "copy"
  }, "Copyright @ 2000-2022 AZLyrics.com "));
};

var Footer = function Footer() {
  return /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement(FooterBar, null), /*#__PURE__*/external_react_default().createElement(LowerFooter, null));
};

/* harmony default export */ const components_footer = (Footer);
;// CONCATENATED MODULE: ./src/css/welcome.sass
/* harmony default export */ const welcome = (__webpack_require__.p + "cc460f9997a0ed3dca66319a6c92fbd9.sass");
;// CONCATENATED MODULE: ./src/components/welcome.jsx
/* eslint-disable no-unused-vars */



var Text = function Text() {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/external_react_default().createElement("h3", {
    className: "welcome"
  }, "Welcome to AZLyrics!"), /*#__PURE__*/external_react_default().createElement("br", null), /*#__PURE__*/external_react_default().createElement("span", null, " It is a place where all searches end!"), /*#__PURE__*/external_react_default().createElement("br", null), /*#__PURE__*/external_react_default().createElement("br", null), /*#__PURE__*/external_react_default().createElement("span", null, "We have a large, legal, every day growing"), /*#__PURE__*/external_react_default().createElement("br", null), /*#__PURE__*/external_react_default().createElement("span", null, "universe of lyrics where stars of all genres"), /*#__PURE__*/external_react_default().createElement("br", null), /*#__PURE__*/external_react_default().createElement("span", null, "and ages shine."), /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("div", {
    className: "searchBar"
  }, /*#__PURE__*/external_react_default().createElement("input", {
    className: "inputSearch1",
    type: "text"
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: "searchText1"
  }, /*#__PURE__*/external_react_default().createElement("h3", {
    className: "lupa"
  }, "\uD83D\uDD0D"))), /*#__PURE__*/external_react_default().createElement("h5", {
    className: "enter"
  }, "Enter artist name or song title")));
};

var Welcome = function Welcome() {
  return /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement(Text, null));
};

/* harmony default export */ const components_welcome = (Welcome);
;// CONCATENATED MODULE: ./src/css/songs.sass
/* harmony default export */ const songs = (__webpack_require__.p + "7878b741020093e96f2a5f0819d190e6.sass");
;// CONCATENATED MODULE: ./src/components/songs.jsx
/* eslint-disable no-unused-vars */



var Tables = function Tables() {
  return /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("h3", {
    className: "title12"
  }, "HOT SONGS"), /*#__PURE__*/external_react_default().createElement("div", {
    className: "tableContainer"
  }, /*#__PURE__*/external_react_default().createElement("table", {
    className: "table"
  }, /*#__PURE__*/external_react_default().createElement("th", null, "\u200E"), /*#__PURE__*/external_react_default().createElement("tbody", null, /*#__PURE__*/external_react_default().createElement("tr", null, /*#__PURE__*/external_react_default().createElement("td", {
    className: "tableItem1"
  }, "Los Mesoneros - \"\xDAltimas Palabras\"")), /*#__PURE__*/external_react_default().createElement("tr", null, /*#__PURE__*/external_react_default().createElement("td", {
    className: "tableItem"
  }, "Los Mesoneros - \"Pangea\"")), /*#__PURE__*/external_react_default().createElement("tr", null, /*#__PURE__*/external_react_default().createElement("td", {
    className: "tableItem"
  }, "Los Mesoneros - \"Solo\"")), /*#__PURE__*/external_react_default().createElement("tr", null, /*#__PURE__*/external_react_default().createElement("td", {
    className: "tableItem"
  }, "Los Mesoneros - \"Indeleble\"")), /*#__PURE__*/external_react_default().createElement("tr", null, /*#__PURE__*/external_react_default().createElement("td", {
    className: "tableItem"
  }, "Los Mesoneros - \"Prefiero No Saber\"")))), /*#__PURE__*/external_react_default().createElement("table", null, /*#__PURE__*/external_react_default().createElement("th", null, "\u200E"), /*#__PURE__*/external_react_default().createElement("tbody", null, /*#__PURE__*/external_react_default().createElement("tr", null, /*#__PURE__*/external_react_default().createElement("td", {
    className: "tableItem1"
  }, "Bad Bunny - \"Ye ye ye\"")), /*#__PURE__*/external_react_default().createElement("tr", null, /*#__PURE__*/external_react_default().createElement("td", {
    className: "tableItem"
  }, "Bad Bunny - \"Neverita\"")), /*#__PURE__*/external_react_default().createElement("tr", null, /*#__PURE__*/external_react_default().createElement("td", {
    className: "tableItem"
  }, "Bad Bunny - \"Yo No Soy Celoso\"")), /*#__PURE__*/external_react_default().createElement("tr", null, /*#__PURE__*/external_react_default().createElement("td", {
    className: "tableItem"
  }, "Bad Bunny - \"Callaita\"")), /*#__PURE__*/external_react_default().createElement("tr", null, /*#__PURE__*/external_react_default().createElement("td", {
    className: "tableItem"
  }, "Bad Bunny - \"Yonaguni\""))))));
};

var HotSongs = function HotSongs() {
  return /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement(Tables, null));
};

/* harmony default export */ const components_songs = (HotSongs);
;// CONCATENATED MODULE: ./src/App.jsx
/* eslint-disable import/extensions */








var App_App = function App() {
  return /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, /*#__PURE__*/external_react_default().createElement("div", {
    className: "App"
  }), /*#__PURE__*/external_react_default().createElement(components_navBar, null), /*#__PURE__*/external_react_default().createElement(components_welcome, null), /*#__PURE__*/external_react_default().createElement(components_songs, null), /*#__PURE__*/external_react_default().createElement(components_albumGrid, null), /*#__PURE__*/external_react_default().createElement(components_footer, null));
};

/* harmony default export */ const src_App = (App_App);
;// CONCATENATED MODULE: ./server/index.jsx
/* eslint-disable import/extensions */





var PORT = process.env.PORT || 3000;
var app = external_express_default()();
app.get('/', function (req, res) {
  var element = server_namespaceObject.renderToString( /*#__PURE__*/external_react_default().createElement(src_App, null));
  var html = "\n    <html lang=\"en\">\n      <head>\n          <title>AZLyrics</title>\n      </head>\n      <body>\n          <div id=\"root\">".concat(element, "</div>\n          <script src=\"./bundle.js\"></script>\n      </body>\n    </html>\n  ");
  res.send(html);
});
app.use(external_express_default()["static"](external_path_default().join(__dirname, '../dist')));
app.listen(PORT, function () {
  console.log("Server is listening on port ".concat(PORT));
});
/******/ })()
;