import styled from "styled-components"
import { Link } from "react-router-dom"
import { TbArrowBackUp } from "react-icons/tb";

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-family: sans-serif;
`

const TextLogin = styled.h1`
    text-align: center;
    margin-top: 24px;
`

const ButtonBack = styled.button`
    width: 150px;
    height: 50px;
    background-color: #777;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    border: 0;
    border-radius: 12px;
    margin-top: 16px;
    cursor: pointer;
`

const Authenticated = () => {
    return(
        <Main>
            <TextLogin>É preciso ter um login para se conectar :)</TextLogin>
            <ButtonBack> <Link to="/"> <TbArrowBackUp/> Voltar</Link> </ButtonBack>
        </Main>
    )
}

export default Authenticated