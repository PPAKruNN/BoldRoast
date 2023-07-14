import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react";
import styled from "styled-components"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import HomePage from "./pages/HomePage"
import FixedMenu from "./components/Menu"
import FixedRodape from "./components/Rodape"
import AuthContext from "./context/AuthContext";


export default function App() {

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userName, setUserName] = useState(localStorage.getItem("userName"));

  return (
    <PagesContainer>
      <FixedMenu />

      <AuthContext.Provider value={{ token, setToken, userName, setUserName }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cadastro" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
      </AuthContext.Provider>

      <FixedRodape />
    </PagesContainer>
  )
}

const PagesContainer = styled.main`
  background-color: #FFFFFF;
  width: calc(100vw - 50px);
  max-height: 100vh;
`
