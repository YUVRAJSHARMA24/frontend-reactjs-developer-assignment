import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Transaction from './components/Transaction';
import Data from './components/Data';
import Footer from './components/Footer';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="transaction" element={<Transaction />} />
        <Route path="data" element={<Data />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
