import { Route, Routes } from 'react-router-dom'

//Stylesheets
import './reset.scss'
import './main.scss'
import './responsive.scss'

//Pages / Layouts
import { Login } from './components/Pages/Login';
import { Register } from './components/Pages/Register';
import { Women } from './components/Pages/Women';
import { MainPage } from './components/common/MainPage';
import { Navigation } from './components/common/Navigation';
import { Footer } from './components/common/Footer';


function App() {
  return (
    <div className="App">

      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/women" element={<Women />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
