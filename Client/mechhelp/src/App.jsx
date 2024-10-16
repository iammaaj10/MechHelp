import { useState } from 'react'

import Home from './components/Home'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-black h-screen'>
      <Home/>
   

    </div>
    
   
    

    </>
  )
}

export default App
