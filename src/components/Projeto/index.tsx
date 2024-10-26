import { Card, LinkBotao } from './styles';

import Titulo from '../Titulo';
import Paragrafo from '../Paragrafo';

type Props = {
  title: string;
  description: string;
  repositoryLink: string;
  technologies: string;
  websiteLink?: string;
};

const Projeto = ({
  title,
  description,
  repositoryLink,
  websiteLink,
  technologies
}: Props) => {
  return (
    <Card>
      <div>
        <Titulo>{title}</Titulo>
        <Paragrafo tipo="secundario">{description}</Paragrafo>
        <Paragrafo>
          <>
            <b>Tecnologias:</b> <br />
            {technologies}
          </>
        </Paragrafo>
      </div>
      <div className="actions">
        <LinkBotao
          title="Visitar repositório"
          href={repositoryLink}
          target="_blank"
        >
          Repositório
        </LinkBotao>
        {websiteLink !== undefined && (
          <LinkBotao title="Visitar site" href={websiteLink} target="_blank">
            Site
          </LinkBotao>
        )}
      </div>
    </Card>
  );
};

export default Projeto;
