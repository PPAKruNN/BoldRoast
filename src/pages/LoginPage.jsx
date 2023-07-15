import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import useForm from "../services/useForm";
import AuthContext from "../context/AuthContext";


export default function LoginPage() {
  const { form, changeForm } = useForm({ email: "", password: "" });

  function useLogin() {
    const navigate = useNavigate();
    const { setToken, setUserName } = useContext(AuthContext);
  
    return (body) => {
      axios
        .post(`${import.meta.env.VITE_API_URL}/login`, body)
        .then((response) => {
          setToken(response.data.token);
          setUserName(response.data.userName);
          localStorage.setItem("token", response.data.token);
          navigate("/product");
        })
        .catch(error =>{
          if(error.response.status === 422){
            alert("O e-mail informado é inválido!");
            return;
          }
          if(error.response.status === 404){
            alert("O e-mail informado não está cadastrado, cadastre-se primeiro!");
            return;
          }
          if(error.response.status === 401){
            alert("Senha incorreta!");
            return;
          }
        })
    };
  }

  const login = useLogin();
  function formLogin(e) {
    e.preventDefault();
    login(form);
  }

  return (
    <LoginContainer>
        <h1>Faça login para sua conta</h1>

      <form onSubmit={formLogin}>
        <input
          required
          type="email"
          placeholder="E-mail"
          name="email"
          value={form.email}
          onChange={changeForm}
        />
        <input
          required
          type="password"
          placeholder="Senha"
          name="password"
          value={form.password}
          onChange={changeForm}
        />
        <button type="submit">CONTINUAR</button>
      </form>

      <Link to="/cadastro">Ainda não tem uma conta? Cadastre-se!</Link>
    </LoginContainer>
  );
}


const LoginContainer = styled.div`
  width: 100%;
  height: 393px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #1E1E1E;

    h1{
        font-weight: 700;
        font-size: 34px;
        line-height: 64px;
        color: #0B1424;
        margin-top: 100px;
        margin-bottom: 20px;
    }

    input{  
        width: 396px;
        height: 48px;
        border-radius: 8px;
        background-color: #E0EFFE;
        color: primary-weak;
        font-weight: 400;
        font-size: 14px;
        line-height: 14px;
    }

    button{
        width: 396px;
        height: 53px;
        border-radius: 11px;
        gap: 10px;
        background-color: #013743;
        color: #FFFFFF;
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        margin-bottom: 20px;
        margin-top: 20px;

        &:hover{
          background-color: #00fa9a;
        }
    }
`;