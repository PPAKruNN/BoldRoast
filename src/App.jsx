import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"

export default function App() {

  return (
    <PagesContainer>  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </PagesContainer>
  )
}

const PagesContainer = styled.main`
  background-color: #FFFFFF;
  width: calc(100vw - 50px);
  max-height: 100vh;
`
