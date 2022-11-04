import { Routes, Route } from 'react-router-dom'
import { Checkout } from './pages/checkout'
import { CheckoutFilled } from './pages/checkoutFilled'
import { Home } from './pages/home'
import { DefaultLayout } from './pages/layouts/defaultLayout'
import { Success } from './pages/success'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout-filled" element={<CheckoutFilled />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  )
}