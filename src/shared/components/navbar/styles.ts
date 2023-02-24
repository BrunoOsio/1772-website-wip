import { colors } from "@/shared/global/colors";
import { screen, screenWidth } from "@/shared/global/responsivity";
import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  background-color: ${colors.transparentBlue};
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0px 50px;
  backdrop-filter: blur(10px);
  z-index: 999;

  @media (${screenWidth(830)}) {
    padding: 0;
    justify-content: center;
  }
`;

export const Logo = styled.img`
  width: 50px;
  color: ${colors.white};
  padding: 20px 0px;
  
  user-select: none;
  -webkit-user-drag: none;
  pointer-events: none;
  
  @media (${screenWidth(1437)}) {
    font-size: 3.0rem;
  }

  @media (${screenWidth(1319)}) {
    font-size: 2.7rem;
  }

  @media (${screen.lg}) {
    font-size: 2.5rem;
  }

  @media (${screen.lgMd}) {
    font-size: 2.1rem;
  }
`;

export const Left = styled.section`
  
`;

export const Right = styled.section`
  display: flex;
  flex: 1;
  gap: 15px;
  justify-content: flex-end;
  text-decoration: none;

  @media (${screenWidth(1319)}) {
    gap: 3px;
  }

  @media (${screenWidth(830)}) {
    display: none;
  }
`;

export const Item = styled.a`
  list-style: none;
  text-decoration: none;
  text-transform: uppercase;
  color: ${colors.white};
  font-size: 0.75rem;
  padding: 5px;
  transition: all .2s ease-in-out;
  cursor: pointer;

  &::after {
    content: '';
    height: 2px;
    width: 0%;
    background-color: ${colors.white};
    display: block;
    transition: all .5s ease-in-out;
  }

  &:hover::after {
    content: '';
    height: 2px;
    width: 100%;
    background-color: ${colors.white};
    display: block;
  }

  @media (${screenWidth(1437)}) {
    font-size: 0.65rem;
  }

  @media (${screenWidth(1319)}) {
    font-size: 0.6rem;
  }
`;