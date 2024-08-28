import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PulsaPage from './components/PulsaRevisi/PulsaPage';
import PulsaPurchase from './components/pulsa/PulsaPurchase';
import Kuota from './components/Kuota/Kuota';
import ElectricityForm from './components/PLN/ElectricityForm';
import PaymentSelection from './components/PLN/PaymentSelection';
import PaymentConfirmation from './components/PLN/PaymentConfirmation';
import TagihanListrik  from './components/PLN/TagihanListrik';
import ProcessPayment from './components/pulsa/ProcessPayment';
import PaymentProcess from './components/PLN/PaymentProcess';
import KirimUang from './components/KirimUang/KirimUang';
import ProsesPengiriman from './components/KirimUang/ProsesPengiriman';
import Dana from './components/TopUp/TopUpHome/Dana';
import PaymentPage from './components/TopUp/PaymentPage';
import ConfirmationPage from './components/TopUp/ConfirmationPage';
import Process from './components/TopUp/Process';
import Gopay from './components/TopUp/TopUpHome/Gopay';
import LinkAja from './components/TopUp/TopUpHome/LinkAja';
import Ovo from './components/TopUp/TopUpHome/Ovo';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/auth/Login'

  const App = () => {
    return (
      <Router>
        <div className="flex flex-col min-h-screen">
          {/* <Header /> */}
          <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topup-pulsa" element={<PulsaPage />} />
            <Route path="/pulsa" element={<PulsaPurchase />} />
            <Route path="/kuota" element={<Kuota />} />
            <Route path="/pln" element={<ElectricityForm />} />
            <Route path="/electricity-form" element={<ElectricityForm />} />
            <Route path="/payment-selection" element={<PaymentSelection />} />
            <Route path="/payment-confirmation" element={<PaymentConfirmation />} />
            <Route path="/payment-process" element={<PaymentProcess />} />
            <Route path="/tagihan-listrik" element={<TagihanListrik  />} />
            <Route path="/kirim-uang" element={<KirimUang />} />
            <Route path="/proses-pengiriman" element={<ProsesPengiriman />} />
            <Route path="/process-payment" element={<ProcessPayment />} />
            <Route path="/dana" element={<Dana />} />
            <Route path="/payment-page" element={<PaymentPage />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
            <Route path="/process" element={<Process />} />
            <Route path="/gopay" element={<Gopay />} />
            <Route path="/linkaja" element={<LinkAja />} />.
            <Route path="/ovo" element={<Ovo />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          </main>
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }

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
