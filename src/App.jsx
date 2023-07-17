import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import ProductPage from "./pages/ProductPage"
import HomePage from "./pages/HomePage"
import FixedMenu from "./components/Menu"
import FixedRodape from "./components/Rodape"
import { useState } from "react"
import AuthContext from "./context/AuthContext"
import CheckoutPage from "./pages/CheckoutPage"
import ShopPage from "./pages/ShopPage"
import CartContext from "./context/CartContext"

export default function App() {
  

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userName, setUserName] = useState(localStorage.getItem("userName"));

  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [notes, setNotes] = useState("");

  return (
    <>
      <AuthContext.Provider value={{ token, setToken, userName, setUserName }}>
      <CartContext.Provider value={{ products, setProducts, total, setTotal, notes, setNotes }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </BrowserRouter>
      </CartContext.Provider>
      </AuthContext.Provider>

      <FixedRodape />
    </>
  )
}

