import { useState } from 'react'
import './App.css'
import CurrencyInput from './components/CurrencyInput.jsx'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'


function App() {
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [currencyTo, setCurrencyTo] = useState("inr")
  const [currencyFrom, setCurrencyFrom] = useState("usd")
  const options = Object.keys(useCurrencyInfo(currencyFrom))
  console.log(options);
  const swap = () => {
    setCurrencyFrom(currencyTo)
    setCurrencyTo(currencyFrom)
  }
  return (
    <>
      <div className='flex flex-col justify-center items-center w-full h-screen ' style={{ background: `url("data:image/jpeg;base64,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")` }}>
        <div className='p-12 mx-auto w-1/2 bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700'>
          <div className=' mx-auto w-96' >

            <CurrencyInput label="From"
              amount="300"
              amounti={amount}
              currencyOptions={options}
              onCurrencyChange={(value) => setCurrencyFrom(value)}
              selectedCurrency={currencyFrom}
              onAmountChange={(value) => setAmount(value)} />
            <div className='-m-1 flex items-center justify-center  z-0'>
              <button onClick={swap} type="button"
                class="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                swap
              </button>
            </div>
            <CurrencyInput
              label="To"
              amount="300"
              amounti={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(value) => setCurrencyTo(value)}
              selectedCurrency={currencyTo}
            />
            <button onClick={swap} type="button"
              class="mt-6 w-full text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Convert {currencyFrom} to {currencyTo}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
