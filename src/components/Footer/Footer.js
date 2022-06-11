import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email me</LinkTitle>
          <LinkItem href="mailto:Craigoc2000@gmail.com">Craigoc2000@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Making a difference through Diversification and dedication</Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/SweggyC">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/craig-o-connor-9a9843197/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
