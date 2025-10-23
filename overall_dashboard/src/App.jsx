import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './components/dashboard/Dashboard';
import InvoiceReceivedReport from './components/reports/InvoiceReceivedReport';

import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/invoice-received" element={<InvoiceReceivedReport />} />
          {/* <Route path="/add-invoice" element={<AddInvoice />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/without-po" element={<WithoutPO />} />
          <Route path="/company" element={<Company />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App
