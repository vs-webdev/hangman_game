import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MainMenu from './pages/MainMenu'
import Rules from './pages/Rules'
import Game from './pages/Game'
import PauseMenu from './pages/PauseMenu'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainMenu />} />
          <Route path='/rules' element={<Rules />} />
          <Route path='/game' element={<Game />} />
          <Route path='/pause' element={<PauseMenu />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
