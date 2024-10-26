import styled from 'styled-components';
import { P } from '../../components/Paragrafo/styles';

type LinkContainerProps = {
  background: 'github' | 'linkedin';
};

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
  text-align: center;
`;

export const BotaoTema = styled.button`
  border-radius: 12px;
  border: none;
  width: 100%;
  padding: 8px;
  color: ${(props) => props.theme.corDeFundo};
  font-size: 12px;
  font-weight: bold;
  background-color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;
`;

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`;

export const LinkContainer = styled.li<LinkContainerProps>`
  margin-bottom: 8px;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    color: white;
    border-radius: 8px;
    background-color: ${(props) =>
      props.background == 'github' ? '#212529' : '#0a58ca'};
    padding: 8px;
    transition: ease all 0.3s;
    justify-content: center;

    &:hover {
      opacity: 75%;
    }
  }
  img {
    height: 24px;
    margin-right: 8px;
  }

  &:last-child {
    margin-bottom: 32px;
  }
`;
