import styled from 'styled-components';
import { P } from '../Paragrafo/styles';

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .actions {
    display: flex;
    align-items: flex-end;
  }

  ${P} {
    &:last-child {
      margin-top: 8px;
    }
  }
`;

export const LinkBotao = styled.a`
  color: ${(props) => props.theme.corDeFundo};
  font-size: 14px;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 16px;
  margin-right: 8px;
`;
