import { Container, Description, MainInformations, Presentation, Title } from "./styles";

export const First = () => {
  return (
    <Container id="first">
      <MainInformations>
        <Presentation>
          <Title>FIRST Robotics Competition (FRC)</Title>
          <Description> 
            A FIRST (<em>For Inspiration and Recognition of Science and Technology</em>)
            é uma organização criada em 1989, 
            com o intuito de estimular nos jovens o interesse por ciência e tecnologia 
            através de competições de robótica. Nós participamos da modalidade de FRC, 
            por isso, temos o objetivo de projetar, programar e construir em 6 semanas um 
            robô para executar tarefas específicas a cada ano.
          </Description>
        </Presentation>
      </MainInformations>
    </Container>
  );
}