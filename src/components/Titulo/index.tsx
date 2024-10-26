// Foi preciso mudar o nome pois o componente do Styled-Components tem
// o mesmo nome do Componente do React
import { Titulo as TituloEstilo } from './styles';

// Para criar um componente que aceita coisas dentro dele
// é preciso usar o children
export type Props = {
  children: string;
  fontSize?: number;
};

const Titulo = (props: Props) => (
  <TituloEstilo fontSize={props.fontSize}>{props.children}</TituloEstilo>
);

export default Titulo;
