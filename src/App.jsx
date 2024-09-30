import { useState } from 'react'
import Topo from './componentes/topo.jsx';
import Casa from './componentes/casa.jsx';
import Desejo from './componentes/desejos.jsx';
import Carrinho from './componentes/carrinho.jsx';
import Perfil from './componentes/perfil.jsx';
import './css/App.css';
import Footer from './componentes/footer.jsx';

function App() {
  const [secaoAtual, setSecaoAtual] = useState('home');

    const cliqueSecao = () => {
        setSecaoAtual('home');
    };

    const mudarParaPerfil = () => {
        setSecaoAtual('perfil');
    };

    const mudarParaDesejos = () => {
        setSecaoAtual('desejos');
    };

    const mudarParaCarrinho = () => {
        setSecaoAtual('carrinho');
    };


  return (
    <>
      <header>
       <Topo
        cliqueSecao={cliqueSecao}
        mudarParaDesejos={mudarParaDesejos}
        mudarParaCarrinho={mudarParaCarrinho}
        mudarParaPerfil={mudarParaPerfil}
       />
       </header>
       <div className='main'>
          {secaoAtual === 'home' && <Casa />}
          {secaoAtual === 'perfil' && <Perfil />}
          {secaoAtual === 'desejos' && <Desejo cliqueSecao={cliqueSecao}/>}
          {secaoAtual === 'carrinho' && <Carrinho cliqueSecao={cliqueSecao}/>}

       </div>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
