import financialPlanning from '@/public/financialPlanning.webp';
import financialTools from '@/public/financialTools.svg';
import financialDRE from '@/public/financialDRE.svg';
import balanceSheet from '@/public/balanceSheet.svg';
import creditAnalysis from '@/public/creditAnalysis.svg';
import howItWorks from '@/public/howItWorks.svg';
import howItWorks2 from '@/public/howItWorks2.svg';
import tax from '@/public/tax.svg';
import diet from '@/public/diet.svg';
import request from '@/public/request.svg';

import DataQuotes from '@/components/DataQuotes';
import Header from '@/components/Header';
import {
  ContainerSpace,
  ContainerText,
  DefaultInformation,
  DescriptionInformation,
  ImageRepresent,
  TitleInformation,
} from '@/styles/pages/home';

import { useTheme } from 'styled-components';

import Accordion from '@/components/Accordion';
import Footer from '@/components/Footer';

import BoxAnimate from '@/components/BoxAnimate';

export default function Home() {
  const theme = useTheme();

  return (
    <div>
      <Header />

      <DataQuotes id="datasQuotes" />

      <DefaultInformation id="financialPlanning">
        <BoxAnimate direction="right">
          <ImageRepresent
            src={financialPlanning}
            height={600}
            alt="Financial planning"
          />
        </BoxAnimate>
        <BoxAnimate direction="left">
          <ContainerText>
            <TitleInformation>PLANEJAMENTO FINANCEIRO</TitleInformation>
            <DescriptionInformation>
              Quando falamos em planejamento financeiro, logo nos vem a mente o
              ato de se preparar para algo. A ideia é exatamente essa, evitar
              ser pego de surpresa ou desprevenido. Isso nos leva a analisar
              quais serão os passos que vamos tomar para cuidar das finanças de
              nossas casas ou dos nossos próprios negócios.
            </DescriptionInformation>
            <DescriptionInformation>
              Aliás a falta de planejamento financeiro afeta diretamente sua
              qualidade de vida, possivelmente pode levar ao endividamento,
              desperdícios através de juros por atrasos de contas, e até mesmo o
              incapacita de realizar desejos pessoais.
            </DescriptionInformation>
          </ContainerText>
        </BoxAnimate>
        <BoxAnimate direction="right">
          <ContainerText>
            <TitleInformation>
              O QUE É O PLANEJAMENTO FINANCEIRO?
            </TitleInformation>
            <DescriptionInformation>
              É um conjunto de medidas que auxiliam na organização financeira
              pessoal de cada indivíduo. O principal objetivo da prática é,
              portanto, garantir que as pessoas consigam suprir, com segurança e
              tranquilidade, as suas necessidades cotidianas no curto prazo.
              dessa forma planejamento financeiro pode ser uma maneira de manter
              um equilíbrio entre as necessidades presentes e futuras. No
              entanto, para garantir essa estabilidade é necessário ter bastante
              vontade e disciplina financeira.
            </DescriptionInformation>
          </ContainerText>
        </BoxAnimate>
        <BoxAnimate direction="left">
          <ContainerText>
            <TitleInformation>
              DIVISÃO DO PLANEJAMENTO FINANCEIRO:
            </TitleInformation>
            <DescriptionInformation>
              <ul>
                <li>
                  Planejamento a Longo Prazo: tende a ser sistemático,
                  visualizando as necessidades de capital de financiamento.
                </li>
                <li>
                  Planejamento a Curto Prazo: os planos de ação e cronogramas
                  são elaborados para que os resultados sejam alcançados de
                  maneira mais rápida.
                </li>
              </ul>
            </DescriptionInformation>
          </ContainerText>
        </BoxAnimate>
      </DefaultInformation>

      <BoxAnimate direction="down" id="financialTools">
        <DefaultInformation>
          <ContainerText>
            <TitleInformation>FLUXO DE CAIXA</TitleInformation>
            <DescriptionInformation>
              É um tipo de registro que engloba todas as movimentações
              financeiras realizadas dentro de uma organização. Nesse controle,
              é realizado anotações das entradas e saídas de dinheiro.
            </DescriptionInformation>
            <TitleInformation>Vantagens</TitleInformation>
            <DescriptionInformation>
              <ul>
                <li>Identificar quais atividades demandam mais recursos;</li>
                <li>Projetar o futuro financeiro da empresa;</li>
                <li>Agir com prudência na gestão;</li>
                <li>Garantir um norte para o futuro da empresa.</li>
              </ul>
            </DescriptionInformation>
          </ContainerText>
          <ImageRepresent
            src={financialTools}
            height={600}
            alt="Financial planning"
          />
        </DefaultInformation>
      </BoxAnimate>

      <DefaultInformation background={theme.purple}>
        <BoxAnimate
          direction="right"
          style={{
            margin: `auto`,
          }}
        >
          <ImageRepresent
            src={financialDRE}
            height={400}
            alt="Financial planning"
          />
        </BoxAnimate>
        <BoxAnimate direction="left">
          <ContainerText>
            <TitleInformation>DRE</TitleInformation>
            <DescriptionInformation>
              A Demonstração do Resultado do Exercício (DRE) é um mapa da
              situação da empresa, considerando receita, custos, tributos e
              lucro. Basicamente, essa demonstração subtrai do faturamento os
              tributos, os custos da operação e outras despesas, construindo o
              resultado líquido.
            </DescriptionInformation>
            <TitleInformation>Vantagens</TitleInformation>
            <DescriptionInformation>
              <ul>
                <li>
                  Permitir a comparação dos resultados da empresa com outras
                  semelhantes;
                </li>
                <li>
                  Gerar benchmark e indicar se há necessidade de melhorar;
                </li>
                <li>
                  Acompanhar os procedimentos adotados pelos concorrentes;
                </li>
                <li>Criar o seu diferencial de mercado.</li>
              </ul>
            </DescriptionInformation>
          </ContainerText>
        </BoxAnimate>
      </DefaultInformation>

      <DefaultInformation>
        <BoxAnimate direction="right">
          <ContainerText>
            <TitleInformation>BALANÇO PATRIMONIAL</TitleInformation>
            <DescriptionInformation>
              É um tipo de registro que engloba todas as movimentações
              financeiras realizadas dentro de uma organização. Nesse controle,
              é realizado anotações das entradas e saídas de dinheiro. O
              objetivo deste registro é justamente obter as informações
              necessárias para saber qual o momento certo de iniciar uma ação.
            </DescriptionInformation>
            <TitleInformation>Vantagens</TitleInformation>
            <DescriptionInformation>
              <ul>
                <li>Identificar quais atividades demandam mais recursos;</li>
                <li>Projetar o futuro financeiro da empresa;</li>
                <li>Agir com prudência na gestão;</li>
                <li>Garantir um norte para o futuro da empresa.</li>
              </ul>
            </DescriptionInformation>
          </ContainerText>
        </BoxAnimate>
        <BoxAnimate
          direction="left"
          style={{
            margin: `auto`,
          }}
        >
          <ImageRepresent
            src={balanceSheet}
            height={400}
            alt="Financial planning"
          />
        </BoxAnimate>
      </DefaultInformation>

      <BoxAnimate direction="down">
        <ContainerSpace>
          <Accordion
            contentHeader={
              <TitleInformation fontSize={1.75}>
                CONTROLE DE CONTAS À PAGAR E RECEBER
              </TitleInformation>
            }
            contentAccordion={
              <>
                <DescriptionInformation>
                  É um dos processos de maior importância na gestão financeira
                  de uma empresa. Sem o domínio dessa variável, fica difícil
                  saber o que é lucro e o que é apenas faturamento. Sem contar
                  que não seráo possível saber se o dinheiro que existe em caixa
                  está disponível ou já tem compromisso com alguma obrigação da
                  organização.
                </DescriptionInformation>
                <br />
                <TitleInformation>CONCEITOS FUNDAMENTAIS:</TitleInformation>
                <DescriptionInformation>
                  <ul>
                    <li>
                      Contas à pagar: como água, luz e internet e aluguel;
                    </li>
                    <li>
                      Contas à receber: representados pelas contas a prazo.
                    </li>
                  </ul>
                </DescriptionInformation>
                <br />
                <TitleInformation>Vantagens:</TitleInformation>
                <DescriptionInformation>
                  <ul>
                    <li>
                      É importantíssimo para a saúde financeira da empresa;
                    </li>
                    <li>Descobrir oportunidades de melhoria.</li>
                  </ul>
                </DescriptionInformation>
              </>
            }
          />
          <Accordion
            contentHeader={
              <TitleInformation fontSize={1.75}>
                FLUXO DE CAIXA DIÁRIO
              </TitleInformation>
            }
            contentAccordion={
              <>
                <DescriptionInformation>
                  É toda a movimentação financeira que acontece dentro de uma
                  empresa, em determinado período de tempo. O seu controle
                  envolve identificar e documentar todas as saídas e entradas de
                  dinheiro. Como resultado, é possível entender se o negócio
                  estár operando no positivo ou negativo.
                </DescriptionInformation>
                <br />
                <TitleInformation>Vantagens:</TitleInformation>
                <DescriptionInformation>
                  <ul>
                    <li>
                      Auxiliar o empresário estimar os recebimentos e despesas
                      para os próximos períodos;
                    </li>
                    <li>
                      Evitar surpresas e a necessidade de tomar providências
                      antecipadamente;
                    </li>
                    <li>
                      Permitir o conhecimento se os custos futuros poderão ser
                      pagos ou se vai faltar dinheiro.
                    </li>
                  </ul>
                </DescriptionInformation>
              </>
            }
          />
          <Accordion
            contentHeader={
              <TitleInformation fontSize={1.75}>
                CONTROLE BANCÁRIO
              </TitleInformation>
            }
            contentAccordion={
              <>
                <DescriptionInformation>
                  É uma ferramenta de gestão financeira, e suas informações são
                  utilizadas como auxílio nas tomadas de decisões da empresa, em
                  conformidade com o planejado e realizado, alcançando os
                  objetivos propostos pela organização.
                </DescriptionInformation>
                <br />
                <TitleInformation>Vantagens:</TitleInformation>
                <DescriptionInformation>
                  <ul>
                    <li>
                      Permitir cuidar das disponibilidades em curto ou médio
                      prazo;
                    </li>
                    <li>
                      É como um filtro que recebe e efetiva os movimentos
                      financeiros;
                    </li>
                    <li>
                      Confrontar os registros da contabilidade da empresa com os
                    </li>
                    <li>
                      Gerar informações sobre os saldos bancários existentes
                      para tomada de decisão.
                    </li>
                  </ul>
                </DescriptionInformation>
              </>
            }
          />
          <div id="lineCredits">
            <Accordion
              contentHeader={
                <TitleInformation fontSize={1.75}>
                  LINHAS DE CRÉDITO
                </TitleInformation>
              }
              contentAccordion={
                <>
                  <TitleInformation>O QUE É?</TitleInformation>
                  <DescriptionInformation>
                    São recursos disponibilizados por instituições financeiras
                    para pessoas físicas ou empresas, seja na forma empréstimos
                    ou financiamentos.
                  </DescriptionInformation>
                  <br />
                  <TitleInformation>
                    QUAL O TIPO IDEAL PARA O SEU NEGÓCIO?
                  </TitleInformation>
                  <DescriptionInformation>
                    Linhas de crédito para capital de giro: São valores
                    disponibilizados para que o empreendedor consiga atender
                    demandas consideradas mais urgentes, como suas necessidades
                    operacionais e de fluxos de caixa, como pagamento de
                    salários, fornecedores, aluguel e outras contas. A
                    solicitação de linhas de crédito para capital de giro não
                    exige uma finalidade específica, geralmente, esses valores
                    são oferecidos a juros baixos e com prazos mais longos.
                  </DescriptionInformation>
                  <br />
                  <TitleInformation>
                    COMO CONSEGUIR LINHA DE CRÉDITO?
                  </TitleInformation>
                  <DescriptionInformation>
                    É necessário pesquisar os bancos e empresas que realizam o
                    empréstimo para empresas, entender as condições e avaliar os
                    custos com os prazos concedidos. Considere dois pontos
                    importantes: taxa de juros e garantias.
                  </DescriptionInformation>
                  <br />
                  <TitleInformation>
                    INSTITUIÇÕES PARA OBTER LINHA DE CRÉDITO:
                  </TitleInformation>
                  <DescriptionInformation>
                    <ul>
                      <li>
                        BNDES Automático: O financiamento é feito por meio de
                        instituições financeiras que são credenciadas ao Banco
                        Nacional de Desenvolvimento Econômico e Social – BNDES.
                        Ele conta com várias linhas de financiamento com
                        condições diversas e que devem ser conferidas.
                      </li>
                      <li>
                        Cartão BNDES: Permite ao empreendedor adquirir bens
                        móveis para o negócio, com pagamento em até 48 vezes e
                        taxa de juros baixa.
                      </li>
                      <li>
                        Microcrédito: A Caixa Econômica Federal oferece uma
                        linha de crédito que libera determinado valor após a
                        análise do crédito e da capacidade de pagamento da
                        empresa em questão. Por meio do microcrédito, cada
                        empreendedor pode captar até 20.000 reais.
                      </li>
                      <li>
                        Linhas de crédito do Santander: Possui opções de linhas
                        de empréstimo para pequenas e médias empresas de acordo
                        com os objetivos de crescimento do negócio.
                      </li>
                    </ul>
                  </DescriptionInformation>
                </>
              }
            />
          </div>
        </ContainerSpace>
      </BoxAnimate>

      <DefaultInformation>
        <BoxAnimate
          direction="right"
          style={{
            margin: `auto`,
          }}
        >
          <ImageRepresent
            src={creditAnalysis}
            height={400}
            alt="Financial planning"
          />
        </BoxAnimate>
        <BoxAnimate direction="left">
          <ContainerText>
            <TitleInformation>ANÁLISE DE CRÉDITO</TitleInformation>
            <DescriptionInformation>
              O banco ou instituição financeira fazem a análise para garantir
              que você realmente terá condições de pagar o crédito pedido. O que
              depende muito da sua renda e relacionamento com o mercado.
            </DescriptionInformation>
            <DescriptionInformation>
              A partir da avaliação, poderão variar: O valor liberado; a taxa de
              juros; e a quantidade de parcelas.
            </DescriptionInformation>
            <DescriptionInformation>
              O primeiro objetivo da avaliação é garantir que o banco vai
              receber o dinheiro liberado. Outro ponto é saber o número de
              dívidas que você tem com ele. Dessa forma, você não corre o risco
              de comprometer toda sua renda.
            </DescriptionInformation>
          </ContainerText>
        </BoxAnimate>
      </DefaultInformation>

      <BoxAnimate direction="down">
        <DefaultInformation>
          <ContainerText>
            <TitleInformation>COMO FUNCIONA?</TitleInformation>
            <DescriptionInformation>
              Tudo começa quando você precisa de empréstimo, financiamento,
              aumento de limite, até abertura de conta corrente. Ao pedir alguma
              dessas operações de crédito, você passa por uma análise. E, para
              aumentar as chances de aprovação precisa apresentar as seguintes
              informações.
            </DescriptionInformation>
            <DescriptionInformation>
              Dados cadastrais: Aqui são suas informações básicas, como CPF,
              telefone, estado civil, idade, nível de escolaridade, profissão,
              renda, região onde mora;
            </DescriptionInformation>
            <DescriptionInformation>
              Restrições no nome: Com todos os seus dados, a empresa precisará
              saber se você não tem nenhuma pendência com o próprio banco. Além
              disso, também poderá consultar a Serasa ou SPC;
            </DescriptionInformation>
          </ContainerText>
          <ImageRepresent
            src={howItWorks}
            height={400}
            alt="Financial planning"
          />
        </DefaultInformation>
      </BoxAnimate>

      <DefaultInformation>
        <BoxAnimate
          direction="right"
          style={{
            margin: `auto`,
          }}
        >
          <ImageRepresent
            src={howItWorks2}
            height={400}
            alt="Financial planning"
          />
        </BoxAnimate>
        <BoxAnimate direction="left">
          <ContainerText>
            <DescriptionInformation>
              Perfil de crédito: Essa parte serve para o banco ou instituição
              financeira saber como é seu relacionamento com o mercado de
              crédito. Para isso, é possível que eles consultem seu Score de
              Crédito, a pontuação que demonstra a sua saúde financeira;
            </DescriptionInformation>
            <DescriptionInformation>
              Renda: O próximo passo é consultar sua renda. Isso serve para
              saber se a parcela cabe no seu bolso ou o limite do cartão está
              adequado para o salário. Geralmente, o valor de uma despesa dessa
              não pode ultrapassar 30% do seu salário, afinal você tem outras
              contas.
            </DescriptionInformation>
            <DescriptionInformation>
              Tudo certo de acordo com os critérios da instituição financeira,
              você terá seu crédito liberado.
            </DescriptionInformation>
          </ContainerText>
        </BoxAnimate>
      </DefaultInformation>

      <BoxAnimate direction="right">
        <ContainerSpace id="trainingManagers">
          <TitleInformation fontSize={1.75}>
            CAPACITAÇÃO PARA GESTORES
          </TitleInformation>
          <DescriptionInformation>
            O QUE É CAPACITAÇÃO PARA GESTORES?
          </DescriptionInformation>
          <DescriptionInformation>
            Os cursos de finanças para pequenas empresas é uma formação
            obrigatória para todo empreendedor. No início do negócio,
            especialmente, é comum que os empresários assumam a gestão
            financeira da empresa, mas nem sempre estão preparados ecapacitados
            para essa responsabilidade.
          </DescriptionInformation>
          <DescriptionInformation>
            A boa notícia é que existem muitas opções de curso de finanças para
            pequenas empresas na internet. Reunimos os melhores, em sua maioria
            gratuitos.
          </DescriptionInformation>
          <Accordion
            contentHeader={
              <TitleInformation fontSize={1.75}>
                GESTÃO FINANCEIRA - SEBRAE
              </TitleInformation>
            }
            contentAccordion={
              <>
                <DescriptionInformation>
                  Com uma carga horária enxuta, de três horas, o curso é
                  dividido em:
                </DescriptionInformation>
                <br />
                <DescriptionInformation>
                  <ul>
                    <li>Importância da gestão financeira;</li>
                    <li>Fluxo de caixa;</li>
                    <li>Controlando o giro de caixa;</li>
                    <li>Controle e análise de estoques.</li>
                  </ul>
                </DescriptionInformation>
                <br />
                <DescriptionInformation>
                  Ou seja: você vai aprender o essencial para planejar suas
                  finanças e organizar a rotina, desde os conceitos básicos até
                  o monitoramento do fluxo de caixa e controle de estoque. O
                  melhor é que o curso é totalmente gratuito e dá direito ao
                  certificado digital, e pode ser concluído em até 15 dias.
                </DescriptionInformation>
                <br />
                <TitleInformation fontSize={1.5}>Vantagens:</TitleInformation>
                <DescriptionInformation>
                  <ul>
                    <li>
                      É importantíssimo para a saúde financeira da empresa;
                    </li>
                    <li>Descobrir oportunidades de melhoria.</li>
                  </ul>
                </DescriptionInformation>
              </>
            }
          />
          <Accordion
            contentHeader={
              <TitleInformation fontSize={1.75}>
                COMO GERENCIAR AS FINANÇAS - SEBRAE
              </TitleInformation>
            }
            contentAccordion={
              <>
                <DescriptionInformation>
                  O próximo curso também é do Sebrae, mas voltado para
                  Empreendedores que já formalizaram seu negócio e têm
                  conhecimento básico de gestão financeira.
                </DescriptionInformation>
                <br />
                <DescriptionInformation>
                  Seu nome é Como gerenciar as finanças da sua empresa, com
                  carga horária de duas horas e prazo de conclusão de 15 dias.
                </DescriptionInformation>
                <br />
                <DescriptionInformation>
                  Trata-se de um curso online gratuito com quatro módulos:
                </DescriptionInformation>
                <br />
                <DescriptionInformation>
                  <ul>
                    <li>Regime de caixa e regime de competência;</li>
                    <li>
                      Tripé da análise financeira: caixa, lucro e patrimônio.
                    </li>
                  </ul>
                </DescriptionInformation>
              </>
            }
          />
          <Accordion
            contentHeader={
              <TitleInformation fontSize={1.75}>
                CONTABILIDADE EMPRESARIAL - BRADESCO
              </TitleInformation>
            }
            contentAccordion={
              <>
                <DescriptionInformation>
                  É uma ótima oportunidade de aprender ciências contábeis de
                  forma descomplicada e de graça. Ele é indicado para
                  empreendedores, investidores e analistas, trazendo os
                  conceitos básicos da contabilidade e sua aplicação nas
                  empresas.
                </DescriptionInformation>
                <br />
                <DescriptionInformation>
                  Ao todo, são 18 horas de curso divididas em 11 módulos:
                </DescriptionInformation>
                <br />
                <DescriptionInformation>
                  <ul>
                    <li>Introdução;</li>
                    <li>Balanço Patrimonial;</li>
                    <li>Razão;</li>
                    <li>Apresentação do Balanço;</li>
                    <li>Demonstração do Resultado do Exercício;</li>
                    <li>Operações com Mercadorias;</li>
                    <li>Depreciação — Despesa Contábil;</li>
                    <li>Contabilização de Receitas/Despesas.</li>
                  </ul>
                </DescriptionInformation>
              </>
            }
          />
          <Accordion
            contentHeader={
              <TitleInformation fontSize={1.75}>
                ADMINISTRAÇÃO FINANCEIRA ONLINE - FGV
              </TitleInformation>
            }
            contentAccordion={
              <>
                <DescriptionInformation>
                  Seu catálogo é composto por centenas de orientações de todos
                  os níveis para os usuários, inclusive na área de finanças. Com
                  um conteúdo em vídeo e apenas 5 horas de estudo, gestores e
                  empreendedores interessados em um curso de finanças
                  empresariais rápido e conciso podem acessar o material
                  gratuitamente.
                </DescriptionInformation>
                <br />
                <DescriptionInformation>
                  Conteúdo do curso:
                </DescriptionInformation>
                <br />
                <DescriptionInformation>
                  <ul>
                    <li>Administração Financeira.</li>
                    <li>Perspectivas da Administração Financeira.</li>
                    <li>Atividades Financeiras.</li>
                    <li>Escopo de Finanças.</li>
                    <li>Fundamentos de Finanças.</li>
                    <li>Sistema Financeiro.</li>
                  </ul>
                </DescriptionInformation>
              </>
            }
          />
        </ContainerSpace>
      </BoxAnimate>

      <DefaultInformation id="taxation">
        <BoxAnimate direction="right">
          <ContainerText>
            <TitleInformation>TRIBUTAÇÃO</TitleInformation>
            <DescriptionInformation>
              Denomina-se “tributação” a aplicação de tributos pelo governo,
              seja sobre a renda, sobre o consumo ou sobre o patrimônio das
              pessoas físicas ou jurídicas.
            </DescriptionInformation>
            <TitleInformation fontSize={1.75}>
              TIPOS DE TRIBUTAÇÃO:
            </TitleInformation>
            <DescriptionInformation>
              <ul>
                <li>
                  Lucro Real: o imposto de renda é determinado a partir do lucro
                  contábil, apurado pela pessoa jurídica, acrescido de ajustes
                  (positivos e negativos).
                </li>
                <br />
                <li>
                  Lucro Presumido: O Lucro Presumido é um regime tributário em
                  que a empresa faz a apuração simplificada do Imposto de Renda
                  de Pessoa Jurídica (IRPJ) e da Contribuição Social sobre o
                  Lucro Líquido (CSLL). A Receita Federal presume que uma
                  determinada porcentagem do faturamento é o lucro.
                </li>
                <br />
                <li>
                  Simples Nacional: É um regime tributário exclusivo para micro
                  e pequenas empresas, e surgiu com o objetivo de reduzir a
                  burocracia e os custos de pequenos empresários, criando um
                  sistema unificado de recolhimento de tributos.
                </li>
              </ul>
            </DescriptionInformation>
          </ContainerText>
        </BoxAnimate>
        <BoxAnimate
          direction="left"
          style={{
            margin: `auto`,
          }}
        >
          <ImageRepresent src={tax} height={400} alt="Financial planning" />
        </BoxAnimate>
      </DefaultInformation>

      <DefaultInformation>
        <BoxAnimate
          direction="right"
          style={{
            margin: `auto`,
          }}
        >
          <ImageRepresent src={diet} height={400} alt="Financial planning" />
        </BoxAnimate>
        <BoxAnimate direction="left">
          <ContainerText>
            <TitleInformation>
              QUAL REGIME SE MOSTRA MAIS VANTAJOSO?
            </TitleInformation>
            <DescriptionInformation>
              <ul>
                <li>
                  SIMPLES NACIONAL: Uma empresa Simples Nacional tem
                  contabilidade simplificada e menos declarações em relação aos
                  outros regimes, facilitando a gestão e rotina dos
                  empreendedores. E mais: quem opta por esse enquadramento ainda
                  pode receber benefícios em processos de licitação e na
                  exportação de produtos. Apenas Microempresas e Empresas de
                  Pequeno Porte podem optar pelo Simples Nacional:
                </li>
                <br />
                <li>
                  Microempresa (ME): até 360 mil reais de faturamento nos
                  últimos 12 meses.
                </li>
                <br />
                <li>
                  Empresa de Pequeno Porte (EPP): de 360 mil reais a 4,8 milhões
                  de reais de faturamento nos últimos 12 meses.Além do limite de
                  faturamento, até 4,8 milhões de reais anuais, existem outras
                  condições que precisam ser atendidas para que uma empresa
                  possa ser enquadrada neste regime tributário.
                </li>
              </ul>
            </DescriptionInformation>
          </ContainerText>
        </BoxAnimate>
      </DefaultInformation>

      <DefaultInformation>
        <BoxAnimate direction="right">
          <ContainerText>
            <TitleInformation>
              SOLICITAÇÃO DO SIMPLES NACIONAL:
            </TitleInformation>
            <DescriptionInformation>
              Quem está abrindo um novo negócio tem um prazo para realizar a
              solicitação: 30 dias após a aprovação da inscrição municipal ou
              estadual, desde que não ultrapasse 180 dias da abertura do CNPJ.
              (MUDANÇA NA LEI EM 05/08/2020).
            </DescriptionInformation>
            <DescriptionInformation>
              Quem já tem o seu negócio e quer solicitar o enquadramento pode
              realizar a opção sempre em janeiro de cada ano.
            </DescriptionInformation>
          </ContainerText>
        </BoxAnimate>
        <BoxAnimate
          direction="left"
          style={{
            margin: `auto`,
          }}
        >
          <ImageRepresent src={request} height={400} alt="Financial planning" />
        </BoxAnimate>
      </DefaultInformation>

      <BoxAnimate direction="down">
        <ContainerSpace id="faq">
          <TitleInformation>Perguntas Frequentes</TitleInformation>
          <Accordion
            contentHeader={
              <TitleInformation fontSize={1.75}>
                É possível fazer a análise de crédito online?
              </TitleInformation>
            }
            contentAccordion={
              <>
                <DescriptionInformation>
                  Sim! Tem como você solicitar seu crédito online e passar por
                  esse procedimento sem ter que levar papelada para o banco.
                </DescriptionInformation>
              </>
            }
          />
          <Accordion
            contentHeader={
              <TitleInformation fontSize={1.75}>
                Como funciona análise de crédito para pessoa jurídica?
              </TitleInformation>
            }
            contentAccordion={
              <>
                <DescriptionInformation>
                  Dados cadastrais: Informações sobre seu CNPJ, se está tudo
                  regularizado, sem restrições, nenhum histórico de falência;
                </DescriptionInformation>
                <DescriptionInformation>
                  Receita: Será analisada a receita recorrente e o valor do
                  lucro líquido para saber se você consegue arcar com as
                  prestações;
                </DescriptionInformation>
                <DescriptionInformation>
                  Perfil de crédito da empresa: Sim! Existe um Score de crédito
                  sobre a sua empresa também.
                </DescriptionInformation>
                <DescriptionInformation>
                  Essa pontuação mostrará seu relacionamento com mercado.
                </DescriptionInformation>
              </>
            }
          />
          <Accordion
            contentHeader={
              <TitleInformation fontSize={1.75}>
                Como se inscrever no Simples Nacional?
              </TitleInformation>
            }
            contentAccordion={
              <>
                <DescriptionInformation>
                  O processo é feito todo pela internet, sem precisar sair de
                  casa! Basta acessar o site do Simples Nacional e seguir os
                  passos:
                </DescriptionInformation>
                <DescriptionInformation>
                  Simples – Serviços &gt; Opção &gt; Solicitação de Opção pelo
                  Simples Nacional.
                </DescriptionInformation>
              </>
            }
          />
          <Accordion
            contentHeader={
              <TitleInformation fontSize={1.75}>
                Qual a diferença entre controle de caixa e fluxo de caixa?
              </TitleInformation>
            }
            contentAccordion={
              <>
                <DescriptionInformation>
                  Controle de caixa é o registro das entradas e saídas diárias
                  no caixa da empresa com objetivo de gerar um histórico
                  demovimentações para o monitoramento e análises futuras.
                </DescriptionInformation>
                <DescriptionInformation>
                  É a partir do controle de caixa que você consegue mensurar o
                  fluxo de caixa. Sem o registro diário das entradas e saídas,
                  dificilmente tem como saber quanto dinheiro tem para cobrir as
                  despesas rotineiras.
                </DescriptionInformation>
              </>
            }
          />
        </ContainerSpace>
      </BoxAnimate>

      <Footer />
    </div>
  );
}
