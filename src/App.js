import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import AboutUs from './components/aboutUs';
import Home from './components/home';
import ContactUsPage from './components/contactUsPage';
import ServicePage from './components/servicePage';
import ProductPage from './components/productPage';
import Footer from './components/footer';
import Checkout from './components/checkout';
import Cart from './components/cart';
import ServiceDetails from './components/serviceDetails';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/aboutUs' element={<AboutUs/>} />
          <Route path='/servicePage' element={<ServicePage/>} />
          <Route path='/contactUsPage' element={<ContactUsPage/>} />
          <Route path='/productPage' element={<ProductPage />} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/serviceDetails' element={<ServiceDetails/>} />
          <Route path='/' element={<Home/>} />

        </Routes>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
