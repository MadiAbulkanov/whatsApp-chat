import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './containers/MainPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainPage />}/>
    </Routes>
  )
}

export default App
