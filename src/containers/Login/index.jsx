import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { toast } from 'react-toastify'

import { api } from '../../services/api'
import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  RightContainer,
  Tittle,
  Link,
} from './styles'
import Logo from '../../assets/Logo.svg'
import { Button } from '../../components/Button'

export function Login() {
  const navigate = useNavigate()
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

  const onSubmit = async (data) => {
    try {
      const response = await toast.promise(
        api.post('/session', {
          email: data.email,
          password: data.password,
        }),

        {
          pending: 'Verificando seus dados',
          success: {
            render() {
              setTimeout(() => {
                navigate('/')
              }, 2000)

              return 'Seja Bem-vindo(a) 👌'
            },
          },
          error: 'Email ou senha incorretos 🤯',
        },
      )
      console.log(response)
    } catch (error) {
      console.error('Erro ao fazer login:', error)
      toast.error('😯 Falha no sistema! Tente novamente mais tarde.')
    }
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
          <Link to="/cadastro"> Clique aqui.</Link>
        </p>
      </RightContainer>
    </Container>
  )
}
