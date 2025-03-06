import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

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
  const schema = yup
    .object({
      email: yup.string().email().required(),
      password: yup.string().min(6).required(),
    })
    .required()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => console.log(data)

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

        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>
              Email
              <input type="email" {...register('email')} />
            </label>
          </InputContainer>

          <InputContainer>
            <label>
              Senha
              <input type="password" {...register('password')} />
            </label>
          </InputContainer>

          <Button type="submit">Entrar</Button>
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
