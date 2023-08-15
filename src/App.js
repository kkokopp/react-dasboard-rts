// import logo from './logo.svg';
import React from 'react';
import './App.css';
import './styles/styles.css';
import { Route, Routes } from 'react-router-dom';
import 'firebase/database';
import Login from './components/Auth/Login';
import Dashboard from './components/Dashboard/admin/dashboard';
import Layout from './components/container/Layout';
import Register from './components/Auth/Register';
import Perawat from './components/Dashboard/admin/perawat';
import Pasien from './components/Dashboard/admin/pasien';
import Detailperawat from './components/Dashboard/admin/detailperawat';
import GCS from './components/Dashboard/admin/gcs';
import RTS from './components/Dashboard/admin/rts';

function App() {
  return (
    // <h1>hello world</h1>

        <Routes>
          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Admin Dashboard */}
          {/* <Route path="/admin" element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
          </Route> */}
            <Route path="/admin/*" element={<Layout/>}>
              <Route index element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} /> 
              <Route path="perawat" element={<Perawat />} /> 
              <Route path="perawat/detail/" element={<Detailperawat />} /> 
              <Route path="pasien" element={<Pasien />} />
              <Route path="gcs" element={<GCS />} />
              <Route path="rts" element={<RTS />} />
            </Route>
          {/* <Route path="/admin/dashboard" element={<Layout><Dashboard /></Layout>} />
          <Route path="/admin/perawat" element={<Layout><Perawat /></Layout>} />
        <Route path="/admin/pasien" element={<Layout><Pasien /></Layout>} /> */}


          {/* Default */}
          <Route path="/" element={<Login />} />
        </Routes>

  );
}

export default App;
