import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { api } from '../../services/api'
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
      email: yup
        .string()
        .email('Digite um e-mail valido')
        .required('O email é obrigatorio'),
      password: yup
        .string()
        .min(6, 'A senha deve ter pelo menos 6 caracteres')
        .required('Digite uma senha'),
    })
    .required()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  console.log(errors)

  const onSubmit = (data) => {
    const response = api.post('/session', {
      email: data.email,
      password: data.password,
    })
    console.log(response)
  }

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
              <p>{errors?.email?.message}</p>
            </label>
          </InputContainer>

          <InputContainer>
            <label>
              Senha
              <input type="password" {...register('password')} />
              <p>{errors?.password?.message}</p>
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
