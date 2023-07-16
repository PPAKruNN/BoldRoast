import { styled } from "styled-components"
import CoffeMock from "../images/CoffeMock.png"


export default function CheckoutPage(){

    return(
        <>
            <CheckoutDiv>
                <TopContent>
                    <h1>Checkout</h1>
                    <button>VOLTAR PARA O CARRINHO</button>
                </TopContent>

                <MainContent>
                    <CheckoutInputs>
                    
                    </CheckoutInputs>

                    <ReviewOrder>
                        <h3>Revise seu Pedido</h3>
                        <div>
                            <OrderItem>
                                <img src={CoffeMock}></img>
                                <div>
                                    <h4>Nome do produto vou deixar bem longo aqui</h4>
                                    <p>Variação: 250g moído</p>
                                    <p>Quantidade: 1</p>
                                    <div>R$99,99</div>
                                </div>
                            </OrderItem>
                            <OrderItem>
                                <img src={CoffeMock}></img>
                                <div>
                                    <h4>Nome do produto vou deixar bem longo aqui</h4>
                                    <p>Variação: 250g moído</p>
                                    <p>Quantidade: 1</p>
                                    <div>R$99,99</div>
                                </div>
                            </OrderItem>
                            
                        </div>
                        <TotalOrder>
                            <div>
                                <h3>Total:</h3>
                                <h3>R$299,97</h3>
                            </div>
                            <button>FINALIZAR PEDIDO</button>
                        </TotalOrder>
                    </ReviewOrder>
                </MainContent>
            </CheckoutDiv>
        </>
    )
}

const CheckoutDiv = styled.div`
    font-family: Ubuntu, sans-serif;
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    margin: auto;
    margin-top: 60px;
`
const TopContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    h1{
        color: #0D0D0D;
        font-size: 42px;
        font-weight: 700;
    }

    button{
        width: 265px;
        padding: 13px 30px;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        background: #013743;

        color: #FFF;
        font-size: 16px;
        font-weight: 400;
        text-transform: uppercase;
    }
`
const MainContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 50px 0px 30px;
`
const CheckoutInputs = styled.div`
    width: 60%;
`
const ReviewOrder = styled.div`
    width: 30%;
    height: auto;
    h3{
        color: #1E1E1E;
        font-size: 28px;
        font-weight: 700;
        padding-bottom: 30px;
    }
`
const OrderItem = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
    margin-bottom: 20px;

    img{
        width: 95px;
        height: 95px;
        object-fit: cover;
        border-radius: 5px;
    }
    div{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 6px;

        h4{
            color: #1E1E1E;
            font-size: 16px;
            font-weight: 500;
            line-height: 115%;
        }
        p{
            color: #424B5A;
            font-size: 12px;
            font-weight: 400;
        }

        div{
            display: flex;
            align-items: flex-end;

            color: #1E1E1E;
            font-weight: 500;
        }
    }
    
`
const TotalOrder = styled.div`
    padding: 70px 0px 30px;
    div{
        display: flex;
        justify-content: space-between;
        h3{
            font-size: 24px;
        }
    }
    button{
        border-radius: 13px;
        background: #013743;
        padding: 18px 41px;

        color: #FFF;
        font-size: 21px;
        font-weight: 400;
        text-transform: uppercase;
    }
`