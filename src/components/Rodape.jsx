import styled from "styled-components"
import image from "../images/logoBlack.png"
import text from "../images/textBlack.png"

export default function FixedRodape() {

    return (
        <Rodape>
            <RodapeContainer>
                <ImageText>
                    <img src={image}></img>
                    <img src={text}></img>
                </ImageText>

                <h1>©2023 - BOLD ROAST | TODOS OS DIREITOS RESERVADOS</h1>
            </RodapeContainer>
        </Rodape>
    )
}

const Rodape = styled.div`
height: 149px;
width: 100%;
position: fixed;
display: flex;
justify-content: center;
z-index: 2;
background-color: #000000;
bottom: 0px;
left: 0px;
`
const RodapeContainer = styled.div`
    width: 1100px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        color: #A1AEB7;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
    }
`

const ImageText = styled.div`
width: 200px;
height: 105px;
display: flex;
` 
