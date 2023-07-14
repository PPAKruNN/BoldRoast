import { Link } from "react-router-dom";
import styled from "styled-components";
import useSignIn from "../hooks/useSignIn";
import useForm from "../hooks/useForm";
import { useRegister } from "../services/login-register";

export default function RegisterPage() {
  const { form, changeForm } = useForm({ completeName: "", email: "", password: ""});
  useSignIn();
  const resgister = useRegister();

  function formRegister(e) {
    e.preventDefault();
    resgister(form);
  }

  return (
    <ResgisterContainer>
        <h1>Crie a sua conta</h1>

      <form onSubmit={formRegister}>
        <input
          required
          type="text"
          placeholder="Nome Completo"
          name="completeName"
          value={form.completeName}
          onChange={changeForm}
        />
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
        <button type="submit">CRIAR CONTA</button>
        <p>Ao criar sua conta, você aceita os termos e condições e autoriza o uso dos seus dados.</p>
      </form>

      <Link to="/login">Já tem uma conta? Entre agora!</Link>
    </ResgisterContainer>
  );
}


const ResgisterContainer = styled.div`
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
        margin-top: 20px;
        
        &:hover{
            background-color: #00fa9a;
          }
    }

    p{
        font-weight: 400;
        font-size: 13px;
        line-height: 14px;
        color: #1E1E1E;
        margin-bottom: 20px;
    }
`;