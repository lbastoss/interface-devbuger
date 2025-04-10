import { Banner, Content, Container } from './styles'

export function Home() {
  return (
    <main>
      <Banner>
        <h1>Bem-vindo(a)!</h1>
      </Banner>
      <Container>
        <Content>
          <div>Carrossel Cateogiras</div>
          <div>Carrossel Produtos</div>
        </Content>
      </Container>
    </main>
  )
}
