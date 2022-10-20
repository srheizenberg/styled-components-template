import { CardUl, CardContanier } from "./style";

function Carro(props) {
  console.log(props);
  return (
    <CardContanier>
      <h2>Volksvagem</h2>
      <CardUl>
        <li>Cor: {props.cor}</li>
        <li>Ano: {props.ano}</li>
        <li>Flex: {props.flex}</li>
        <li>adicionadoPor: {props.adicionadoPor}</li>
      </CardUl>
    </CardContanier>
  );
}

export default Carro;
