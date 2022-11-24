import { Route, Routes, useNavigate } from 'react-router-dom'

//Stylesheets
import './reset.scss'
import './main.scss'
import './responsive.scss'

//Pages / Layouts
import { Home } from './components/Pages/Home'
import { Login } from './components/Pages/Login'
import { Register } from './components/Pages/Register'
import { Women } from './components/Pages/Women'
import { Directory } from './components/Header/Directory'


function App() {
  return (
    <div className="App">

      

      <Routes>

        <Route path="/" element={<Directory />} />

        
        <Route path="/home" element={<Home />} />
        <Route path="/women" element={<Women />} />

        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Register />} />



      </Routes>

    </div>
  );
}

export default App;
