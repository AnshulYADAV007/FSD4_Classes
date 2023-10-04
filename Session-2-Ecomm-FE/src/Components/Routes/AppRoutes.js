import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from '../Login'
import LandingPage from '../LandingPage/LandingPage'
import ProdustList from '../ProductList/ProductList'
import ProductDetail from '../ProductDetail/ProductDetail'
import Cart from '../Cart/Cart'
import Checkout from '../Checkout/Checkout.js'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<ProdustList />} />
        <Route path="/" element={<LandingPage />} />
        <Route
          exact
          path="/product/:productid/details"
          element={<ProductDetail />}
        />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
