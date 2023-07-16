import styled from "styled-components";
import CoffeMock from "../images/CoffeMock.png";

export default function Product({product}){
    return(
        <ProductDiv>
            {product ? (
                <>
                    <img src={product.image} alt={product.title} />
                    <h2>{product.title}</h2>
                    <p>{product.price}</p>
                    <button>ADICIONAR AO CARRINHO</button>
                </>
            ) : (
                <>
                    <img src={CoffeMock} alt="Mocked Coffee" />
                    <h2>Café 001 Notas de Caramelo</h2>
                    <p>R$35,00</p>
                    <button>ADICIONAR AO CARRINHO</button>
                </>
            )}
        </ProductDiv>
    )
}

const ProductDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    gap: 10px;
    width: 22.5%;

    img {
        width: 100%;
        min-height: 70%;
        border-radius: 16px;

        object-fit: cover;    /* Mock Specific */
        object-position: 45%; /* Mock Specific */
    }

    p, h2, button{
        font-family: Ubuntu, sans-serif;
        text-align: center;
        font-weight: 500;
    }

    h2 {
        color: #0D0D0D;
        font-size: 20px;
    }

    p {
        color: #0B1424;
        font-size: 18px;
    }

    button {
        background-color: #000000;
        border-radius: 13px;
        padding: 8px ;

        width: 90%;

        color: #FFF;
        font-size: 14px;
        font-weight: 400;
    }
`
