import { Container, Item, Left, Logo, Right } from "./styles";

export const Navbar = () => {
  return (
    <Container >
      <Left>
        <Logo src="logo.png"/>
      </Left>

      <Right>
        <Item href="#mission">MISSÃO</Item>
        <Item href="#teamDescription">QUEM SOMOS</Item>
        <Item href="#first">A FIRST</Item>
        <Item>O QUE FAZEMOS</Item>
        <Item>DADOS</Item>
        <Item>VALORES</Item>
        <Item>DEPOIMENTOS</Item>
        <Item>PATROCINADORES</Item>
      </Right>
    </Container>
  );
}