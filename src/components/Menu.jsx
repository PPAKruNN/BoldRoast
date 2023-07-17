import styled from "styled-components"
import image from "../images/logoWhite.png"
import text from "../images/textWhite.png"
import icon1 from "../images/icon1.png"
import icon2 from "../images/icon2.png"
import { Link } from "react-router-dom"
import FixedCart from "./Cart"
import { useContext } from "react"
import CartContext from "../context/CartContext"

export default function FixedMenu() {

    const {openCart, setOpenCart} = useContext(CartContext);

    function showCart(){
        setOpenCart(true)

        setTimeout(() => {
            setOpenCart(false);
        }, 3000);
    }

    return (
        <Menu>
            <MenuContainer>
                <Link to="/">
                <ImageText>
                    <img src={image}></img>
                    <img src={text}></img>
                </ImageText>
                </Link>

                <Link to="/shop">
                <p>IR PARA A LOJA</p>
                </Link>
                {/* <input placeholder="Pesquisar"/> */}

                <Icons>
                    <Link to="/login">
                        <img src={icon1}></img>
                    </Link>
                    <img src={icon2} onClick={showCart}></img>
                    {openCart && <FixedCart />}
                </Icons>
            </MenuContainer>
        </Menu>
    )
}

const Menu = styled.div`
font-family: Ubuntu, sans-serif;
height: 150px;
width: auto;
display: flex;
justify-content: center;
`

const MenuContainer = styled.div`
    width: 1100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
        a{
            color: #424B5A;
            text-decoration: none;
        }

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
width: 200px;
height: 105px;
display: flex;
cursor: pointer;
` 

const Icons = styled.div`
width:200px;
height: 33px;
display: flex;
justify-content: center;
gap: 15px;
`