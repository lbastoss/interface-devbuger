import { useForm } from 'react-hook-form'
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
} from './styles'
import Logo from '../../assets/Logo.svg'
import { Button } from '../../components/Button'

export function Register() {
  const schema = yup
    .object({
      name: yup.string().required('O nome é obrigatório'),
      email: yup
        .string()
        .email('Digite um e-mail valido')
        .required('O email é obrigatorio'),
      password: yup
        .string()
        .min(6, 'A senha deve ter pelo menos 6 caracteres')
        .required('Digite uma senha'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
        .required('Confirme sua senha'),
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
      const { status } = await api.post(
        '/users',
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        {
          validateStatus: () => true,
        },
      )

      if (status === 200 || status === 201) {
        toast.success('😊 Conta criada com sucesso!')
      } else if (status === 400 || status === 409) {
        toast.error('🫣 Email já cadastrado! Faça o login para continuar')
      } else {
        throw new Error()
      }
    } catch (error) {
      toast.error('😯 Falha no sistema! Tente novamente')
    }
  }
  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburger" />
      </LeftContainer>

      <RightContainer>
        <Tittle>Criar conta</Tittle>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
            <label>Nome</label>
            <input type="text" {...register('name')} />
            <p>{errors?.name?.message}</p>
          </InputContainer>

          <InputContainer>
            {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
            <label>Email </label>
            <input type="email" {...register('email')} />
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
            <label>Senha</label>
            <input type="password" {...register('password')} />
            <p>{errors?.password?.message}</p>
          </InputContainer>

          <InputContainer>
            {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
            <label>Confirmar Senha</label>
            <input type="password" {...register('confirmPassword')} />
            <p>{errors?.confirmPassword?.message}</p>
          </InputContainer>

          <Button type="submit">Criar conta</Button>
        </Form>

        <p>
          Já possui conta?
          {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
          <a> Clique aqui.</a>
        </p>
      </RightContainer>
    </Container>
  )
}
