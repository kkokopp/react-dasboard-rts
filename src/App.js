import logo from './logo.svg';
import React from 'react';
import './App.css';
import './styles/styles.css';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Dashboard from './components/Dashboard/admin/dashboard';
import Layout from './components/container/Layout';
import Register from './components/Auth/Register';
import Perawat from './components/Dashboard/admin/perawat';
import Pasien from './components/Dashboard/admin/pasien';

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin Dashboard */}
        {/* <Route path="/admin" element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
        </Route> */}
        <Route path="/admin/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/admin/perawat" element={<Layout><Perawat /></Layout>} />
        <Route path="/admin/pasien" element={<Layout><Pasien /></Layout>} />


        {/* Default */}
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
