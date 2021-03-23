import styled from 'styled-components/macro';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { PulseLoader } from 'react-spinners';
export const Columns = styled.div`
  column-width: 350px;
  column-gap: 15px;
  position: relative;
  background-color: #000;
  margin-top: 240px;
  padding: 0 30px;
  min-height: 402px;

  @media screen and (max-width: 480px) {
    min-height: 500px;
    padding: 0;
  }
`;

export const Figure = styled.figure`
  display: inline-block;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 0;
  margin-bottom: 15px;
  padding: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const FigureImg = styled(LazyLoadImage)`
  width: 100%;
`;

export const Figcaption = styled.figcaption`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin-top: 11px;
  color: #fff;
`;
export const FigureH2 = styled.h2`
  color: #fff;
  font-size: 18px;
`;
export const FigureP = styled.p`
  color: #909090;
  margin: 4px 0;
  font-size: 14px;
`;
export const FigurePlace = styled.span`
  font-size: 12px;
  background-color: #aaa04d;
  padding: 2px;
  border-radius: 4px;
`;
export const FigureWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 700px) {
    min-height: 500px;
  }
  @media screen and (max-width: 480px) {
    min-height: 490px;
  }
`;

export const Loader = styled(PulseLoader)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
