import { CategoriesCarousel } from '../../components/CategoriesCarousel'
import { Banner, Content, Container } from './styles'

export function Home() {
  return (
    <main>
      <Banner>
        <h1>Bem-vindo(a)!</h1>
      </Banner>
      <Container>
        <Content>
          <CategoriesCarousel />
          <div>Carrossel Produtos</div>
        </Content>
      </Container>
    </main>
  )
}
