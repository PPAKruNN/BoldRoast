import styled from "styled-components";
import CoffeMock from "../images/CoffeMock.png"

export default function HomePage() {

    return (
        <PageSC>
            <div>
                <PresentationSection>
                    <div>
                        <h1>Cafés especiais para pessoas com personalidade</h1> 
                        <p>A MELHOR SELEÇÃO DE CAFÉS DO MUNDO INTEIRO, AO SEU ALCANCE</p>
                        <button>EXPLORAR CAFÉS</button>
                    </div>      
            
                    <img src={CoffeMock}/>
                </PresentationSection>   

                <Banners>
                    <div>
                        <h1>FRETE GRÁTIS PARA TODO BRASIL</h1>
                        <p>Nos pedidos acima de R$149</p>
                    </div>

                    <div>
                        <h1>CAFÉ PREMIUM DE ALTA QUALIDADE</h1>
                        <p>Grãos importados com selo</p>
                    </div>

                    <div>
                        <h1>SATISFAÇÃO GARANTIDA</h1>
                        <p>Ou devolvemos seu dinheiro</p>
                    </div>

                    <div>
                        <h1>PAGUE DO SEU JEITO</h1>
                        <p>Parcele em até 12x</p>
                    </div>
                </Banners>         

                <ProductSliders>
                    <h1>Lancamentos</h1>

                    <div> {/* Slider */}
                        <div>
                            <img src={CoffeMock}/>
                            <h2>Café 001 Notas de Caramelo</h2>
                            <p>R$35,00</p>
                            <button>ADICIONAR AO CARRINHO</button>
                        </div>
                        <div>
                            <img src={CoffeMock}/>
                            <h2>Café 001 Notas de Caramelo</h2>
                            <p>R$35,00</p>
                            <button>ADICIONAR AO CARRINHO</button>
                        </div>
                        <div>
                            <img src={CoffeMock}/>
                            <h2>Café 001 Notas de Caramelo</h2>
                            <p>R$35,00</p>
                            <button>ADICIONAR AO CARRINHO</button>
                        </div>
                        <div>
                            <img src={CoffeMock}/>
                            <h2>Café 001 Notas de Caramelo</h2>
                            <p>R$35,00</p>
                            <button>ADICIONAR AO CARRINHO</button>
                        </div>
                    </div>
                </ProductSliders>
            </div>
        </PageSC>
    )
}

const PageSC = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ffffff;

    align-items: center;

    & > div {
        max-width: 1100px;
    }

    h1 {
        color: #0B1424;
        font-family: Ubuntu;
        font-size: 45px;
        font-style: normal;
        font-weight: 700;
        line-height: 125%; /* 56.25px */
    }

    p {
        color: #1E1E1E;
        font-family: Ubuntu;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%; /* 26px */
    }

    button {
        color: #FFF;
        text-align: center;
        font-family: Ubuntu;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 171.429% */
    }

`

const PresentationSection = styled.div`
    display: flex;
    justify-content: space-between;

    padding: 50px 0px;
    height: 480px;

    gap: 27px;

    div:first-child {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        width: 35%;

        border-radius: 45px;
        padding: 80px 40px 110px 40px;
        gap: 16px;
        
        background-color: #C3CBCE;
        
        button {
            font-size: 18px;
            line-height: 130%; /* 23.4px */
            
            background-color: #013743;
            padding: 15px 35px;
            width: 60%;
            
            border-radius: 16px;
        }
    }

    img {
        width: 55%;
        border-radius: 32px;
    }
`

const Banners = styled.div`

    display: flex;
    justify-content: space-between;

    gap: 12px;

    div {
        padding: 30px 20px;
        width: 20%;
        border-radius: 25px;

        display: flex;
        flex-direction: column;
        
        gap: 12px;

        h1 {
            font-size: 22px;
        }
        
        p {
            font-size: 16px;
        } 
    }

    div:nth-child(odd) {
        background-color: #D9D9D9;
    }

    div:nth-child(even) {
        background-color: #CBE2E8;
    }
`

const ProductSliders = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    padding: 80px 0px;
    gap: 24px;

    width: 100%;

    & > div {

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        height: 450px;

        div {
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

                width: 80%;

                color: #FFF;
                font-size: 14px;
                font-weight: 400;
            }



        }
            
    }


`