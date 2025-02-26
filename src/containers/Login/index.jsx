import { Button, Container, Form, InputContainer, LeftContainer, Link, RightContainer, Tittle } from './styles'
import Logo from '../../assets/Logo.svg'

export function Login() {
	return (
		<Container>
			<LeftContainer>
				<img src={Logo} alt="logo-devburger" />
			</LeftContainer>

			<RightContainer>
				<Tittle>
					Olá, seja bem vindo ao <span>Dev Burguer!</span> Acesse com seu <span>Login e senha.</span>
				</Tittle>

				<Form>
					<InputContainer>
						<label>Email</label>
						<input type="email" />
					</InputContainer>

					<InputContainer>
						<label>Senha</label>
						<input type="password" />
					</InputContainer>

					<Link>Esqueci minha senha.</Link>
					<Button>Entrar</Button>
				</Form>

				<Link>Não possui conta? Clique aqui.</Link>
			</RightContainer>
		</Container>
	)
}
