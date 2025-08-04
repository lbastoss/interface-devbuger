import styled from 'styled-components';
import BannerHamburger from '../../assets/banner-hamburguer.svg';
import Background from '../../assets/background.svg';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${(props) => props.theme.secondWhite};

    background: linear-gradient(
    rgba(255,255,255, 0.5),
    rgba(255,255,255, 0.5)
), url('${Background}');
`;

export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 480px;
    width: 100%;
    position: relative;

    background: url('${BannerHamburger}') no-repeat;
    background-color: ${(props) => props.theme.mainBlack};
    background-position: center;
    background-size: cover;

    h1 {
        font-family: 'Road Rage', sans-serif;
        font-size: 80px;
        line-height: 65px;
        position: absolute;
        color: ${(props) => props.theme.white};

        right: 20%;
        top: 30%;
    }

    span {
        display: block;
        color: ${(props) => props.theme.white};
        font-size: 20px;
    }

`;

export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30px;
`;

export const CategoryButton = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    background: none;
    color: ${(props) => (props.$isActiveCategory ? (props) => props.theme.purple : '#000')};
    font-size: 24px;
    font-weight: bold;
    padding-bottom: 5px;
    line-height: 20px;
    border: none;
    border-bottom: ${(props) => props.$isActiveCategory && `3px solid ${props.theme.purple}`};
    display: flex;
    

`;

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    gap: 60px;
    justify-content: center;
    max-width: 1280px;
    margin: 50px auto 0;

`;

export const ContainerButton = styled.button`
    background: ${(props) => props.theme.purple};
    width: 42px;
    height: 42px;
    border: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(140px);

  &:hover {
    background-color: ${(props) => props.theme.secondDarkPurple};
    
  }
`;

export const StyledImage = styled.img`
    width: 37px;
    padding: 1px;
   
    

   
   
`;
