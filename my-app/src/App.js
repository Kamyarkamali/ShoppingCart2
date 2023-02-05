import React from 'react';




//ROUTE
import { Routes,Route ,Navigate} from "react-router-dom"
//Componets
// import Headere from './components/Headre/Headere';
// import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Cards from './components/Cards/Cards';
import ShoppCart from './components/ShoppCart/ShoppCart';
import Card from './components/Card/Card';
import Contact from './components/Contactme/Contact';
import Footer from './components/Footer/Footer';
import SingUp from './SingUp/SingUp';
import Login from './components/Login/Login';
//Context
import CartContextProvider from './components/Context/CartContextProvider';

const App = () => {
  return (
    <div>
      <CartContextProvider>
      {/* <Headere/> */}
      {/* <Navbar/> */}
      <Home/>
        <Routes>
          <Route path='/card' element={<Card/>}/>
          <Route path='/singup' element={<SingUp/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/products' element={<Cards/>}/>
          <Route path='/shopcarts' element={<ShoppCart/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/*' element={<Navigate to='/products'/>} />
        </Routes>
        <Footer/>
      </CartContextProvider>
    </div>
  );
};

export default App;