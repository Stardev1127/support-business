import Image from 'next/image';
import styled from 'styled-components';

export const ContainerMenu = styled.nav`
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled(Image)``;

export const LogoText = styled.p`
  color: #754a8c;
`;

export const ListPages = styled.ul`
  display: flex;
  list-style: none;
  gap: 32px;
`;

export const PageItem = styled.li`
  font-family: 'Rubik';
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.1rem;
  color: #d2c2ff;
  cursor: pointer;
  transition: filter 0.4s;

  &:hover {
    filter: brightness(85%);
  }
`;

export const ButtonAccess = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #8371ff;
  padding: 12px 16px;
  font-size: 16px;
  font-family: 'Rubik';
  cursor: pointer;
  border: 0;
  transition: filter 0.4s;

  &:hover {
    filter: brightness(85%);
  }

  &:active {
    filter: brightness(150%);
  }
`;
