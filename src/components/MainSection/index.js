import React from "react";
import { Button } from "../ButtonElement";
import {
  MainContainer,
  MainWrapper,
  BtnWrap,
  MainRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Img,
  ImgWrapper,
} from "./MainElement";

const MainSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  buttonLabel,
  img,
  darkText,
  description,
  alt,
  primary,
  dark,
  dark2
}) => {
  return (
    <>
      <MainContainer lightBg={lightBg} id={id}>
        <MainWrapper>
          <MainRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrapper>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </Column2>
          </MainRow>
        </MainWrapper>
      </MainContainer>
    </>
  );
};

export default MainSection;
