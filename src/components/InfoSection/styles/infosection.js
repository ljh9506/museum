import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100%;
  width: 100%;
  align-items: center;
  max-width: 1100px;
  padding: 40px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  padding: ${({ marginClear }) => (marginClear ? '40px' : '30px 40px')};

  @media screen and (max-width: 480px) {
    padding-bottom: 20px;
    padding-top: 0;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  align-items: center;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1' 'col2'`};
  }
`;
export const Column1 = styled.div`
  margin-bottom: 15px;
  margin-top: 20px;
  padding: 0 15px;
  grid-area: col1;
`;
export const Column2 = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  @media screen and (max-width: 768px) {
    padding-bottom: 0;
  }
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  margin-top: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 40px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const SubTitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const InfoButton = styled(Link)`
  display: block;
  outline: none;
  border: none;
  padding: 18px 64px;
  background-color: hsla(0, 0%, 100%, 0.2);
  border-radius: 2px;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background-color: #fff;
    color: #000;
    font-weight: bold;
    transition: 0.2s ease-in-out;
  }
`;
export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;
export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  max-height: 400px;
  object-fit: cover;
`;
