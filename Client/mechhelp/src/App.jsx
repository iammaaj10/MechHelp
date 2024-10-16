import { useState } from 'react'
import SignUp from './components/SignUp'
import Home from './components/Home'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-black h-screen'>
      <Home/>
    <SignUp/>

    </div>
    
   
    

    </>
  )
}

export default App
