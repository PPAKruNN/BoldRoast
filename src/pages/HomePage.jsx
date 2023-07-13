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