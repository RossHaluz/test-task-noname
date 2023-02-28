import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Loyout';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = lazy(() => import('../page/Home'));
const Products = lazy(() => import('../page/Products'));
const Checkout = lazy(() => import('../page/Checkout'));
const Login = lazy(() => import('../page/Login'));
const Register = lazy(() => import('../page/Register'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
};
