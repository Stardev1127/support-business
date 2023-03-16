import logoImg from '@/public/logo.png';
import { Link } from 'react-scroll';

import { HiMail } from 'react-icons/hi';

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaHeart,
  FaPhoneAlt,
  FaWhatsapp,
} from 'react-icons/fa';

import {
  ContainerColumn,
  ContainerColumns,
  ContainerFooter,
  LogoImage,
  DescriptionBrand,
  ListNetworks,
  Network,
  Line,
  ContainerCopyright,
  TextCopyright,
  TextCredits,
  TitleColumn,
  ItemColumn,
} from './styles';

const Footer: React.FC = () => {
  return (
    <ContainerFooter>
      <ContainerColumns>
        <ContainerColumn>
          <LogoImage src={logoImg} height={72} alt="Logo image website" />
          <DescriptionBrand>
            O Support Business é a comunidade líder mundial para negócios,
            crescerem e serem relevantes.
          </DescriptionBrand>
          <ListNetworks>
            <Network>
              <FaFacebook size={22} />
            </Network>
            <Network>
              <FaInstagram size={22} />
            </Network>
            <Network>
              <FaTwitter size={22} />
            </Network>
          </ListNetworks>
        </ContainerColumn>
        <ContainerColumn>
          <TitleColumn>Navegação</TitleColumn>
          <Link to="datasQuotes" smooth={true} duration={500}>
            <ItemColumn>DADOS E CITAÇÕES</ItemColumn>
          </Link>
          <Link to="financialPlanning">
            <ItemColumn>PLANEJAMENTO FINANCEIRO</ItemColumn>
          </Link>
          <Link to="financialTools">
            <ItemColumn>FERRAMENTAS FINANCEIRAS</ItemColumn>
          </Link>
          <Link to="lineCredits">
            <ItemColumn>LINHAS DE CRÉDITO</ItemColumn>
          </Link>
          <Link to="trainingManagers">
            <ItemColumn>CAPACITAÇÃO PARA GESTORES</ItemColumn>
          </Link>
          <Link to="taxation">
            <ItemColumn>TRIBUTAÇÃO</ItemColumn>
          </Link>
          <Link to="faq">
            <ItemColumn>PERGUNTAS FREQUENTES</ItemColumn>
          </Link>
        </ContainerColumn>
        <ContainerColumn>
          <TitleColumn>Integrantes</TitleColumn>
          <ItemColumn>Caroline Nicoly de Souza</ItemColumn>
          <ItemColumn>Júlia de Fátima Chiconi</ItemColumn>
          <ItemColumn>Rafaela Elias Gonçalves</ItemColumn>
          <ItemColumn>Stephanie da Silva Aparecido</ItemColumn>
          <ItemColumn>Gabriela Carolini Paliuco</ItemColumn>
        </ContainerColumn>
        <ContainerColumn>
          <TitleColumn>Contatos</TitleColumn>
          <ItemColumn>
            <FaPhoneAlt size={18} />
            (17) 99673-2083
          </ItemColumn>
          <ItemColumn>
            <FaWhatsapp size={18} />
            (17) 99999-9999
          </ItemColumn>
          <ItemColumn>
            <HiMail size={18} />
            apoiarnegocios@gmail.com
          </ItemColumn>
        </ContainerColumn>
      </ContainerColumns>
      <Line />
      <ContainerCopyright>
        <TextCopyright>
          © 2022 Support Business. Todos direitos reservados.
        </TextCopyright>
        <TextCredits>
          Feito com <FaHeart color="#e02041" /> por Support Business.
        </TextCredits>
      </ContainerCopyright>
    </ContainerFooter>
  );
};

export default Footer;
