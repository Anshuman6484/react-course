import { useState } from 'react'

function App() {
  const [color, setColor] = useState('#fafafa')
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-8 inset-x-4 px-4 rounded-3xl">
        <div
          className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl font-semibold"
          style={{ backgroundColor: '#a9d6e5' }}
        >
          <button
            onClick={() => {
              setColor('#ff0000')
            }}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: '#ff0000' }}
          >
            Red
          </button>
          <button
            onClick={() => {
              setColor('#0078b4')
            }}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: '#0078b4' }}
          >
            Blue
          </button>
          <button
            onClick={() => {
              setColor('#fff000')
            }}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: '#fff000' }}
          >
            Yellow
          </button>
          <button
            onClick={() => {
              setColor('#ff7814')
            }}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: '#ff7814' }}
          >
            Orange
          </button>
          <button
            onClick={() => {
              setColor('#008c3c')
            }}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: '#008c3c' }}
          >
            Green
          </button>
          <button
            onClick={() => {
              setColor('#969650')
            }}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: '#969650' }}
          >
            Olive
          </button>
          <button
            onClick={() => {
              setColor('#a03273')
            }}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: '#a03273' }}
          >
            Purple
          </button>
          <button
            onClick={() => {
              setColor('#78878c')
            }}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: '#78878c' }}
          >
            Grey
          </button>
          <button
            onClick={() => {
              setColor('#5a3c28')
            }}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: '#5a3c28' }}
          >
            Brown
          </button>
          <button
            onClick={() => {
              setColor('#0a0a0a')
            }}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: '#0a0a0a' }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
