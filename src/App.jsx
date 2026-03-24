import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Notfound from './pages/Notfound'
import Toaster from './components/ui/Toaster'
const App = () => {
  return (
    <BrowserRouter>
    <Toaster/>
    <Routes>
      <Route index element ={<Home/>}/>
      <Route path="*" element ={<Notfound/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
