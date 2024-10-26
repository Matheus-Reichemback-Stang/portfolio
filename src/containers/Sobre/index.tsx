/* eslint-disable jsx-a11y/alt-text */
import Titulo from '../../components/Titulo';
import Paragrafo from '../../components/Paragrafo';
import { GithubSecao } from './styles';

const Sobre = () => {
  return (
    <section>
      <Titulo fontSize={16}>Sobre mim</Titulo>
      <Paragrafo tipo="principal">
        <>
          Comecei a estudar programação em 2023 na instituição EBAC - Escola
          Britânica de Artes Criativas e Tecnologia. No decorrer desse caminho,
          obtive diversos conhecimentos sobre essa área e desenvolvi diversas
          competências, tanto no Front-end quanto no Back-end.
          <br />
          <br />
          No Front-end, já desenvolvi desde landing pages até sites mais
          complexos, como um e-commerce focado na venda de jogos. Com essas
          experiências, hoje consigo produzir projetos mais robustos e de
          qualidade. Além disso, já produzi códigos para testes unitários,
          integrados e E2E (end-to-end). Para fazer tais testes, utilizei
          tecnologias como Jest, React Testing Library e Cypress.
          <br />
          <br />
          No Back-end, comecei desenvolvendo sistemas em memória e, conforme fui
          evoluindo nos meus estudos, hoje, consigo criar sistemas ligados a
          bancos SQL e NoSQL. Além disso, possuo conhecimentos sobre tópicos
          relevantes na programação, como TDD (Test Driven Development), Design
          Patterns e arquitetura em Microsserviços.
          <br />
          <br />
          <i>
            <b>OBS:</b> Cada projeto listado contêm uma breve descrição sobre
            ele, mas no repositório de cada projeto possui uma descrição mais
            explicativa sobre o projeto em sí.
          </i>
        </>
      </Paragrafo>
      <GithubSecao>
        <img src="https://github-readme-stats.vercel.app/api?username=matheus-reichemback-stang&show_icons=true&theme=dracula&include_all_commits=true&count_private=false" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=matheus-reichemback-stang&layout=compact&langs_count=7&theme=dracula" />
      </GithubSecao>
    </section>
  );
};

export default Sobre;
