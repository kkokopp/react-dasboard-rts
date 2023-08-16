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
import Gcs from './pages/Gcs';
import Rts from './pages/Rts';
import PerawatLayout from './components/Perawat/PerawatLayout';
import PerawatDashboard from './components/Perawat/PerawatDashboard';

function App() {
  return (
    // <h1>hello world</h1>

        <Routes>
          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />

          {/* Admin Dashboard */}
          {/* <Route path="/admin" element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
          </Route> */}
            <Route path="/admin/*" element={<AdminLayout/>}>
              <Route index element={<AdminDashboard />} />
              <Route path="dashboard" element={<AdminDashboard />} /> 
              <Route path="perawat" element={<AdminPerawatTable />} /> 
              <Route path="perawat/detail/" element={<DetailPerawat />} /> 
              <Route path="pasien" element={<PasienTable />} />
              <Route path="gcs" element={<Gcs />} />
              <Route path="rts" element={<Rts />} />
            </Route>
          {/* <Route path="/admin/dashboard" element={<Layout><Dashboard /></Layout>} />
          <Route path="/admin/perawat" element={<Layout><Perawat /></Layout>} />
        <Route path="/admin/pasien" element={<Layout><Pasien /></Layout>} /> */}
            <Route path="/perawat/*" element={<PerawatLayout/>}>
                <Route index element={<PerawatDashboard />} />
                <Route path="detail" element={<DetailPerawat />} /> 
                <Route path="pasien" element={<PasienTable />} />
                <Route path="gcs" element={<Gcs />} />
                <Route path="rts" element={<Rts />} />
            </Route>


          {/* Default */}
          <Route path="/" element={<Login />} />
        </Routes>

  );
}

export default App;
