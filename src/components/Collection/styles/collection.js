import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const CollectionSection = styled.div`
  display: flex;
  background-color: #40474f;
  justify-content: center;
`;

export const CollectionWrapper = styled.div`
  display: flex;
  max-width: 1220px;
  width: 100%;
  height: 100%;
  justify-content: center;
  padding: 30px 40px 40px 40px;
  margin: 0 auto;

  @media screen and (max-width: 800px) {
    width: 100%;
    padding-bottom: 60px;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 40px 20px 40px 20px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const ContentH1 = styled.h1`
  color: #fff;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const ContentWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  margin-right: 30px;

  @media screen and (max-width: 480px) {
    margin-right: 0;
    margin-bottom: 22px;
  }
`;

export const ContentImgWrap = styled.div`
  display: flex;
  height: 100%;
  max-height: 200px;
`;

export const ContentImg = styled.img`
  display: block;
  max-width: 190px;
  margin-right: 5px;

  @media screen and (max-width: 480px) {
  }
`;

export const ContentSubImg1 = styled.img`
  display: block;
  width: 95px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 5px;

  @media screen and (max-width: 1050px) {
    display: none;
  }
  @media screen and (max-width: 480px) {
    display: block;
  }
`;

export const ContentSubImg2 = styled.img`
  display: block;
  width: 95px;
  height: 95px;
  object-fit: cover;

  @media screen and (max-width: 1050px) {
    display: none;
  }
  @media screen and (max-width: 480px) {
    display: block;
  }
`;

export const SubImgWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentH3 = styled.h3`
  color: #fff;
  font-size: 16px;
  margin: 8px 0;

  @media screen and (max-width: 850px) {
    font-size: 12px;
  }
`;

export const ContentP = styled.p`
  color: #a2abad;

  @media screen and (max-width: 850px) {
    font-size: 12px;
  }
`;
export const LinkR = styled(Link)`
  display: flex;
  height: 100%;
  max-height: 200px;
`;
