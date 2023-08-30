import './App.css'
import Nav from './components/Nav.js';
import Footer from './components/Footer.js'
import HomePage from './components/HomePage.js'
import About from './components/About.js'
import Menu from './components/Menu.js'
import BookingPage from './components/BookingPage.js'
import OnlineOrder from './components/OnlineOrder.js'
import Login from './components/Login.js'
import ConfirmedBooking from './components/ConfirmedBooking'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<BookingPage />} />
          <Route path="/online-order" element={<OnlineOrder />} />
          <Route path="/login" element={<Login />} />
          <Route path="/booking-confirmation" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
