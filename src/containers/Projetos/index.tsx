import Projeto from '../../components/Projeto';
import Titulo from '../../components/Titulo';
import { Lista } from './styles';

const Projetos = () => {
  return (
    <section>
      <Titulo fontSize={16}>Projetos</Titulo>
      <Lista>
        {/* <li>
          <Projeto title='' description='' repositoryLink='' websiteLink='' />
        </li> */}
        <li>
          <Projeto
            title="EPLAY"
            description="E-commerce de uma loja focada na venda de jogos."
            technologies="React | Styled Components | Redux | React Router DOM"
            repositoryLink="https://github.com/Matheus-Reichemback-Stang/EBAC-eplay/tree/complete"
            websiteLink="https://zkd-eplay.netlify.app/"
          />
        </li>
        <li>
          <Projeto
            title="Microsserviços"
            description="Três microsserviços que usam métodos HTTP fazendo um CRUD(Create, Read, Uptade, Delete)."
            technologies="Spring Boot | Maven | MongoDB | Spring Data | Java"
            repositoryLink="https://github.com/Matheus-Reichemback-Stang/microsservicos"
          />
        </li>
        <li>
          <Projeto
            title="To Do List"
            description="Lista de tarefas que possuem um filtro que busca por tipo de prioridade e status."
            technologies="React | Styled Components | Redux | React Router DOM"
            repositoryLink="https://github.com/Matheus-Reichemback-Stang/EBAC-todo_list/tree/complete"
            websiteLink="https://zkd-to-do-list.netlify.app/"
          />
        </li>
        <li>
          <Projeto
            title="Testes E2E(End to End) - Cypress"
            description="Utilizado a ferramenta Cypress para fazer testes E2E(ponta a ponta) em um site fictício."
            technologies="Cypress"
            repositoryLink="https://github.com/Matheus-Reichemback-Stang/cypress"
          />
        </li>
        <li>
          <Projeto
            title="Consultador de GitHub"
            description="Consegue consultar qualquer usuário do GitHub a partir de seu nome e trazer todos os repositórios públicos do usuário."
            technologies="React | CSS Modules | HTML | Vite"
            repositoryLink="https://github.com/Matheus-Reichemback-Stang/EBAC-consultador_de_github"
            websiteLink="https://zkd-consultador-de-github.netlify.app/"
          />
        </li>
        <li>
          <Projeto
            title="Consultador de CEP"
            description="Consegue consultar qualquer CEP do Brasil e retornar os dados referentes ao CEP."
            technologies="SASS | Gulp | JavaScript | HTML | CSS"
            repositoryLink="https://github.com/Matheus-Reichemback-Stang/consultador_de_cep"
            websiteLink="https://zkd-consultador-de-cep.netlify.app/"
          />
        </li>
        <li>
          <Projeto
            title="Meu Aniversário"
            description="Timer que calcula quantos dias, horas, minutos e segundos faltam até o meu aniversário."
            technologies="SASS | Gulp | JavaScript | HTML | CSS"
            repositoryLink="https://github.com/Matheus-Reichemback-Stang/meu_aniversario"
            websiteLink="https://matheus-reichemback-stang.netlify.app/"
          />
        </li>
        <li>
          <Projeto
            title="Clone Disney+"
            description="Clone da landing page da Disney+."
            technologies="SASS | Gulp | JavaScript | HTML | CSS"
            repositoryLink="https://github.com/Matheus-Reichemback-Stang/EBAC-clone_disneyplus"
            websiteLink="https://zkd-clone-disneyplus.netlify.app/"
          />
        </li>
        <li>
          <Projeto
            title="Calculadora Aritmética"
            description="Consegue resolver operações de adição, subtração, divisão e multiplicação."
            technologies="SASS | Gulp | JavaScript | HTML | CSS"
            repositoryLink="https://github.com/Matheus-Reichemback-Stang/calculadora"
            websiteLink="https://zkd-calculadora.netlify.app/"
          />
        </li>

        <li>
          <Projeto
            title="EBAC - Tech Talks"
            description="Timer de um evento de tecnologia fictício, contendo 4 seções relacionadas ao assunto: Front-end, UI/UX, Data Science e Back-end."
            technologies="SASS | Parcel | JavaScript | HTML | CSS"
            repositoryLink="https://github.com/Matheus-Reichemback-Stang/EBAC-evento_ficticio"
            websiteLink="https://zkd-evento-ficticio.netlify.app/"
          />
        </li>

        <li>
          <Projeto
            title="Sorteador de números"
            description="Basta você entrar no site e definir um número máximo que pode ser sortido e clicar em sortear número."
            technologies="SASS | Gulp | JavaScript | HTML | CSS"
            repositoryLink="https://github.com/Matheus-Reichemback-Stang/EBAC-sorteador_de_numeros"
            websiteLink="https://zkd-sorteador-de-numeros.netlify.app/"
          />
        </li>

        <li>
          <Projeto
            title="First Comment"
            description="Mensagem de e-mail que a newsletter First Comment enviaria aos seus assinantes."
            technologies="HTML | CSS"
            repositoryLink="https://github.com/Matheus-Reichemback-Stang/first_comment"
            websiteLink="https://matheus-reichemback-stang.github.io/first_comment/"
          />
        </li>
        <li>
          <Projeto
            title="Calculadora de médias"
            description="Calcula a média de acordo com a quantidade de tarefas e suas notas."
            technologies="JavaScript | HTML | CSS"
            repositoryLink="https://github.com/Matheus-Reichemback-Stang/EBAC-calculadora_de_medias"
            websiteLink="https://matheus-reichemback-stang.github.io/EBAC-calculadora_de_medias/"
          />
        </li>
        <li>
          <Projeto
            title="Formulário - Bootstrap"
            description="Formulário que foi feito com Bootstrap como o próprio nome já diz."
            technologies="Bootstrap | HTML | CSS"
            repositoryLink="https://github.com/Matheus-Reichemback-Stang/formulario_bootstrap"
            websiteLink="https://matheus-reichemback-stang.github.io/formulario_bootstrap/"
          />
        </li>
        <li>
          <Projeto
            title="ArtStore"
            description="Loja fictícia de arte, contendo 4 seções: Sobre a loja, Personalizações, Produtos e Fale conosco."
            technologies="Bootstrap | HTML | CSS"
            repositoryLink="https://github.com/Matheus-Reichemback-Stang/artstore"
            websiteLink="https://matheus-reichemback-stang.github.io/artstore/"
          />
        </li>
        <li>
          <Projeto
            title="Restaurante"
            description="Loja fictícia de um restaurante, contendo 4 seções: Sobre o restaurante, Eventos, Nosso cardápio e Fale conosco."
            technologies="Bootstrap | HTML | CSS"
            repositoryLink="https://github.com/Matheus-Reichemback-Stang/EBAC-restaurante"
            websiteLink="https://matheus-reichemback-stang.github.io/EBAC-restaurante/"
          />
        </li>
        <li>
          <Projeto
            title="Formulário com Validação"
            description="Formulário com validação feita em JavaScript."
            technologies="JavaScript | HTML | CSS"
            repositoryLink="https://github.com/Matheus-Reichemback-Stang/formulario_com_validacao"
            websiteLink="https://matheus-reichemback-stang.github.io/formulario_com_validacao/"
          />
        </li>
        <li>
          <Projeto
            title="CriptoMaster"
            description="Landing Page de uma loja que vende e compra criptomoedas."
            technologies="HTML | CSS"
            repositoryLink="https://github.com/Matheus-Reichemback-Stang/criptomaster"
            websiteLink="https://matheus-reichemback-stang.github.io/criptomaster/"
          />
        </li>
      </Lista>
    </section>
  );
};

export default Projetos;
