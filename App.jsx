import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import FixedMenu from "./components/Menu"
import FixedRodape from "./components/Rodape"


export default function App() {

  return (
    <PagesContainer> 
      <FixedMenu />

      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cadastro" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>

      <FixedRodape />
    </PagesContainer>
  )
}

const PagesContainer = styled.main`
  background-color: #FFFFFF;
  width: calc(100vw - 50px);
  max-height: 100vh;
`
