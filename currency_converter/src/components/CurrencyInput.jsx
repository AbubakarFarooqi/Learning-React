import { React, useId } from 'react'

function CurrencyInput({
    label,
    amounti,
    onAmountChange,
    // currency,
    onCurrencyChange,
    selectedCurrency,
    currencyOptions = []
}) {
    const inputId = useId();
    return (
        <>
            <div className=' rounded-lg bg-slate-400 p-3'>

                <label htmlFor={inputId}
                    className='block mb-1 text-white font-bold font-serif'>
                    {label}
                </label>
                <div className='flex items-center justify-between w-full '>
                    <input
                        type="number"
                        id={inputId}
                        value={amounti}
                        onChange={(e) => {
                            onAmountChange && onAmountChange(Number(e.target.value))
                        }}
                        className='rounded-lg p-1' />
                    <select id="" class="ml-4 bg-white border
                 border-gray-300
                  text-gray-900
                   text-sm
                    rounded-lg
                     focus:ring-blue-500
                      focus:border-blue-500
                         p-1.5 
                          dark:border-gray-600
                           dark:placeholder-gray-400
                            dark:text-balance   
                             dark:focus:ring-blue-500
                              dark:focus:border-blue-500"
                        value={selectedCurrency}
                        onChange={(e) => { onCurrencyChange && onCurrencyChange(e.target.value) }}
                    >

                        {
                            currencyOptions.map((value) => (
                                <option key={value} value={value}>
                                    {value}
                                </option>))
                        }


                    </select>
                </div>
            </div>
        </>
    )
}

export default CurrencyInput