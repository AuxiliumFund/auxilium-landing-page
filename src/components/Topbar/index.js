import React from "react";
import {
  TopBarContainer,
  CloseIcon,
  Icon,
  TopBarWrapper,
  TopBarMenu,
  TopBarLink,
  TopButtonWrap,
  TopBarRoute,
  TopBarRoute1
} from "./TopbarElements";

const Topbar = ({isOpen, toggle}) => {
  return (
    <TopBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <TopBarWrapper>
        <TopBarMenu>
          <TopBarLink to="about">About</TopBarLink>
          <TopBarLink to="features">Features</TopBarLink>
          <TopBarLink to="roadmap">RoadMap</TopBarLink>
          <TopBarRoute1 to="/docs">Docs</TopBarRoute1>
        </TopBarMenu>
        <TopButtonWrap>
          <TopBarRoute to="/enterapp">Enter App</TopBarRoute>
        </TopButtonWrap>
      </TopBarWrapper>
    </TopBarContainer>
  );
};

export default Topbar;
