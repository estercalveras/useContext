import { useState } from 'react'
import TopSection from './components/TopSection'
import './App.css'
import { brandContext } from './context/brandContext';

function App() {

  const [brandName, setBrandName] = useState('WBS Coding School');
  const [colors, setColors] = useState('blue');



  return (
    <>
      <brandContext.Provider value={{ brandName, colors }}>
        <TopSection />
      </brandContext.Provider>
    </>
  )
}

export default App
