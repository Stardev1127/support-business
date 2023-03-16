import { GiPayMoney, GiReceiveMoney, GiTakeMyMoney } from 'react-icons/gi';
import BoxAnimate from '../BoxAnimate';

import {
  ContainerDataQuotes,
  TitleDataQuotes,
  DescriptionDataQuotes,
  ListCards,
  ItemCard,
  TitleCard,
  DescriptionCard,
  IconCard,
} from './styles';

const DataQuotes: React.FC<{
  id?: string;
}> = ({ ...props }) => {
  return (
    <ContainerDataQuotes {...props}>
      <TitleDataQuotes>Dados & Citações</TitleDataQuotes>
      <DescriptionDataQuotes>
        A descrição dos procedimentos e métodos utilizados nas pesquisas sempre
        foi um elemento crucial no processo de criação.
      </DescriptionDataQuotes>
      <ListCards>
        <BoxAnimate direction="up">
          <ItemCard>
            <IconCard>
              <GiReceiveMoney size={32} />
            </IconCard>
            <TitleCard>ABF</TitleCard>
            <DescriptionCard>
              “As micro e pequenas empresas são as principais geradoras de
              riqueza no Comércio no Brasil, já que respondem por 53,4% do PIB
              deste setor”. (ABF, 2014, p. 2)
            </DescriptionCard>
          </ItemCard>
        </BoxAnimate>
        <BoxAnimate direction="up">
          <ItemCard>
            <IconCard>
              <GiTakeMyMoney size={32} />
            </IconCard>
            <TitleCard>KOTESKI</TitleCard>
            <DescriptionCard>
              “Por meio de instituições oficiais – em especial o (BNDES), o (BB)
              e a Caixa Econômica Federal (CEF) –, disponibiliza recursos
              subsidiados e linhas de financiamentos específicos para os
              pequenos negócios”. (KOTESKI, 2004, p. 17)
            </DescriptionCard>
          </ItemCard>
        </BoxAnimate>
        <BoxAnimate direction="up">
          <ItemCard>
            <IconCard>
              <GiPayMoney size={32} />
            </IconCard>
            <TitleCard>ABF</TitleCard>
            <DescriptionCard>
              “No PIB da Indústria, a participação das micro e pequenas (22,5%)
              já se aproxima das médias empresas (24,5%). E no setor de
              Serviços, mais de um terço da produção nacional (36,3%) tem origem
              nos pequenos negócios”. (ABF, 2014, p. 2)
            </DescriptionCard>
          </ItemCard>
        </BoxAnimate>
      </ListCards>
    </ContainerDataQuotes>
  );
};

export default DataQuotes;
