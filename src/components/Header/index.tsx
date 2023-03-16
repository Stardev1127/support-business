import Menu from '../Menu';

import openFinance from '@/public/finance.svg';

import {
  ButtonDownload,
  ContainerFinance,
  ContainerHeader,
  DescriptionFinance,
  FinanceImg,
  InformationFinance,
  TitleFinance,
} from './styles';
import BoxAnimate from '../BoxAnimate';

const Header: React.FC = () => {
  return (
    <ContainerHeader>
      <Menu />

      <ContainerFinance>
        <BoxAnimate direction="right">
          <InformationFinance>
            <TitleFinance>FERRAMENTAS FINANCEIRAS</TitleFinance>
            <DescriptionFinance>
              A ferramenta de gestão financeira pode ajudar a organizar os dados
              financeiros do seu negócio, otimizando o trabalho e fazendo com
              que os profissionais responsáveis pela área tenham mais tempo
              hábil.
            </DescriptionFinance>
            <a href="/files/manual.pdf" download>
              <ButtonDownload>Baixar PDF</ButtonDownload>
            </a>
          </InformationFinance>
        </BoxAnimate>
        <BoxAnimate direction="left">
          <FinanceImg src={openFinance} height={450} alt="Open finance" />
        </BoxAnimate>
      </ContainerFinance>
    </ContainerHeader>
  );
};

export default Header;
