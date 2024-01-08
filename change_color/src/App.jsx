import { useState } from 'react'
import './App.css'

function App() {
  let [color,setColor] = useState('blue')
  return (
    <>
   <div className='h-screen w-full duration-200' style={{backgroundColor: color}}>
      <div className='absolute inset-x-0 bottom-0 justify-center flex items-center p-10'>
        <div className='rounded-3xl bg-white pl-4 pr-4 pt-2 pb-2'>
        <div className='flex flex-wrap gap-4'>
          <button className='rounded-lg bg-blue-950 p-1' onClick={()=>{
            setColor('blue')
          }}>azan</button>
          <button className='rounded-lg bg-green-900 p-1'onClick={()=> setColor('green')} >azan</button>
          <button className='rounded-lg bg-pink-900 p-1' onClick={()=> setColor('pink')}>azan</button>
        </div>
        </div>
        
      </div>
    </div>
     
    </>
  )
}

export default App
