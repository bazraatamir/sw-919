import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  let damyData = [{
    Title:"Mashingui odor",
    desc:"The moon hung low in the twilight sky, casting a silvery glow over the tranquil lake. Shadows danced on the water's surface, disturbed only by the gentle ripples from a lone duck gliding gracefully across. The air was thick with the scent of pine and earth, a reminder of the forest's ancient embrace.",
    imageSrc:"https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    Title:"manai hicheel dandaa tsagaasaa hotsorch eheldeg",
    desc:"The moon hung low in the twilight sky, casting a silvery glow over the tranquil lake. Shadows danced on the water's surface, disturbed only by the gentle ripples from a lone duck gliding gracefully across. The air was thick with the scent of pine and earth, a reminder of the forest's ancient embrace.",
    imageSrc:"https://images.pexels.com/photos/5428154/pexels-photo-5428154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
]


  return (
    <>  
    <h1 className='text-3xl font-bold underline '>hello world react</h1>
    {
      damyData.map((el)=>  (
            <Card data={el} />
      )
      )
    }
    </>
   
  )
}

export default App
