import { Route, Routes, useNavigate } from 'react-router-dom'

//Stylesheets
import './reset.scss'
import './main.scss'
import './responsive.scss'

//Pages / Layouts
import { Home } from './components/Pages/Home'
import { Login } from './components/Pages/Login'
import { Directory } from './components/Header/Directory'


function App() {
  return (
    <div className="App">

      

      <Routes>

        <Route path="/" element={<Directory />} />

        
        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />



      </Routes>

    </div>
  );
}

export default App;
