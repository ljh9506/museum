import styled from 'styled-components/macro';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import { Link } from 'react-router-dom';

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: calc(100vh - 80px);

  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const HeroImg = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  --o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  top: 60%;
  transform: translateY(-60%);
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 96px;
  text-align: center;
  text-transform: uppercase;
  user-select: none;

  @media screen and (max-width: 768px) {
    font-size: 48px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroSpan = styled.span`
  color: #fff;
  font-size: 48px;
  text-align: center;
  display: block;
  margin-bottom: 12px;
  user-select: none;

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  user-select: none;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroBtn = styled(Link)`
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 28px;
  border-radius: 50px;
  background-color: #01bf71;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  color: #000;
  text-decoration: none;

  &:hover {
    background-color: #fff;
    transition: 0.2s ease-in-out;
  }
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 24px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 24px;
`;

export const HeroLogos = styled.div`
  display: flex;
  align-items: flex-end;
  position: absolute;
  right: 30px;
  bottom: 30px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const HeroLogosSection = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HeroLogosA = styled.a`
  font-size: 10px;
  font-weight: bolder;
  color: #fff;
  text-decoration: none;
  margin-bottom: 8px;
`;
export const HeroLogosImg = styled.img`
  height: 25px;
  margin-right: 22px;
  cursor: pointer;
`;
export const HeroMainLogosImg = styled.img`
  height: 50px;
  margin-right: 22px;
  color: white;
  cursor: pointer;
`;
