import Garagem from "./Componentes/Garagem/Garagem";
import "./styles.css";
import { GlobalStyle } from "./GlobalStyle";

export default function App() {
  const nome = "Célio";
  function apresentaGaragem() {
    alert(`Boas vindas à garagem de ${nome}`);
  }

  return (
    <div className="App">
      <GlobalStyle />
      <Garagem nome={nome} mensagemAprentacao={apresentaGaragem} />
    </div>
  );
}
