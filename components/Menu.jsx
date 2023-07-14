import styled from "styled-components"
import image from "../images/logoWhite.png"
import text from "../images/textWhite.png"
import icon1 from "../images/icon1.png"
import icon2 from "../images/icon2.png"

export default function FixedMenu() {

    return (
        <MenuContainer>
            <ImageText>
                <img src={image}></img>
                <img src={text}></img>
            </ImageText>

            <input placeholder="Pesquisar"/>

            <Icons>
                <img src={icon1}></img>
                <img src={icon2}></img>
            </Icons>
        </MenuContainer>
    )
}

const MenuContainer = styled.div`
height: 143px;
width: 100%;
position: fixed;
display: flex;
justify-content: space-between;
align-items: center;
z-index: 2;
top: 0px;
left: 0px;

input{
    width: 337px;
    height: 35px;
    border-radius: 10px; 
    background-color: #EBEBEB;
    border: 1px solid #013743;
    padding: 20px;
    
    ::placeholder {
        color: #424B5A;
        font-size: 14px;
    }
}
`

const ImageText = styled.div`
width: 227px;
height: 129px;
display: flex;
` 

const Icons = styled.div`
width:76px;
height: 33px;
display: flex;
justify-content: space-around;
`