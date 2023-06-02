
import Styles from './App.module.css'
import Navbar from './components/Navbar'
import ScreenSide from './components/ScreenSide'
import { useState } from 'react'



function App() {
  const [opcion, setOpcion] = useState()
  
  return (
    <div className={Styles.Container}>

      
     <Navbar opcion={opcion} setOpcion={setOpcion} className={Styles.Navbar} />
     <ScreenSide opcion={opcion} setOpcion={setOpcion} className={Styles.ScreenSide}/>
    </div>
  )
}

export default App
