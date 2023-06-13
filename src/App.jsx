
import { BrowserRouter, } from 'react-router-dom'
import Styles from './App.module.css'
import Navbar from './components/Navbar'
import ScreenSide from './components/ScreenSide'

function App() {
  
  
  return (
    <BrowserRouter>
    <div className={Styles.Container}>

      
     <Navbar className={Styles.Navbar} />
     <ScreenSide className={Styles.ScreenSide}/>

     
     
    </div>
    </BrowserRouter>
  )
}

export default App
