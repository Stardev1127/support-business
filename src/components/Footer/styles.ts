import Image from 'next/image';
import styled from 'styled-components';

export const ContainerFooter = styled.footer`
  margin-top: 80px;
  padding: 50px 120px;
  width: 100%;
  background: #fff;
`;

export const ContainerColumns = styled.div`
  display: flex;
  gap: 32px;
`;

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LogoImage = styled(Image)``;

export const DescriptionBrand = styled.p`
  width: 300px;
  color: ${({ theme }) => theme.currentLine};
  font-size: 0.95rem;
`;

export const ListNetworks = styled.ul`
  display: flex;
  list-style: none;
  gap: 12px;
`;

export const Network = styled.li`
  cursor: pointer;
  opacity: 0.65;
  transition: opacity 0.4s;

  &:hover {
    opacity: 1;
  }
`;

export const Line = styled.hr`
  width: 95%;
  height: 1px;
  border: 0;
  background-color: ${({ theme }) => theme.comment};
  margin: 16px auto;
`;

export const ContainerCopyright = styled.div`
  color: ${({ theme }) => theme.currentLine};
  display: flex;
  justify-content: space-between;
`;

export const TextCopyright = styled.p``;

export const TextCredits = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const TitleColumn = styled.p`
  font-weight: bold;
`;

export const ItemColumn = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5em;
  color: ${({ theme }) => theme.comment};
  cursor: pointer;
  font-weight: 500;
  transition: filter 0.4s;

  &:hover {
    filter: brightness(75%);
  }
`;
