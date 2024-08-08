import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PulsaPurchase from './components/pulsa/PulsaPurchase';
import ElectricityForm from './components/PLN/ElectricityForm';
import PaymentSelection from './components/PLN/PaymentSelection';
import PaymentConfirmation from './components/PLN/PaymentConfirmation';
import ProcessPayment from './components/pulsa/ProcessPayment';
import PaymentProcess from './components/PLN/PaymentProcess';
import KirimUang from './components/KirimUang/KirimUang';
import ProsesPengiriman from './components/KirimUang/ProsesPengiriman';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* <Header /> */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pulsa" element={<PulsaPurchase />} />
            <Route path="/pln" element={<ElectricityForm />} />
            <Route path="/electricity-form" element={<ElectricityForm />} />
            <Route path="/payment-selection" element={<PaymentSelection />} />
            <Route path="/payment-confirmation" element={<PaymentConfirmation />} />
            <Route path="/payment-process" element={<PaymentProcess />} />
            <Route path="/kirim-uang" element={<KirimUang />} />
            <Route path="/proses-pengiriman" element={<ProsesPengiriman />} />
            <Route path="/process-payment" element={<ProcessPayment />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
