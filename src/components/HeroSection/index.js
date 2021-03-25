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
  HeroSpan,
  HeroLogos,
  HeroLogosSection,
  HeroLogosA,
  HeroLogosImg,
  HeroMainLogosImg,
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
        <HeroLogos>
          <HeroLogosSection>
            <HeroMainLogosImg src={require('../../images/logo1.svg').default} />
          </HeroLogosSection>
          <HeroLogosSection>
            <HeroLogosA>Founder</HeroLogosA>
            <HeroLogosImg src={require('../../images/philips.svg').default} />
          </HeroLogosSection>
          <HeroLogosSection>
            <HeroLogosA>Main Sponsor</HeroLogosA>
            <HeroLogosImg src={require('../../images/bgl.svg').default} />
          </HeroLogosSection>
          <HeroLogosSection>
            <HeroLogosImg src={require('../../images/ing.svg').default} />
          </HeroLogosSection>
          <HeroLogosSection>
            <HeroLogosImg src={require('../../images/kpn.svg').default} />
          </HeroLogosSection>
        </HeroLogos>
      </HeroBg>
      <HeroContent>
        <HeroH1>rijks museum</HeroH1>

        <HeroP>
          <HeroSpan>FROM HOME</HeroSpan> We bring the museum to You
        </HeroP>
        <HeroBtnWrapper>
          <HeroBtn to='/studio' onMouseEnter={onHover} onMouseLeave={onHover}>
            See Arts {hover ? <ArrowForward /> : <ArrowRight />}
          </HeroBtn>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
