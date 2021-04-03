import React from 'react';
import {
  CollectionSection,
  CollectionWrapper,
  Content,
  ContentContainer,
  ContentH1,
  ContentH3,
  ContentImg,
  ContentImgWrap,
  ContentP,
  ContentWrap,
  ContentSubImg1,
  ContentSubImg2,
  SubImgWrap,
  LinkR,
} from './styles/collection';

const Collection = () => {
  return (
    <CollectionSection>
      <CollectionWrapper>
        <ContentContainer>
          <ContentH1>Collection with this work</ContentH1>
          <ContentWrap>
            <Content>
              <ContentImgWrap>
                <LinkR to='/studio/SK-A-1328'>
                  <ContentImg src={require('../../images/col1.jpg').default} />
                </LinkR>
                <SubImgWrap>
                  <LinkR to='/studio/SK-A-3580'>
                    <ContentSubImg1
                      src={require('../../images/col1-1.jpg').default}
                    />
                  </LinkR>
                  <LinkR to='/studio/SK-A-3584'>
                    <ContentSubImg2
                      src={require('../../images/col1-2.jpg').default}
                    />
                  </LinkR>
                </SubImgWrap>
              </ContentImgWrap>
              <ContentH3>George Hendrik Breitner</ContentH3>
              <ContentP>Rijksmuseum</ContentP>
            </Content>
            <Content>
              <ContentImgWrap>
                <LinkR to='/studio/SK-A-91'>
                  <ContentImg src={require('../../images/col2.jpg').default} />
                </LinkR>
                <SubImgWrap>
                  <LinkR to='/studio/RP-P-OB-1841'>
                    <ContentSubImg1
                      src={require('../../images/col2-1.jpg').default}
                    />
                  </LinkR>
                  <LinkR to='/studio/BK-LXXXVII-C'>
                    <ContentSubImg2
                      src={require('../../images/col2-2.jpg').default}
                    />
                  </LinkR>
                </SubImgWrap>
              </ContentImgWrap>
              <ContentH3>George Hendrik Breitner</ContentH3>
              <ContentP>Rijksmuseum</ContentP>
            </Content>
            <Content>
              <ContentImgWrap>
                <LinkR to='/studio/SK-A-135'>
                  <ContentImg src={require('../../images/col3.jpg').default} />
                </LinkR>

                <SubImgWrap>
                  <LinkR to='/studio/SK-C-6'>
                    <ContentSubImg1
                      src={require('../../images/col3-1.jpg').default}
                    />
                  </LinkR>
                  <LinkR to='/studio/SK-C-216'>
                    <ContentSubImg2
                      src={require('../../images/col3-2.jpg').default}
                    />
                  </LinkR>
                </SubImgWrap>
              </ContentImgWrap>
              <ContentH3>George Hendrik Breitner</ContentH3>
              <ContentP>Rijksmuseum</ContentP>
            </Content>
          </ContentWrap>
        </ContentContainer>
      </CollectionWrapper>
    </CollectionSection>
  );
};

export default Collection;
