import Carro from "../Carro/Carro";
import { Botao, GaragemContainer, GaragemSection } from "./style";
function Garagem(props) {
  return (
    <GaragemContainer>
      <h1>Garagem do {props.nome}</h1>
      <Botao onClick={props.mensagemAprentacao}>Mensagem</Botao>

      <GaragemSection>
        <Carro
          adicionadoPor={props.nome}
          cor={"Vermelho"}
          ano={2022}
          flex={"true"}
        />
        <Carro
          adicionadoPor={props.nome}
          cor={"Verde"}
          ano={2020}
          flex={"false"}
        />
        <Carro
          adicionadoPor={props.nome}
          cor={"Amarelo"}
          ano={2009}
          flex={"false"}
        />
        <Carro
          adicionadoPor={props.nome}
          cor={"Rosa"}
          ano={2022}
          flex={"true"}
        />
      </GaragemSection>
    </GaragemContainer>
  );
}

export default Garagem;
