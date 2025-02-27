import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  RightContainer,
  Tittle,
} from './styles'
import Logo from '../../assets/Logo.svg'
import { Button } from '../../components/Button'

export function Login() {
  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburger" />
      </LeftContainer>

      <RightContainer>
        <Tittle>
          Olá, seja bem vindo ao <span>Dev Burguer!</span>
          <br />
          Acesse com seu
          <span> Login e senha.</span>
        </Tittle>

        <Form>
          <InputContainer>
            <label>
              Email
              <input type="email" />
            </label>
          </InputContainer>

          <InputContainer>
            <label>
              Senha
              <input type="password" />
            </label>
          </InputContainer>

          <Button>Entrar</Button>
        </Form>

        <p>
          Não possui conta?
          {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
          <a> Clique aqui.</a>
        </p>
      </RightContainer>
    </Container>
  )
}
