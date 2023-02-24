import { Container, MainInformations, Number, Name, Description, BottomBar, Presentation, ScrollIcon } from "./styles";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

export const Mission = () => {
  return (
    <Container id="mission">
      <MainInformations>
        <Presentation>
          <Name>The Brazilian Trail Blazers</Name>

          <Description>
            Nós ajudamos a construir o futuro, capacitando jovens através
            da robótica de maneira acessível para todos.
          </Description>
        </Presentation>


        <BottomBar>
          <ScrollIcon><BsFillArrowDownCircleFill/></ScrollIcon>
        </BottomBar>
      </MainInformations>


    </Container>
  );
}
