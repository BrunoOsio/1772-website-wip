import { colors } from "@/shared/global/colors";
import { screen, screenWidth } from "@/shared/global/responsivity";
import styled from "styled-components";
import { Icon } from "../icon/Icon";

const gradient = `linear-gradient(180deg, rgba(0,2,48,0.865) 67%, rgba(39,54,163,0.781) 100%)`;
const picture = `url(chairmans.jpg)`
const backgroundImage = `${gradient}, ${picture}`;

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  background-image: ${backgroundImage};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center; 
`;

export const MainInformations = styled.article`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;

export const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  align-content: center;
  justify-content: center;
  padding: 150px;
  gap: 20px;

  @media(${screenWidth(1319)}) {
    width: 80%;
  }

  @media(${screen.lgMd}) {
    padding: 70px;
  }

  @media(${screen.md}) {
    gap: 10px;
  }

  @media(${screen.sm}) {
    width: 100%;
    padding: 50px;
    align-items: center;
  }
`;

export const Number = styled.span`
  font-size: 2rem;

  color: ${colors.white};

  @media(${screenWidth(1319)}) {
    font-size: 1.6rem
  }

  @media(${screen.lgMd}) {
    font-size: 1.3rem
  }

  @media(${screen.sm}) {
    font-size: 1rem
  }
`;

export const Name = styled.span`
  font-size: 4.5rem;
  font-family: 'Roboto', sans-serif;
  color: ${colors.white};
  font-weight: 900;
  padding-right: 30%;
  user-select: none;
  -webkit-user-drag: none;

  background: linear-gradient(to right, ${colors.white} 39%, #f6e549 50%, #a8d44d);
  background-size: 200%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: 0.5s ease;

  &:hover {
    background-position: -90%;
  }

  @media(${screenWidth(1778)}) {
    padding-right: 15%;

    background-size: 210%;
  }

  @media(${screenWidth(1554)}) {
    padding-right: 0%;

    background-size: 230%;
  }

  @media(${screenWidth(1437)}) {
    font-size: 4rem;
  }

  @media(${screenWidth(1319)}) {
    font-size: 3.5rem
  }

  @media(${screen.lgMd}) {
    font-size: 3rem
  }

  @media(${screen.sm}) {
    font-size: 2rem;
    text-align: center;
    padding-right: 0px;

    background-size: 240%;

    &:hover {
      background-position: -90%;
    }
  }
`;
export const Description = styled.span`
  font-size: 1.3rem;
  color: ${colors.white};
  font-style: italic;

  @media(${screenWidth(1319)}) {
    font-size: 1rem;
  }

  @media(${screen.lgMd}) {
    font-size: 0.8rem;
  }

  @media(${screen.sm}) {
    font-size: 0.7rem;
    text-align: justify;
  }
`;

export const BottomBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  transform: translateX(0%);
  display: flex;
  justify-content: center;

  @media(${screenWidth(1319)}) {
    height: 70px;
  }

  @media(${screen.lgMd}) {
    height: 50px;
  }

  @media(${screen.md}) {
    height: 40px;
  }

  @media(${screen.sm}) {
    height: 30px;
  }
`;

export const ScrollIcon = styled(Icon)`
  color: ${colors.transparentWhite};
  font-size: 2rem;
  animation: MoveUpDown 2s linear infinite;
  animation-timing-function: ease;
  position: relative;

  @keyframes MoveUpDown {
    0%, 100% {
      bottom: 0;
    }

    50% {
      bottom: 10px;
    }
  }
  @media(${screenWidth(1319)}) {
    font-size: 1.7rem;
  }

  @media(${screen.lgMd}) {
    font-size: 1.4rem;
  }

  @media(${screen.md}) {
    font-size: 1.2rem;
  }

  @media(${screen.sm}) {
    font-size: 1rem;
  }
`;

