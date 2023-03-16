import styled from 'styled-components';

interface TContainerAccordion {
  background?: string;
  isOpened?: boolean;
}

export const ContainerAccordion = styled.div<TContainerAccordion>`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ background, isOpened }) =>
    isOpened && (background ? background : `#fff`)};
  border-radius: 12px;
  transition: background 0.4s;
`;

interface THeaderAccordion {
  background?: string;
  isOpened?: boolean;
}

export const HeaderAccordion = styled.div<THeaderAccordion>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ background }) => (background ? background : `#fff`)};
  border-radius: 12px;
  padding: 8px 24px;
  cursor: pointer;
  box-shadow: 0 0 5px #00000055;
  filter: brightness(${({ isOpened }) => (isOpened ? `85%` : `100%`)});
  transition: filter 0.4s;

  &:hover {
    filter: brightness(85%);
  }
`;

export const HeaderContent = styled.div`
  user-select: none;
`;

interface TArrowAltenate {
  isOpened: boolean;
}

export const ArrowAlternate = styled.div<TArrowAltenate>`
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    transition: transform 0.4s;
    transform: rotate(${({ isOpened }) => (isOpened ? `-180deg` : `0deg`)});
  }
`;

interface TBodyAccordion {
  background?: string;
  isOpened?: boolean;
}

export const BodyAccordion = styled.div<TBodyAccordion>`
  background: ${({ background }) => (background ? background : `#fff`)};
  overflow: hidden;
  transition: max-height 0.4s;
  max-height: ${({ isOpened }) => (isOpened ? `1000px` : `0px`)};
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

export const BodyContent = styled.div`
  padding: 25px;
`;
