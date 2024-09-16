// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-500 text-black p-3 rounded-2xl m-4">
        Tailwind test
      </h1>
      <Card name='Apple Macbook' tag1='Apple' tag2='Macbook' />
      <Card name='Asus Vivobook' tag1='Asus' tag2='Vivobook' />
    </>
  )
}

export default App
