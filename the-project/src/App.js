import './reset.scss'
import './main.scss'
import './responsive.scss'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Home } from './components/Pages/Home'

import { Directory } from './components/Header/Directory'


function App() {
  return (
    <div className="App">

      

      <Routes>

        <Route path="/" element={<Directory />} />

        
        <Route path="/home" element={<Home />} />




      </Routes>

    </div>
  );
}

export default App;
