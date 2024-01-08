import { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCopy } from '@fortawesome/free-solid-svg-icons';
function App() {
  const [password, setPassword] = useState('')
  const [length, setLenght] = useState(8)
  const [isChar, setIsChar] = useState(false)
  const [isNum, setIsNum] = useState(false)
  const passwordRef = useRef(null)
  const GeneratePassword = () => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (isChar) str += '!@#$%^&*()-_=+[]{}|;:\'",.<>?/`~'
    if (isNum) str += '0123456789'
    let pass = ''
    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }
    setPassword(pass)
  }

  useEffect(() => {
    GeneratePassword()
  }, [isChar, isNum, length, setPassword])
  return (
    <>
      <div className='pt-1 bg-slate-500 rounded mx-auto max-w-md mt-6 pb-1' >
        <h1 className='text-black text-center font-bold text-lg'>Password Generator</h1>
        <div className='flex justify-center gap-3 '>
          <input className='flex overflow-hidden mb-2 mt-2 rounded-lg border-2 border-red-500'
            readOnly
            value={password}
            ref={passwordRef}
            type="text" />
          <button onClick={() => {
            passwordRef.current?.select()
            passwordRef.current?.setSelectionRange(0, 3)
            const selectedText = passwordRef.current?.value.substring(
              passwordRef.current.selectionStart,
              passwordRef.current.selectionEnd
            );
            window.navigator.clipboard.writeText(selectedText)
          }}
            type="button"
            className="mt-2 h-6 w-1/6 inline-flex items-center rounded-md bg-blue-300 px-3 py-2 text-sm font-semibold text-white hover:bg-black/80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width=""
              height=""
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="mr-2 h-4 w-4"
            >
              {/* <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline> */}
              <FontAwesomeIcon icon={faCopy} />
            </svg>
            Copy
          </button>
        </div>
        <div className='flex gap-1 '>

          <input id="default-range"
            type="range"
            value={length}
            max="100"
            min="8"
            onChange={(e) => { setLenght(e.target.value) }}
            className=" mt-2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
          <label for="default-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Length: {length} </label>
          <input className='mb-1 ml-2' type="checkbox" defaultChecked={isNum} onClick={() => setIsNum((num) => !num)} />
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Numbers </label>
          <input className='mb-1 ml-2' type="checkbox" defaultChecked={isChar} onClick={() => setIsChar((char) => !char)} />
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Characters </label>

        </div>
      </div>

    </>
  )
}

export default App
