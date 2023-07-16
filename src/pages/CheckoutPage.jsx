import { styled } from "styled-components"
import CoffeMock from "../images/CoffeMock.png"
import { useState } from "react"


export default function CheckoutPage(){
    const [exibirEndereco, setExibirEndereco] = useState(true);
    const [exibirPagamento, setExibirPagamento] = useState (false);

    function formatarCEP(event) {
        const input = event.target;
        let value = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    
        if (value.length > 8) {
          value = value.slice(0, 8); // Limita o CEP a 8 dígitos
        }
    
        if (value.length > 5) {
          value = `${value.slice(0, 5)}-${value.slice(5)}`; // Adiciona o hífen
        }
    
        input.value = value;
    }

    return(
        <>
            <CheckoutDiv>
                <TopContent>
                    <h1>Checkout</h1>
                    <button>VOLTAR PARA O CARRINHO</button>
                </TopContent>

                <MainContent>
                    <CheckoutInputs>
                        <Inputs>
                            <h2>Endereço de entrega</h2>
                            <form>
                                <label htmlFor="remetente">Nome completo do remetente</label>
                                <input
                                    name="remetente"
                                    placeholder="Digite o nome completo aqui"
                                    type="text"
                                    required
                                />

                                <label htmlFor="cep">CEP</label>
                                <input
                                    name="cep"
                                    placeholder="Digite o número do seu CEP aqui"
                                    type="text"
                                    inputMode="numeric"
                                    maxLength="8"
                                    onInput="formatarCEP(event)"
                                    required
                                />

                                <label htmlFor="endereco">Endereço</label>
                                <input
                                    name="endereco"
                                    placeholder="Digite o seu endereço aqui"
                                    type="text"
                                    required
                                />

                                <label htmlFor="complemento">Complemento (opcional)</label>
                                <input
                                    name="complemento"
                                    placeholder="Digite o complemento do seu endereço aqui"
                                    type="text"
                                />

                                <label htmlFor="cidade">Cidade</label>
                                <input
                                    name="cidade"
                                    placeholder="Digite sua cidade aqui aqui"
                                    type="text"
                                    required
                                />

                                <label htmlFor="estado">Estado</label>
                                <select name="estado">
                                    <option value="">Selecione seu estado</option>
                                    <option value="AC">Acre</option>
                                    <option value="AL">Alagoas</option>
                                    <option value="AP">Amapá</option>
                                    <option value="AM">Amazonas</option>
                                    <option value="BA">Bahia</option>
                                    <option value="CE">Ceará</option>
                                    <option value="DF">Distrito Federal</option>
                                    <option value="ES">Espírito Santo</option>
                                    <option value="GO">Goiás</option>
                                    <option value="MA">Maranhão</option>
                                    <option value="MT">Mato Grosso</option>
                                    <option value="MS">Mato Grosso do Sul</option>
                                    <option value="MG">Minas Gerais</option>
                                    <option value="PA">Pará</option>
                                    <option value="PB">Paraíba</option>
                                    <option value="PR">Paraná</option>
                                    <option value="PE">Pernambuco</option>
                                    <option value="PI">Piauí</option>
                                    <option value="RJ">Rio de Janeiro</option>
                                    <option value="RN">Rio Grande do Norte</option>
                                    <option value="RS">Rio Grande do Sul</option>
                                    <option value="RO">Rondônia</option>
                                    <option value="RR">Roraima</option>
                                    <option value="SC">Santa Catarina</option>
                                    <option value="SP">São Paulo</option>
                                    <option value="SE">Sergipe</option>
                                    <option value="TO">Tocantins</option>
                                </select>
                            </form>
                            <button>SEGUIR PARA PAGAMENTO</button>
                        </Inputs>
                        <Inputs>
                        <h2>Dados de Pagamento</h2>
                            <form>
                                <label htmlFor="numerocartao">Número do cartão</label>
                                <input
                                    name="numerocartao"
                                    type="text"
                                    required
                                    inputmode="numeric"
                                    pattern="[0-9\s]{13,19}"
                                    autocomplete="cc-number"
                                    maxlength="19"
                                    placeholder="1234 5678 9123 4567"
                                />

                                <label htmlFor="nomecartao">Nome impresso no cartão</label>
                                <input
                                    name="nomecartao"
                                    placeholder="Digite o nome impresso no cartão"
                                    type="text"
                                    required
                                />

                                <label htmlFor="validade">Validade</label>
                                <input
                                    name="validade"
                                    placeholder="MM/AA"
                                    type="text"
                                    required
                                />

                                <label htmlFor="cvv">Código de segurança (CVV)</label>
                                <input
                                    name="cvv"
                                    placeholder="123"
                                    type="text"
                                />

                                <label htmlFor="parcelamento">Parcelamento</label>
                                <select name="parcelamento">
                                    <option value="">Escolha o número de parcelas</option>
                                    <option value="1x">1x</option>
                                    <option value="2x">2x</option>
                                    <option value="3x">3x</option>
                                    <option value="4x">4x</option>
                                    <option value="5x">5x</option>
                                    <option value="6x">6x</option>
                                    <option value="7x">7x</option>
                                    <option value="8x">8x</option>
                                    <option value="9x">9x</option>
                                    <option value="10x">10x</option>
                                    <option value="11x">11x</option>
                                    <option value="12x">12x</option>
                                </select>
                            </form>
                            <button>SEGUIR PARA PAGAMENTO</button>
                        </Inputs>
                    </CheckoutInputs>
                    <ReviewOrder>
                        <div>
                            <h3>Revise seu Pedido</h3>
                            <OrderItems>
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
                            </OrderItems>
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
    display: flex;
    flex-direction: column;
`
const ReviewOrder = styled.div`
    width: 30%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3{
        color: #1E1E1E;
        font-size: 28px;
        font-weight: 700;
        padding-bottom: 30px;
    }
`
const OrderItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    align-self: flex-end;
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
const Inputs = styled.div`
    border-radius: 15px;
    background: #F2F5F7;
    padding: 27px 26px;
    margin-bottom: 25px;
    
    h2{
        color: #5A5A5D;
        font-size: 32px;
        font-weight: 700;
    }

    form{
        padding: 30px 0px 15px;
        label{
            align-self: flex-start;
            text-align: left;
        }
        input{
            align-self: flex-start;
        }
        select{
            align-self: flex-start;
            font-size: 20px;
            width: calc(100% - 30px);
            border-radius: 5px;
            outline: none;
            border: 1px solid #ccc;
            padding: 15px;
            margin: 1px;
            
            :focus {
                border: 2px solid #E0EFFE;
                margin: 0px;
            }
        }
    }

    button{
        margin: 0% 25%;
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