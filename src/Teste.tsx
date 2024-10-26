import styled from 'styled-components';

// Para criar atributos que não existem em uma tag, é
// necessário que seja criado um type e aplicado ao
// componente estilizado pelo Styled-Components
type ButtonType = {
  principal: boolean;
  fontSize?: string;
};

// Criando componente e aplicando a tipagem
const Botao = styled.button<ButtonType>`
  /* Definindo uma condição para determinado código CSS */
  /* Com o props é possível resgatar os atributos/propriedades dos elementos */
  background-color: ${(props) => (props.principal ? 'green' : 'red')};
  font-size: ${(props) => props.fontSize || '16px'};
`;

// Criando um componente a partir de outro componente
const BotaoPerigo = styled(Botao)`
  background-color: yellow;
  font-size: 24px;

  span {
    text-decoration: line-through;
  }
`;

function Teste() {
  return (
    <div>
      {/* Criando propriedades/Atributos no Botão */}
      <Botao fontSize="18px" principal>
        Enviar
      </Botao>
      <Botao principal={false}>Cancelar</Botao>
      {/* Houve a herança de propriedades, no entanto devido a sua especificidade no CSS ser maior, ele ficou amarelo */}
      {/* Com o atributo as é possível definir uma tag como qualquer outra do HTML */}
      {/* embora seja um botão, devido ao "as" ele sera renderizado como uma tag A */}
      <BotaoPerigo as="a" principal>
        {/* É possível estilizar componentes internos, assim como o SASS */}
        <span>Não clique aqui</span>
      </BotaoPerigo>
    </div>
  );
}

export default Teste;
