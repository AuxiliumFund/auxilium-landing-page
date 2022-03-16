import React from "react";
import Icon1 from "../../images/build.png";
import Icon2 from "../../images/welcome.png";
import Icon3 from "../../images/community.png";
import {
  CategoryContainer,
  CategoryH1,
  CategoryWrapper,
  CategoryCard,
  CategoryIcon,
  CategoryH2,
  CategoryP,
} from "./CategoryElement";

const Category = () => {
  return (
    <CategoryContainer id="category">
      <CategoryH1>Meet our three categories.</CategoryH1>
      <CategoryWrapper>
        <CategoryCard>
          <CategoryIcon src={Icon1} />
          <CategoryH2>Genesis</CategoryH2>
          <CategoryP>
            As a Genesis NFT holder you will be rewarded with a boosted APR%
            (Soft-capped to 500 through Whitelisting)
          </CategoryP>
        </CategoryCard>
        <CategoryCard>
          <CategoryIcon src={Icon2} />
          <CategoryH2>Staker</CategoryH2>
          <CategoryP>
            Everyone can stake their $AUXL Token on our protocol for a decent
            and sustainable return.
          </CategoryP>
        </CategoryCard>
        <CategoryCard>
          <CategoryIcon src={Icon3} />
          <CategoryH2>Victim</CategoryH2>
          <CategoryP>
            Those who have been rug pulled and are entitled for a victim NFT are
            capable of staking and selling their NFTs.
          </CategoryP>
        </CategoryCard>
      </CategoryWrapper>
    </CategoryContainer>
  );
};

export default Category;
