import { colors } from "@/shared/global/colors";
import { screen, screenWidth } from "@/shared/global/responsivity";
import styled from "styled-components";

const gradient = `linear-gradient(180deg, rgba(0,2,48,0.865) 67%, rgba(39,54,163,0.781) 100%)`;
const picture = `url(first.jpg)`
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
  align-items: flex-end;
`;

export const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  align-content: center;
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
    width: 100%;
  }

  @media(${screen.sm}) {
    width: 100%;
    padding: 50px;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-family: 'Roboto', sans-serif;
  color: ${colors.white};
  font-weight: 900;
  text-align: right;

  @media(${screenWidth(1625)}) {
    font-size: 3.2rem;
  } 

  @media(${screenWidth(1479)}) {
    font-size: 2.9rem;
  } 

  @media(${screen.lg}) {
    font-size: 2.5rem;
  }

  @media(${screen.lgMd}) {
    font-size: 2.0rem;
  }

  @media(${screen.md}) {
    font-size: 1.7rem;
  }

  @media(${screen.sm}) {
    font-size: 1.4rem;
  }

  @media(${screen.xs}) {
    font-size: 1.2rem;
  }
`;

export const Description = styled.p`
  font-size: 1.3rem;
  line-height: 40px;
  color: ${colors.white};
  text-align: right;

  @media(${screenWidth(1479)}) {
    font-size: 1.2rem;
  } 

  @media(${screen.md}) {
    font-size: 0.9rem;
    text-align: justify;
    line-height: 28px;
  }

  @media(${screen.sm}) {
    /* font-size: 1.6rem; */
  }

  @media(${screen.xs}) {
    /* font-size: 1.2rem; */
  }
`;