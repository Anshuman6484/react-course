import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  // pass default value of the variable in the constructor
  // it returns 2 values - 1st is the variable and 2nd one is a function which is responsible for then change in variable's value

  // let counter = 5
  const increaseValue = () => {
    // setCounter accepts new value as the parameter
    if (counter === 10) {
      console.log('Maximum value reached! Further increment is not allowed')
      console.log(`Counter value : ${counter}`)
    } else {
      setCounter(++counter)
      console.log(`Increased counter value : ${counter}`)
    }
  }

  const decreaseValue = () => {
    if (counter === -10) {
      console.log('Minimum value reached! Further decrement is not allowed')
      console.log(`Counter value : ${counter}`)
    } else {
      setCounter(--counter)
      console.log(`Decreased counter value : ${counter}`)
    }
  }

  return (
    <>
      <h1>React Course</h1>
      <p>Counter value : {counter}</p>
      <button onClick={increaseValue}>Increase value : {counter}</button>
      <br />
      <button onClick={decreaseValue}>Decrease value : {counter}</button>
      <p>Again counter value : {counter}</p>
    </>
  )
}

export default App
