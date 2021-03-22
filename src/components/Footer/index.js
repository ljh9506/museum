import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from './styles/footer';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to='/signin'>How it works</FooterLink>
              <FooterLink to='/signin'>About us</FooterLink>
              <FooterLink to='/signin'>About us</FooterLink>
              <FooterLink to='/signin'>About us</FooterLink>
              <FooterLink to='/signin'>About us</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to='/signin'>How it works</FooterLink>
              <FooterLink to='/signin'>About us</FooterLink>
              <FooterLink to='/signin'>About us</FooterLink>
              <FooterLink to='/signin'>About us</FooterLink>
              <FooterLink to='/signin'>About us</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to='/signin'>How it works</FooterLink>
              <FooterLink to='/signin'>About us</FooterLink>
              <FooterLink to='/signin'>About us</FooterLink>
              <FooterLink to='/signin'>About us</FooterLink>
              <FooterLink to='/signin'>About us</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to='/signin'>How it works</FooterLink>
              <FooterLink to='/signin'>About us</FooterLink>
              <FooterLink to='/signin'>About us</FooterLink>
              <FooterLink to='/signin'>About us</FooterLink>
              <FooterLink to='/signin'>About us</FooterLink>
            </FooterLinkItems>
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
