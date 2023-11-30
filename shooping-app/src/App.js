import Cart from './pages/Cart';
import { Home } from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register.js';
import { Route,Routes, Navigate } from 'react-router-dom'
import {useSelector} from 'react-redux'
import ShippingPage from './pages/ShippingPage'
import { Payment } from './pages/Payment';
import Admin from './pages/Admin';
import { AddProduct } from './pages/AddProduct';
import ErrorPage from './pages/ErrorPage';

function App() {
  const user=useSelector(state=>state.user.currentUser);
  return (
    <div >
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/products/:category" element={<ProductList/>} />
      <Route path="/product/:id" element={<Product/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/cart/shipping" element={<ShippingPage/>} />
      <Route exact path="/paySuccess" element={<Payment/>} />
      <Route path="/login" element={user ? (<Navigate replace to={'/'}/>):(<Login/>)} />
      <Route path="/register" element={user ? (<Navigate replace to={'/'}/>):(<Register/>)}  />
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/addProduct' element={<AddProduct/>}/>
      <Route path="*" element={<ErrorPage/>} />
    </Routes>
       
    </div>
  );
}

export default App;
