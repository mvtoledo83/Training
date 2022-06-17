import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Generos from './Generos';
import Home from './Home';
import NovoGenero from './NovoGenero';
import EditarGenero from './EditarGenero';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';


function App() {
  const [data, setData] = useState({})
  useEffect(() => {
    axios.get('/api').then(res => {
      setData(res.data)
      console.log(res.data.datetime)
    })
  }, [])
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path='/generos' element={<Generos />} />
          <Route path='/generos/:id' element={<EditarGenero />} />
          <Route path='/generos/novo' exact element={<NovoGenero />} />
        </Routes>
        <pre>{JSON.stringify(data)}</pre>
      </div>
    </Router>
  );
}

export default App;
