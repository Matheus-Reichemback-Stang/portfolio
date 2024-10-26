import * as S from './styles';

import Avatar from '../../components/Avatar';
import Titulo from '../../components/Titulo';
import Paragrafo from '../../components/Paragrafo';

type Props = {
  trocaTema: () => void;
};

const Sidebar = (props: Props) => {
  return (
    <aside>
      <S.SidebarContainer>
        <Avatar />
        <Titulo fontSize={24}>Matheus Reichemback Stang</Titulo>
        <Paragrafo tipo="secundario" fontSize={16}>
          matheus-reichemback-stang
        </Paragrafo>
        <S.Descricao tipo="principal" fontSize={14}>
          <>
            Desenvolvedor <br />
            Full-Stack Java
          </>
        </S.Descricao>
        <ul>
          <S.LinkContainer background="github">
            <a
              title="Visitar perfil no GitHub"
              href="https://github.com/Matheus-Reichemback-Stang"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://my-project-images.netlify.app/projects/portfolio/images/svg/github.svg"
                alt="GitHub"
              />
              GitHub
            </a>
          </S.LinkContainer>
          <S.LinkContainer background="linkedin">
            <a
              title="Visitar perfil no LinkedIn"
              href="https://www.linkedin.com/in/matheus-reichemback-stang/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://my-project-images.netlify.app/projects/portfolio/images/svg/linkedin.svg"
                alt="LinkedIn"
              />
              LinkedIn
            </a>
          </S.LinkContainer>
        </ul>
        <S.BotaoTema onClick={props.trocaTema}>Trocar Tema</S.BotaoTema>
      </S.SidebarContainer>
    </aside>
  );
};

export default Sidebar;
