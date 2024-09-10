import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

// PulsaRevisi
import PulsaPage from './components/PulsaRevisi/PulsaPage';
import MetodePembayaranPulsa from './components/PulsaRevisi/MetodePembayaranPulsa';
// import ConfirmationPulsa from './components/PulsaRevisi/ConfirmationPulsa';
// import ProcessPulsa from './components/PulsaRevisi/ProcessPulsa';

// PLN
import PLNPage from './components/PLN/PLNPage';
import PaymentPLN from './components/PLN/PaymentPLN';
// import ConfirmationPLN from './components/PLN/ConfirmationPLN';
import TagihanListrik from './components/PLN/TagihanListrik';
// import ProcessPLN from './components/PLN/ProcessPLN';

// Kuota
import Kuota from './components/Kuota/KuotaPage';
import MetodePembayaranKuota from './components/Kuota/MetodePembayaranKuota';
import ConfirmationKuota from './components/Kuota/ConfirmationKuota';
// import { ConfirmationKuota } from './components/NextPage/Confirmation';
import ProcessKuota from './components/Kuota/ProcessKuota';

// Kirim Uang
import KirimUang from './components/KirimUang/KirimUang';
import ProsesPengiriman from './components/KirimUang/ProsesPengiriman';

// TopUp
import PaymentPage from './components/TopUp/PaymentPage';
import ConfirmationPage from './components/TopUp/ConfirmationPage';
import ProcessTopUp from './components/TopUp/ProcessTopUp';

// TopUpHome
import Dana from './components/TopUp/TopUpHome/Dana';
import Gopay from './components/TopUp/TopUpHome/Gopay';
import LinkAja from './components/TopUp/TopUpHome/LinkAja';
import Ovo from './components/TopUp/TopUpHome/Ovo';

// NextPage
import MetodePayment from './components/NextPage/MetodePayment';
import Confirmation from './components/NextPage/Confirmation';
import Process from './components/NextPage/Process';

import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/auth/Login';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* <Header /> */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* PulsaRevisi */}
            <Route path="/topup-pulsa" element={<PulsaPage />} />
            <Route path="/metode-pembayaran-pulsa" element={<MetodePembayaranPulsa />} />
            {/* <Route path="/confirmation-pulsa" element={<ConfirmationPulsa />} /> */}
            {/* <Route path="/process-pulsa" element={<ProcessPulsa />} /> */}

            {/* PLN */}
            <Route path="/pln" element={<PLNPage />} />
            <Route path="/electricity-form" element={<PLNPage />} />
            <Route path="/payment-selection" element={<PaymentPLN />} />
            {/* <Route path="/payment-confirmation" element={<ConfirmationPLN />} /> */}
            {/* <Route path="/payment-process" element={<ProcessPLN />} /> */}
            <Route path="/tagihan-listrik" element={<TagihanListrik />} />

            {/* Kirim Uang */}
            <Route path="/kirim-uang" element={<KirimUang />} />
            <Route path="/proses-pengiriman" element={<ProsesPengiriman />} />

            {/* Kuota */}
            <Route path="/kuota" element={<Kuota />} />
            <Route path="/metode-pembayaran-kuota" element={<MetodePembayaranKuota />} />
            <Route path="/confirmation-kuota1" element={<ConfirmationKuota />} />
            {/* <Route path="/process-kuota" element={<ProcessKuota />} /> */}

            {/* TopUp */}
            <Route path="/payment-page" element={<PaymentPage />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
            <Route path="/process-topup" element={<ProcessTopUp />} />

            {/* TopUpHome */}
            <Route path="/dana" element={<Dana />} />
            <Route path="/gopay" element={<Gopay />} />
            <Route path="/linkaja" element={<LinkAja />} />
            <Route path="/ovo" element={<Ovo />} />
            <Route path="/login" element={<Login />} />
            {/* Next Page */}
              {/* Metode Payment */}
              {/* <Route path="/metode-payment" element={<MetodePayment paymentType="kuota" />} />
              <Route path="/metode-payment-pln" element={<MetodePayment paymentType="pln" />} /> */}
              <Route path="/metode-payment-pulsa" element={<MetodePayment />} />
              <Route path="/metode-payment/:paymentType" element={<MetodePayment />} />

              {/* confirmation */}
              {/* <Route path="/confirmation-paketdata" element={<Confirmation type="kuota" />} />
              <Route path="/pln-confirmation" element={<Confirmation type="pln" />} />
              <Route path="/pulsa-confirmation" element={<Confirmation type="pulsa" />} />
              <Route path="/topup-confirmation" element={<Confirmation />} /> */}
              <Route path="/confirmation/:type" element={<Confirmation />} />

            {/* Process */}
            <Route path="/process/:type" element={<Process />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;


















//   import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import PulsaPurchase from './components/pulsa/PulsaPurchase';
// import ElectricityForm from './components/PLN/ElectricityForm';
// import PaymentSelection from './components/PLN/PaymentSelection';
// import PaymentConfirmation from './components/PLN/PaymentConfirmation';
// import TagihanListrik  from './components/PLN/TagihanListrik';
// import ProcessPayment from './components/pulsa/ProcessPayment';
// import PaymentProcess from './components/PLN/PaymentProcess';
// import KirimUang from './components/KirimUang/KirimUang';
// import ProsesPengiriman from './components/KirimUang/ProsesPengiriman';
// import Dana from './components/TopUp/TopUpHome/Dana';
// import PaymentPage from './components/TopUp/PaymentPage';
// import ConfirmationPage from './components/TopUp/ConfirmationPage';
// import Process from './components/TopUp/TopUpHome/Dana/Process';
// import Gopay from './components/TopUp/TopUpHome/Gopay';
// import LinkAja from './components/TopUp/TopUpHome/LinkAja';
// import Ovo from './components/TopUp/TopUpHome/Ovo';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Login from './pages/auth/Login'

//   const App = () => {
//     return (
//       <Router>
//         <div className="flex flex-col min-h-screen">
//           {/* <Header /> */}
//           <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/pulsa" element={<PulsaPurchase />} />
//             <Route path="/pln" element={<ElectricityForm />} />
//             <Route path="/electricity-form" element={<ElectricityForm />} />
//             <Route path="/payment-selection" element={<PaymentSelection />} />
//             <Route path="/payment-confirmation" element={<PaymentConfirmation />} />
//             <Route path="/payment-process" element={<PaymentProcess />} />
//             <Route path="/tagihan-listrik" element={<TagihanListrik  />} />
//             <Route path="/kirim-uang" element={<KirimUang />} />
//             <Route path="/proses-pengiriman" element={<ProsesPengiriman />} />
//             <Route path="/process-payment" element={<ProcessPayment />} />
//             <Route path="/dana" element={<Dana />} />
//             <Route path="/payment-page" element={<PaymentPage />} />
//             <Route path="/confirmation" element={<ConfirmationPage />} />
//             <Route path="/process" element={<Process />} />
//             <Route path="/gopay" element={<Gopay />} />
//             <Route path="/linkaja" element={<LinkAja />} />.
//             <Route path="/ovo" element={<Ovo />} />
//             <Route path="/login" element={<Login />} />
//           </Routes>
//           </main>
//           {/* <Footer /> */}
//         </div>
//       </Router>
//     );
//   }

//   export default App;
