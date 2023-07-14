import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";


export function useLogin() {
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


  export function useRegister() {
    const navigate = useNavigate();
    const { setUserName } = useContext(AuthContext);
  
    return (body) => {
      axios
        .post(`${import.meta.env.VITE_API_URL}/login`, body)
        .then(() => navigate("/login"))
        .catch(error =>{
          if(error.response.status === 404){
            alert("Erro! Tente novamente mais tarde.");
            return;
          }
          if(error.response.data.userName === setUserName){
            alert("Esse usuário já está cadastrado!");
            return;
          }
        })
    };
  }

