import styled from 'styled-components/macro';
import { FaPlayCircle } from 'react-icons/fa';
import { PulseLoader } from 'react-spinners';

export const DetailsBgContainer = styled.div`
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 640px;
  z-index: 1;

  @media screen and (max-width: 480px) {
    height: 89vh;
  }
`;

export const DetailsBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;

export const DetailsImg = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: scroll;
  --o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const DetailsInfoSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 350px;
  width: 100%;
  background-color: #000;
  padding: 40px;

  @media screen and (max-width: 750px) {
    padding: 40px 10px;
  }
`;

export const DetailsInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;

  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;

export const LeftInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 62%;
  padding: 0 40px;

  @media screen and (max-width: 750px) {
    width: 100%;
  }
  @media screen and (max-width: 480px) {
  }
`;
export const RightInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 320px;
  padding: 0 40px;

  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  color: #fff;
`;
export const Subtle = styled.h2`
  font-size: 16px;
  margin: 6px 0;
  color: darkgray;
`;
export const Description = styled.p`
  font-size: 14px;
  color: #fff;
`;
export const ButtonWrap = styled.div`
  display: flex;
  margin-top: 20px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
export const ExistButton = styled.button`
  display: block;
  outline: none;
  border: none;
  background-color: #aaa04d;
  padding: 18px 22px;
  border-radius: 2px;
  margin-right: 6px;
  color: #fff;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  margin-bottom: 12px;

  &:hover {
    background-color: #fff;
    color: #000;
    font-weight: bold;
    transition: 0.2s ease-in-out;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;
export const TourButton = styled.button`
  display: block;
  outline: none;
  border: none;
  padding: 18px 22px;
  background-color: #40474f;
  border-radius: 2px;
  color: #fff;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  margin-bottom: 12px;

  &:hover {
    background-color: #fff;
    color: #000;
    font-weight: bold;
    transition: 0.2s ease-in-out;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const Pallet = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid #fff;

  @media screen and (max-width: 900px) {
    margin: 20px 0;
    width: 240px;
  }
`;

export const PalletItem = styled.a`
  display: block;
  width: 40px;
  height: 40px;
  background-color: ${({ color }) => (color ? color : '#fff')};
`;
export const DownloadImg = styled.button`
  display: block;
  outline: none;
  border: none;
  padding: 18px 32px;
  background-color: #40474f;
  border-radius: 2px;
  color: #fff;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  margin: 12px 0;
  &:hover {
    background-color: #fff;
    color: #000;
    font-weight: bold;
    transition: 0.2s ease-in-out;
  }
`;
export const VideoWrap = styled.div`
  display: flex;

  @media screen and (max-width: 900px) {
    margin-top: 20px;
  }
`;
export const VideoImg = styled.img`
  max-width: 100px;
  max-height: 100px;
  margin-right: 12px;
`;
export const VideoP = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;
export const VideoImgWrap = styled.div`
  position: relative;
`;
export const VideoIcon = styled(FaPlayCircle)`
  position: absolute;
  left: 45%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 32px;
  opacity: 0.7;
  color: #fff;
`;

export const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
`;
export const Loader = styled(PulseLoader)``;
