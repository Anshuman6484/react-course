import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [num, setNum] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState('')
  const [strength, setStrength] = useState(0)

  // useRef hook
  const passwordRef = useRef(null)

  // generate random password
  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (num) str += '0123456789'
    if (char) str += '~!@#$%^&*_-+=?'

    for (let i = 1; i <= length; i++) {
      let ch = Math.floor(Math.random() * str.length)
      pass += str.charAt(ch)
    }

    setPassword(pass)
    setStrength(evaluateStrength(pass))
  }, [length, num, char])

  // evaluate strength
  const evaluateStrength = (pass) => {
    let strength = 0

    // checking strength
    if (pass.length >= 8) strength++
    if (pass.length >= 12) strength++
    if (/[A-Z]/.test(pass)) strength++

    if (/[a-z]/.test(pass)) strength++
    if (/[0-9]/.test(pass)) strength++
    if (/[~!@#$%^&*_\-+=?]/.test(pass)) strength++

    return strength
  }

  // copy to clip board
  const copyPasswordtoClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)

    // to select a specific range with min length = 8
    // let n = Math.floor(Math.random() * length + 8)
    // passwordRef.current?.setSelectionRange(0, n)
    // window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, num, char, passwordGenerator])

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div
          id="outer-box"
          className="w-full max-w-xl mx-auto flex-wrap shadow-lg shadow-slate-800 rounded-lg px-4 py-3 my-8"
          // style={{ color: '#2CF129', backgroundColor: '#001823' }}
        >
          <h1 className="text-center text-2xl mb-4 my-2 font-bold">
            Random Password Generator
          </h1>
          <div className="flex shadow-md shadow-slate-800 rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3 text-slate-800"
              placeholder="password"
              readOnly
              ref={passwordRef}
            />
            <button
              onClick={copyPasswordtoClipboard}
              id="btn-copy"
              className="outline-none text-white px-3 py=0.5 shrink-0"
            >
              Copy
            </button>
          </div>
          <div className="flex items-center justify-center text-md gap-x-4 m-3 font-medium">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={8}
                max={30}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value)
                }}
              />
              <label>Length : {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={num}
                id="numInput"
                onChange={() => {
                  setNum((prev) => !prev)
                }}
              />
              <label htmlFor="numInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={char}
                id="charInput"
                onChange={() => {
                  setChar((prev) => !prev)
                }}
              />
              <label htmlFor="charInput">Characters</label>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center m-3 text-lg">
            <div className="text-lg">
              Generated Password : <span className="font-bold">{password}</span>
            </div>
            <div className="text-md">
              Password Strength :{' '}
              <span
                className={`strength-indicator font-semibold str-${strength}`}
              >
                {strength === 3
                  ? 'Weak'
                  : strength === 4
                  ? 'Moderate'
                  : strength === 5
                  ? 'Strong'
                  : 'Very Strong'}
              </span>
            </div>
          </div>
          <div className="relative w-full h-2 bg-white rounded">
            <div
              className={`absolute h-full rounded transition-all duration-300 ${
                strength === 3
                  ? 'strength-3'
                  : strength === 4
                  ? 'strength-4'
                  : strength === 5
                  ? 'strength-5'
                  : 'strength-6'
              }`}
              style={{
                width:
                  strength === 3
                    ? '25%'
                    : strength === 4
                    ? '50%'
                    : strength === 5
                    ? '75%'
                    : '100%',
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
