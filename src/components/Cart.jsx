import { useContext } from "react";
import styled from "styled-components"
import CartContext from "../context/CartContext";
import icon3 from "../images/icon3.png";
import { useNavigate } from "react-router-dom";


export default function FixedCart() {
    const { products, setProducts, total, setTotal } = useContext(CartContext);
    const navigate = useNavigate();

    function navegarLoja(){
        navigate('/shop');
    }

    function navegarCheckout(){
        navigate('/checkout');
    }

    return (
        <>
        {products.length != 0 ? (
            <ContainerCart>
            <h1>SEU CARRINHO</h1>

            {products.map((product)=> {
                <ContainerItems key={product._id}>
                    <img src={product.image}></img>

                    <ProductPrice>
                        <h2>{product.name}</h2>
                        <p>R${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                    </ProductPrice>

                    <img src={icon3}></img> 
                </ContainerItems>
            })}

            <button onClick={navegarCheckout}>FINALIZAR PEDIDO</button>
        </ContainerCart>
        ) : (
            <ContainerCart>
                <p>Seu carrinho está vazio, explore alguns produtos primeiro</p>
                <button onClick={navegarLoja}>EXPLORAR CAFÉS</button>
            </ContainerCart>
        )}
        
        </>
    )  
}

const ContainerCart = styled.div`
font-family: Ubuntu, sans-serif;
z-index: 15;
padding: 20px 40px;
width: 431px;
height: max-content;
border-radius: 11px;
background-color: #D9D9D9;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 25px;

p{
    font-weight: 400;
    font-size: 22px;
    line-height: 25px;
}
h1{
    font-weight: 500;
    font-size: 24px;
    line-height: 31px;
    color: #013743;
}

button{
    width: 218px;
    height: 53px;
    background-color: #013743;
    color: #FFFFFF;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;

    &:hover{
        background-color: #5A3A20;
    }
}
`

const ContainerItems = styled.div`
width: 348px;
height: 92px;
display: flex;
justify-content: space-between;
align-items: center;
`

const ProductPrice = styled.div`
width: 182px;

h2{
    font-weight: 500;
    font-size: 22px;
    line-height: 25px;
    color: #1E1E1E;
}

p{
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    color: #424B5A;
    margin-top: 10px;
}
`