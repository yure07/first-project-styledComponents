import './App.css'
import styled from 'styled-components';
import { IoLogIn, IoPersonSharp } from "react-icons/io5";
import { TbPassword } from "react-icons/tb";
import { HiMiniExclamationCircle } from "react-icons/hi2";
import { useRef, useState } from 'react';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  height: 100vh;
  background-color: #607a7a;
`

const ContainerForm = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 350px;
  height: 450px;
  background-color: white;
  border-radius: 4px;
  opacity: .8;
`

const Input = styled.input`
  width: 95%;
  height: 40px;
  padding: 5px 8px;
  margin-bottom: 16px;
  border-radius: 12px;
  font-size: 16px;
  border: 1px solid #777;
`

const ButtonSubmit = styled.button`
  color: #fff;
  background-color: #0048ff;
  border: 1px solid black;
  font-size: 16px;
  font-weight: 700;
  border-radius: 8px;
  width: 100%;
  height: 50px;
  margin-top: 16%;
  cursor: pointer;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
`

const Span = styled.span`
  margin-bottom: 5px;
  margin-left: 8px;
`

const H1 = styled.h1`
  display: flex;
  align-items: center;
`

const SpanErrorPassword = styled.span`
  display: flex;
  align-items: center;
  color: red;
  font-size: 12px;
  font-weight: 700;
  margin-top: -12px;
  margin-left: 8px;
`

const SpanErrorName = styled(SpanErrorPassword)`
  margin-bottom: 8px;
`

const App:React.FC = () => {
  const [name, setName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [showErrorName, setShowErrorName] = useState<boolean>(false)
  const [showErrorPassword, setshowErrorPassword] = useState<boolean>(false)
  const inputName = useRef<HTMLInputElement>(null)
  const inputPassword = useRef<HTMLInputElement>(null)
  
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if(name !== 'admin' && inputName.current){
      setShowErrorName(true)
      const style = inputName.current.style
      style.border = '1px solid red'
    } else if (inputName.current){
      setShowErrorName(false)
      const style = inputName.current.style
      style.border = '1px solid #777'
    }

    if(password !== '1234' && inputPassword.current) {
      setshowErrorPassword(true)
      const style = inputPassword.current.style
      style.border = '1px solid red'
    } else if (inputPassword.current) {
      setshowErrorPassword(false)
      const style = inputPassword.current.style
      style.border = '1px solid #777'
    }
  }

  return (
    <Main>
      <ContainerForm>
        <H1>Login <IoLogIn/> </H1>
        <Form>
          <Span>Name <IoPersonSharp/> </Span>
          <Input type='text' placeholder='Marcos Prestes' onChange={(e) => setName(e.target.value)} ref={inputName}/>
          {showErrorName && (
            <SpanErrorName>Nome inválido <HiMiniExclamationCircle/> </SpanErrorName>
          )}

          <Span>Password <TbPassword/> </Span>
          <Input type='password' placeholder='*******' onChange={(e) => setPassword(e.target.value)} ref={inputPassword}/>
          {showErrorPassword && (
            <SpanErrorPassword>Senha incorreta <HiMiniExclamationCircle/> </SpanErrorPassword>
          )}

          <ButtonSubmit onClick={handleSubmit}>Submit</ButtonSubmit>
        </Form>
      </ContainerForm>
    </Main>
  );
}

export default App;
