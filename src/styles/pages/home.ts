import Image from 'next/image';
import styled from 'styled-components';

export const ContainerSpace = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 85%;
  margin: auto;
`;

interface TDefaultInformation {
  background?: string;
}

export const DefaultInformation = styled.div<TDefaultInformation>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: space-around;
  padding: 25px 0;
  margin: 15px 0;
  background: ${({ background }) => background};
  ${({ background }) => `box-shadow: 0 0 15px 5px ${background};`};
`;

export const ImageRepresent = styled(Image)`
  margin: auto;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 800px;
  margin: auto;
  height: 100%;
`;

interface TTItleInformation {
  fontSize?: number;
}

export const TitleInformation = styled.h1<TTItleInformation>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 2)}rem;
  text-transform: uppercase;
`;

export const DescriptionInformation = styled.div`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.currentLine};
  white-space: pre-wrap;
  text-indent: 1rem;

  & ul {
    list-style-position: inside;
  }
`;
