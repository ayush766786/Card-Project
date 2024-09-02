
import Heading from './Components/Heading'
import Cards from './Components/Cards'
import data from './Data'

import './App.css'
import { useState } from 'react'

function App() {
  const [tours, setTours] = useState(data)

  const remoreTour = (id) => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours)

  }

  if (tours.length === 0) {
    return (
      <div className='refresh'>
        <h2>NO Tours Left</h2>
        <button className='btn-white' onClick={() => setTours(data)}>Refresh</button>
      </div>
    )
  }

  return (
    <>
      <Heading />
      <div className='app'>

        <Cards tours={tours} remoreTour={remoreTour}></Cards>
      </div>
    </>
  )
}

export default App
