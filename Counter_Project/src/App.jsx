import { useState } from 'react'
import './App.css'





function App() {
  
  
  let [counter,setCounter] = useState(15);
  const ChangeCounter = (isInc) =>
  {
    if(isInc)
    {
      if(counter <20)
      {

        setCounter(counter+1)
        console.log(counter);
      }
    }
    else
    {
      if(counter > 0)
      {

        setCounter(counter-1)
        console.log(counter);
      }
    }
  }
  return (
    <>
      <h1>This is counter Project</h1>
      <h2>Current value is : {counter}</h2>
      <br />
      <button onClick={ChangeCounter.bind(null,true)}
      >Increase Counter</button>
      <br />
      <br />
      <br />
      <button onClick={ChangeCounter.bind(null,false)}
      >Decrease Counter</button>
    </>
  )
}

export default App
