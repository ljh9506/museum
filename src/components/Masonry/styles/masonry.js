import styled from 'styled-components/macro';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { PulseLoader } from 'react-spinners';
export const Columns = styled.div`
  column-width: 350px;
  column-gap: 15px;
  background-color: #000;
  margin-top: 240px;
  min-height: 402px;

  @media screen and (max-width: 480px) {
    min-height: 200px;
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
export const FigureP = styled.p`
  color: #fff;
`;
export const FigureWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  min-height: 1000px;
  width: 100%;

  @media screen and (max-width: 480px) {
    min-height: 490px;
  }
`;

export const Loader = styled(PulseLoader)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
