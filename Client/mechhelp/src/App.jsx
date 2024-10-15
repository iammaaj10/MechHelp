import { useState } from 'react'
import SignUp from './components/SignUp'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-black h-screen'>
    <SignUp/>
    </div>
    
   
    

    </>
  )
}

export default App
