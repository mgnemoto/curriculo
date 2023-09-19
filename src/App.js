
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Educacion from './pages/educacion/Educacion';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import Trabajo from './pages/trabajo/Trabajo';
import Contacto from './pages/contacto/Contacto';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' >
          <Route index element={<Home/>}/>
          <Route path='/educacion' element={<Educacion/>}/>
          <Route path='/trabajo' element={<Trabajo/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
