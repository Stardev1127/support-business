import {
  ArrowAlternate,
  BodyAccordion,
  BodyContent,
  ContainerAccordion,
  HeaderAccordion,
  HeaderContent,
} from './styles';

import { FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';

interface TAccordion {
  background?: string;
  contentHeader: JSX.Element | string;
  contentAccordion?: JSX.Element | string;
}

const Accordion: React.FC<TAccordion> = ({
  contentHeader,
  contentAccordion,
}) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <ContainerAccordion isOpened={isOpened}>
      <HeaderAccordion
        isOpened={isOpened}
        onClick={() => setIsOpened((state) => !state)}
      >
        <HeaderContent>{contentHeader && contentHeader}</HeaderContent>
        <ArrowAlternate isOpened={isOpened}>
          <FaChevronDown size={24} />
        </ArrowAlternate>
      </HeaderAccordion>
      <BodyAccordion isOpened={isOpened}>
        <BodyContent>{contentAccordion && contentAccordion}</BodyContent>
      </BodyAccordion>
    </ContainerAccordion>
  );
};

export default Accordion;
