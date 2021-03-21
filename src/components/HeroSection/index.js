import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowForward,
  HeroBg,
  HeroBtn,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroImg,
  HeroP,
} from './styles/herosection';

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <HeroImg src='https://lh3.googleusercontent.com/J-mxAE7CPu-DXIOx4QKBtb0GC4ud37da1QK7CzbTIDswmvZHXhLm4Tv2-1H3iBXJWAW_bHm7dMl3j5wv_XiWAg55VOM=s0' />
      </HeroBg>
      <HeroContent>
        <HeroH1>mflasmflamf fmlqmflqwfml</HeroH1>
        <HeroP>fpeogwjpoegjw pojqegpj qgjpoqjpoge</HeroP>
        <HeroBtnWrapper>
          <HeroBtn onMouseEnter={onHover} onMouseLeave={onHover}>
            See Arts {hover ? <ArrowForward /> : <ArrowRight />}
          </HeroBtn>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
