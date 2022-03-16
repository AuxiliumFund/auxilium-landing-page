import React from "react";
import { FaBars } from "react-icons/fa";
import LogoSrc from "../../images/AuxiliumFund.png";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  Logo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavButton,
  NavButtonLinkDocs,
  NavButtonLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav>
        <NavbarContainer>
          <Logo src={LogoSrc} alt="Auxilium" onClick={toggleHome} />
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink
                to="about"
                smooth={true}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="features"
                smooth={true}
                spy={true}
                exact="true"
                offset={-80}
              >
                Features
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="roadmap"
                smooth={true}
                spy={true}
                exact="true"
                offset={-80}
              >
                RoadMap
              </NavLink>
            </NavItem>
            <NavItem>
              <NavButtonLinkDocs to="/">Docs</NavButtonLinkDocs>
            </NavItem>
            <NavButton>
              <NavButtonLink to="/">Enter App</NavButtonLink>
            </NavButton>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
