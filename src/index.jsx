/* eslint-disable import/extensions */
import React from 'react'
import ReactDOM, { hydrateRoot } from 'react-dom/client'
import './css/index.sass'

import App from './App.jsx'

// Normal rendering
// const root = ReactDOM.createRoot(document.getElementById('app'))
// root.render(<App />)

// Server side rendering
const container = document.getElementById('root')
hydrateRoot(container, <App />)
