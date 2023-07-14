import styled from "styled-components"
import image from "../images/logoBlack.png"
import text from "../images/textBlack.png"

export default function FixedRodape() {

    return (
        <RodapeContainer>
            <ImageText>
                <img src={image}></img>
                <img src={text}></img>
            </ImageText>

            <h1>©2023 - Bold ROAST | TODOS OS DIREITOS RESERVADOS</h1>
        </RodapeContainer>
    )
}

const RodapeContainer = styled.div`
height: 179px;
width: 100%;
position: fixed;
display: flex;
justify-content: space-between;
align-items: center;
z-index: 2;
background-color: #000000;
bottom: 0px;
left: 0px;

    h1{
        color: #A1AEB7;
        font-weight: 400;
        font-size: 14px
        line-height: 21px
    }
`

const ImageText = styled.div`
width: 227px;
height: 129px;
display: flex;
` 
