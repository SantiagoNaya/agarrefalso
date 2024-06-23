import './App.css';
import Formulario from './components/Formulario/Formulario';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';

function App() {

  const [plansList, setPlansList] = useState([]);
  useEffect( () => {
    setPlansList([{
      id: 1,
      name: 'Prueba',
      price: '2',
      hours: '1',
      consultation: 'No',
      minibar: 'Si',
      description: 'ESta muy bueno',
    }])
  }, [])
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage  plansList={plansList}/>} />
        <Route path='formulario'  element={<Formulario plansList={plansList} setPlansList={setPlansList}/>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
