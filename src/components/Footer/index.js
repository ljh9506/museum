import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import {
  HeroLogos,
  HeroLogosA,
  HeroLogosImg,
  HeroLogosSection,
  HeroMainLogosImg,
} from '../HeroSection/styles/herosection';
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  VisitorInfoSection,
  InfoH2,
  InfoP,
  ButtonSection,
  FooterButton,
} from './styles/footer';

const Footer = () => {
  return (
    <FooterContainer>
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

      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <VisitorInfoSection>
              <InfoH2>VISITOR INFORMATION</InfoH2>
              <InfoP>Closed until 30 March</InfoP>
            </VisitorInfoSection>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLink to='/signin'>About us</FooterLink>
              <FooterLink to='/signin'>Press</FooterLink>
              <FooterLink to='/signin'>Careers</FooterLink>
              <FooterLink to='/signin'>Contact</FooterLink>
            </FooterLinkItems>
            <ButtonSection>
              <FooterButton>Donate today</FooterButton>
              <FooterButton>Newsletter</FooterButton>
            </ButtonSection>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>Museum</SocialLogo>
            <WebsiteRights>
              Museum {new Date().getFullYear()}
              All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
