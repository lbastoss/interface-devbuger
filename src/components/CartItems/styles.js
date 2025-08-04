import styled from 'styled-components';

export const ProductImage = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 16px;`;

export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        width: 30px;
        color: ${(props) => props.theme.white};
        border-radius: 4px;
        background-color: ${(props) => props.theme.purple};
        transition: all 0.4s;
        border: none;

        &:hover {
            background-color: ${(props) => props.theme.secondDarkPurple};
        }

        &:active {
            background-color: ${(props) => props.theme.secondDarkPurple};
            box-shadow: 0 0 10px ${(props) => props.theme.secondDarkPurple};
            transition: none;
        }
    }

    `;

export const EmptyCart = styled.div`
    font-size: 20px;
    text-align: center;
    font-weight: bold;
`;

export const TotalPrice = styled.p`
    font-weight: bold;
    `;

export const TrashImage = styled.img`
    height: 20px;
    width: 20px;
    cursor: pointer;

`;
