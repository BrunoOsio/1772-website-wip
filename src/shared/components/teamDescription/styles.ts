import { colors } from "@/shared/global/colors";
import { screen, screenWidth } from "@/shared/global/responsivity";
import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 100px 150px;

  @media(${screen.lg}) {
    padding: 100px 100px;
  } 

  @media(${screen.md}) {
    flex-direction: column;
    padding: 100px 75px;

  }

  @media(${screen.sm}) {
    padding: 100px 20px;
  }

  @media(${screen.xs}) {
    padding: 80px 20px;
  }
`;

export const Left = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  gap: 30px;

  @media(${screen.md}) {
    width: 100%;
  }

  @media(${screen.sm}) {
    gap: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-family: 'Roboto', sans-serif;
  color: ${colors.blue};
  font-weight: 900;

  @media(${screenWidth(1479)}) {
    font-size: 3.2rem;
  } 

  @media(${screen.lg}) {
    font-size: 2.8rem;
  }

  @media(${screen.lgMd}) {
    font-size: 2.4rem;
  }

  @media(${screen.md}) {
    font-size: 2.0rem;
  }

  @media(${screen.sm}) {
    font-size: 1.6rem;
  }

  @media(${screen.xs}) {
    font-size: 1.2rem;
  }
`;

export const Description = styled.p`
  font-size: 1.3rem;
  line-height: 32px;
  text-align: justify;
  margin-right: 100px;
  color: ${colors.text};

  @media(${screenWidth(1479)}) {
    font-size: 1.2rem;
  } 

  @media(${screen.lg}) {
    font-size: 1rem;
    line-height: 28px;
    margin-right: 60px;
  }

  @media(${screen.md}) {
    margin-right: 0px;
  }

  @media(${screen.sm}) {
    font-size: 0.9rem;
  }

  @media(${screen.xs}) {
    font-size: 0.8rem;
  }
`;

export const Note = styled(Description)`
  background-color: transparent;
  font-weight: bold;

  background: linear-gradient(to right, ${colors.text} 39%, rgba(115,171,0,1) 50%, rgba(212,192,0,1));
  background-size: 240%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: 0.5s ease;

  &:hover {
    background-position: -90%;
  }
`;

export const Right = styled.article`
  display: flex;
  flex: 1;

  @media(${screen.md}) {
    justify-content: center;
  } 
`;

export const Picture = styled.img`
  width: 100%;
  position: relative;
  left: 30px;

  @media(${screen.md}) {
    position: block;
    left: 0px;
    width: 50%;
  } 
`;