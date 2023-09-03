// import logo from './logo.svg';
import React from 'react';
import './App.css';
import './styles/styles.css';
import { Route, Routes } from 'react-router-dom';
import 'firebase/database';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import PasienTable from './pages/PasienTable';
import Perhitungan from './pages/Perhitungan';
import Rekomendasi from './pages/Rekomendasi';
import Layout from './components/Common/Layout';
import Dashboard from './pages/Dashboard';

function App() {
  return (

        <Routes>
          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />

          {/* Admin Route */}
            <Route path="/" element={<Layout/>}>
              <Route index element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} /> 
              <Route path="pasien" element={<PasienTable />} />
              <Route path="perhitungan" element={<Perhitungan />} />
              <Route path="rekomendasi" element={<Rekomendasi />} />
            </Route>


          {/* Default */}
          <Route path="*" element={<Login />} />
        </Routes>

  );
}

export default App;
