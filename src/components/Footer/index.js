import React from "react";
import { FaDiscord, FaGithub, FaMedium, FaTwitter } from "react-icons/fa";
import {
  FooterContainer,
  FooterPWrapper,
  FooterP,
  FooterWrap,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterLinkItems,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  WebRights,
  SocialIcons,
  SocialIconsLink,
} from "./FooterElement";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
            <FooterPWrapper>
            <FooterLinkItems>
              <FooterP>
                Auxilium is building a DeFi Project which helps rug pull victims
                to receive compensation for lost funds. Everything we do is
                community effort, which means that you can participate in the
                decision-making process!
              </FooterP>
              <WebRights>
                Auxilium Fund © {new Date().getFullYear()} All Rights Reserved{" "}
              </WebRights>
              <SocialMedia>
            <SocialMediaWrap>
              <SocialIcons>
                <SocialIconsLink
                  href="//twitter.com/AuxiliumFund"
                  target="_blank"
                  area-label="Twitter"
                >
                  <FaTwitter />
                </SocialIconsLink>
                <SocialIconsLink
                  href="//discord.gg/Ktz4hmgt"
                  target="_blank"
                  area-label="Discord"
                >
                  <FaDiscord />
                </SocialIconsLink>
                <SocialIconsLink href="" target="_blank" area-label="Medium">
                  <FaMedium />
                </SocialIconsLink>
                <SocialIconsLink
                  href="//github.com/AuxiliumFund"
                  target="_blank"
                  area-label="GitHub"
                >
                  <FaGithub />
                </SocialIconsLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
            </FooterLinkItems>
            </FooterPWrapper>
            <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Products</FooterLinkTitle>
              <FooterLink to="">Staking</FooterLink>
              <FooterLink to="/">Bonds</FooterLink>
              <FooterLink to="/">Victims</FooterLink>
              <FooterLink to="/">NFT</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Governance</FooterLinkTitle>
              <FooterLink to="/">Voting</FooterLink>
              <FooterLink to="/">Snapshots</FooterLink>
              <FooterLink to="/">Forum</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Support</FooterLinkTitle>
              <FooterLink to="/">Docs</FooterLink>
              <FooterLink to="/">FAQ</FooterLink>
              <FooterLink to="/">Discord</FooterLink>
              <FooterLink to="/">Telegram</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
