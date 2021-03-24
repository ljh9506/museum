import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
export const FooterContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  position: relative;
  padding-bottom: 100px;

  @media screen and (max-width: 770px) {
    padding-bottom: 0;
  }
`;
export const FooterWrap = styled.div`
  padding: 88px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  @media screen and (max-width: 720px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  width: 50%;
  @media screen and (max-width: 820px) {
    justify-content: space-between;
    margin-top: 30px;
  }

  @media screen and (max-width: 550px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-basis: 50%;
  flex-direction: column;
  align-items: center;
  margin: 0 16px;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 550px) {
    margin: 0;
    padding: 10px;
    width: 100%;
    align-items: flex-start;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 1rem;
  font-size: 18px;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }

  @media screen and (max-width: 800px) {
    font-size: 14px;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;
export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
  opacity: 0.7;
  transition: 0.2s ease-in-out;
  &:hover {
    opacity: 1;
    transition: 0.2s ease-in-out;
  }
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  opacity: 0.7;
  transition: 0.2s ease-in-out;
  &:hover {
    opacity: 1;
    transition: 0.2s ease-in-out;
  }
`;

export const VisitorInfoSection = styled.div`
  width: 100%;
`;
export const InfoH2 = styled.h2`
  color: #fff;
  font-weight: bold;
`;
export const InfoP = styled.p`
  color: #fff;
`;
export const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  align-items: flex-end;
`;
export const FooterButton = styled.button`
  display: block;
  outline: none;
  border: none;
  width: 100%;
  padding: 18px 64px;
  background-color: hsla(0, 0%, 100%, 0.2);
  border-radius: 2px;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
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
  @media screen and (max-width: 800px) {
    font-size: 12px;
    padding: 12px 32px;
  }
`;
