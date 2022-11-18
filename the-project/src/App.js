import './reset.scss'
import './main.scss'
import './responsive.scss'
import { Route, Routes ,useNavigate } from 'react-router-dom'
import {Header} from './components/Header/Header'
import {Homepage} from './components/Pages/Homepage'
import {Register} from './components/Pages/Registration'


function App() {
  return (
    <div className="App">
     
      <Header />
      <Routes>

          <Route path="/" element={<Homepage />} />
                   <Route path="/register" element={<Register />} />


        </Routes>
   
    </div>
  );
}

export default App;
