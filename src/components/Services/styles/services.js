import styled from 'styled-components/macro';

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: auto;
  }
`;

export const ServicesWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ServicesCard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    /* transform: scale(1.02); */
    transition: 0.2s ease-in-out;
  }
`;

export const ServicesSubCard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 66vh;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  transition: all 0.4s ease-in-out;

  background-image: linear-gradient(
    180deg,
    transparent 100%,
    rgba(32, 35, 39, 1)
  );

  &:hover {
    transform: scale(1.02);
    transition: 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicessIcon = styled.img`
  position: relative;
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;

  filter: brightness(80%);

  @media screen and (max-width: 480px) {
    height: 66vh;
  }
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ColWrap = styled.div`
  display: flex;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 60px;
  left: 60px;

  @media screen and (max-width: 480px) {
    bottom: 40px;
    left: 20px;
  }
`;
export const CardContentH2 = styled.h2`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
export const CardContentP = styled.p`
  color: #fff;
  margin-top: 12px;
`;
