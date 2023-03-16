import styled from 'styled-components';

export const ContainerDataQuotes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 50px 0;
`;

export const TitleDataQuotes = styled.h1`
  font-size: 2rem;
  text-align: center;
  text-transform: uppercase;
`;

export const DescriptionDataQuotes = styled.p`
  width: 800px;
  text-align: center;
  color: ${({ theme }) => theme.currentLine};
  font-size: 1.2rem;
`;

export const ListCards = styled.ul`
  display: flex;
  gap: 45px;
`;

export const ItemCard = styled.li`
  background: #fff;
  border-radius: 30px;
  width: 350px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 12px;
  box-shadow: 0 0 8px 0 #00000022;
  z-index: 100;
  transition: box-shadow 0.4s;

  &:before {
    content: '';
    border-radius: 30px;
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    top: 0;
    left: 0;
    z-index: -100;
    background: linear-gradient(
      ${({ theme }) => theme.green},
      ${({ theme }) => theme.green}88,
      ${({ theme }) => theme.green}55
    );
    opacity: 0;
    transition: opacity 0.4s;
  }

  &:hover {
    box-shadow: 0 0 16px 0 #00000022;

    &:before {
      opacity: 1;
    }
  }
`;

export const IconCard = styled.div`
  width: fit-content;
  padding: 8px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  cursor: pointer;
  transition: filter 0.4s;

  &:hover {
    filter: brightness(85%);
  }
`;

export const TitleCard = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const DescriptionCard = styled.p`
  padding: 0 4px;
  text-indent: 1rem;
  color: ${({ theme }) => theme.currentLine};
`;
