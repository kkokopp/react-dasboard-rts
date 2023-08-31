// import logo from './logo.svg';
import React from 'react';
import './App.css';
import './styles/styles.css';
import { Route, Routes } from 'react-router-dom';
import 'firebase/database';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import AdminLayout from './components/Admin/AdminLayout';
import AdminDashboard from './components/Admin/AdminDashboard';
import AdminPerawatTable from './components/Admin/AdminPerawatTable';
import PasienTable from './pages/PasienTable';
import DetailPerawat from './pages/DetailPerawat';
import PerawatLayout from './components/Perawat/PerawatLayout';
import PerawatDashboard from './components/Perawat/PerawatDashboard';
import Perhitungan from './pages/Perhitungan';
import Rekomendasi from './pages/Rekomendasi';

const AdminRoute = () => (
  <>
    <Route index element={<AdminDashboard />} />
    <Route path="dashboard" element={<AdminDashboard />} /> 
    <Route path="perawat" element={<AdminPerawatTable />} /> 
    <Route path="perawat/detail/" element={<DetailPerawat />} /> 
    <Route path="pasien" element={<PasienTable />} />
    <Route path="perhitungan" element={<Perhitungan />} />
    <Route path="rekomendasi" element={<Rekomendasi />} />
  </>
);

const PerawatRoute = () => (
  <>
    <Route index element={<PerawatDashboard />} />
    <Route path="detail" element={<DetailPerawat />} /> 
    <Route path="pasien" element={<PasienTable />} />
    <Route path="perhitungan" element={<Perhitungan />} />
    <Route path="rekomendasi" element={<Rekomendasi />} />
  </>
);

function App() {
  return (

        <Routes>
          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />

          {/* Admin Route */}
            <Route path="/admin/*" element={<AdminLayout/>}>
              {AdminRoute()}
            </Route>

            {/* Perawat Route */}
            <Route path="/perawat/*" element={<PerawatLayout/>}>
              {PerawatRoute()}
            </Route>


          {/* Default */}
          <Route path="/" element={<Login />} />
        </Routes>

  );
}

export default App;
