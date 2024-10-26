import { useState } from 'react';

// Permite aplicar temas no projeto, com ele é possível acessar o "props.theme.NomeDaPropriedade/cor" em
// qualquer arquivo que utilize o styled components, no entanto o ThemeProvider precisa cobrir todo o conteúdo
import { ThemeProvider } from 'styled-components';
import EstiloGlobal, { Container } from './styles';
import temaLight from './themes/light';
import temaDark from './themes/dark';

import Sidebar from './containers/Sidebar';
import Sobre from './containers/Sobre';
import Projetos from './containers/Projetos';

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false);

  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark);
  }

  return (
    // Ele espera um valor da propriedade theme
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
