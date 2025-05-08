import { CategoriesCarousel } from '../../components/CategoriesCarousel';
import { OffersCarousel } from '../../components/OffersCarousel';
import { UseUser } from '../../hooks/UserContext';
import { Banner, Container } from './styles';

export function Home() {
  console.log(UseUser());
  return (
    <main>
      <Banner>
        <h1>Bem-vindo(a)!</h1>
      </Banner>
      <Container>
        <div>
          <CategoriesCarousel />
          <OffersCarousel />
        </div>
      </Container>
    </main>
  );
}
