import styled from "styled-components";

export const Botao = styled.button`
  border-bottom-color: red;
  border: 2px solid;
  border-radius: 20px;
  padding: 10px;
`;

export const GaragemContainer = styled.main`
  background-color: blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const GaragemSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  list-style: none;
`;
