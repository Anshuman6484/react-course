// import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// MyApp component
function MyApp() {
  return <h1>Hello World !</h1>
}

// our react element

const reactElement = {
  type: 'a', // type of element like 'a', 'div', 'nav', etc.
  props: {
    // properties of elements or attributes. This is an object
    href: 'https://google.com',
    target: '_blank',
  },
  children: 'Click to visit google', // innerHTML
}

// another element

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
)

const anotherUser = 'superman'

// actual react element

const actualReactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank',
  },
  'Click to visit google',
  anotherUser // variables are injected at last
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <App />
  // <MyApp />
  // anotherElement
  // actualReactElement
  // </StrictMode>,
)
