import Test from './Test.jsx'

function App() {
  // How to use variables
  const username = 'batman'
  // To use variables use {}
  // Note: only write evaluated expression or final outcome inside {}.

  return (
    <>
      <Test />
      <p>Good Morning {username}</p>
    </>
  )
}

export default App
