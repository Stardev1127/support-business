import Image from 'next/image';
import styled from 'styled-components';

export const ContainerHeader = styled.header`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column;
  background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
    url('/background.jpg');
  background-size: cover;
  box-shadow: inset 0 0 1000px 100px #000, 0 0 15px 5px #000;
`;

export const ContainerFinance = styled.div`
  /* width: 100%; */
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const InformationFinance = styled.div`
  color: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 700px;
`;

export const TitleFinance = styled.h1`
  font-size: 3rem;
`;

export const DescriptionFinance = styled.p`
  font-size: 1.35rem;
  /* padding: 0 15px; */
  text-indent: 0.5em;
`;

export const FinanceImg = styled(Image)``;

export const ButtonDownload = styled.button`
  background: transparent;
  width: 200px;
  color: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.comment};
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.4s, filter 0.4s, box-shadow 0.4s;

  &:hover {
    filter: brightness(85%);
    background: ${({ theme }) => theme.comment};
    box-shadow: 0 0 5px ${({ theme }) => theme.comment};
  }
`;
