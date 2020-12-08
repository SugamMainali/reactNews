import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaInstagram, FaTwitch, FaYoutube } from "react-icons/fa";
import {
  FooterLink,
  FoooterLinkTitle,
  FooterLinksItems,
  FooterLinksWrapper,
  FootLinksContainer,
  FooterWrap,
  FooterContainer,
  SocialIconLink,
  SocialIcons,
  WebsiteRights,
  SocialLogo,
  SocialMediaWrap,
  SocialMedia,
} from "./FooterElement";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FootLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FoooterLinkTitle>About Us</FoooterLinkTitle>
              <FooterLink to="/">How it works</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Investors</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Terms of Services</FooterLink>
            </FooterLinksItems>{" "}
            \
            <FooterLinksItems>
              <FoooterLinkTitle>Contact Us</FoooterLinkTitle>
              <FooterLink to="/">Contact</FooterLink>
              <FooterLink to="/">Support</FooterLink>
              <FooterLink to="/">Destinations</FooterLink>
              <FooterLink to="/">Sponsorships</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FoooterLinkTitle>Videos</FoooterLinkTitle>
              <FooterLink to="/">Submit Video</FooterLink>
              <FooterLink to="/">Ambassadors</FooterLink>
              <FooterLink to="/">Agency</FooterLink>
              <FooterLink to="/">Influencer</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FoooterLinkTitle>Social Media</FoooterLinkTitle>
              <FooterLink to="/">Instagram</FooterLink>
              <FooterLink to="/">Facebook</FooterLink>
              <FooterLink to="/">Youtube</FooterLink>
              <FooterLink to="/">Twitter</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FootLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              ListenNEWS
            </SocialLogo>
            <WebsiteRights>
              ListenNEWS © {new Date().getFullYear()}
              All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="" target="_blank" aria-label="Twitter">
                <FaTwitch />
              </SocialIconLink>
              <SocialIconLink href="" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
