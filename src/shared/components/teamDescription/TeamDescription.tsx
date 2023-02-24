import { Container, Description, Left, Note, Picture, Right, Title } from "./styles";

export const TeamDescription = () => {
  return (
    <Container id="teamDescription">
      <Left>
        <Title>Quem somos?</Title>
        <Description>
          Nós somos uma equipe de robótica, em atividade desde 2005, que busca estimular alunos de escolas públicas a ampliarem seus conhecimentos
          em STEAM (Ciência, Tecnologia, Engenharia, Arte e Matemática)
          por meio de atividades práticas e teóricas. Para isso, nós participamos
          anualmente de uma competição da organização FIRST.
        </Description>

        <Note>Fomos a primeira equipe da América Latina a ser composta apenas de estudantes de escolas públicas!</Note>
      </Left>
      <Right>
        <Picture src="teamDescription.svg"></Picture>
      </Right>
    </Container>
  );
}