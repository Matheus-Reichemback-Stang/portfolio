// Foi preciso mudar o nome pois o componente do Styled-Components tem
// o mesmo nome do Componente do React
import { P } from './styles';

// Para criar um componente que aceita coisas dentro dele
// é preciso usar o children
export type Props = {
  children: string | JSX.Element;
  // Limitando os valores válidos
  tipo?: 'principal' | 'secundario';
  fontSize?: number;
};

// Definindo a valor padrão na propriedade tipo
const Paragrafo = ({ children, tipo = 'principal', fontSize }: Props) => (
  <P fontSize={fontSize} tipo={tipo}>
    {children}
  </P>
);

export default Paragrafo;
