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
  ContentSubImg,
  SubImgWrap,
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
                <ContentImg src={require('../../images/col1.jpg').default} />
                <SubImgWrap>
                  <ContentSubImg
                    src={require('../../images/col1-1.jpg').default}
                  />
                  <ContentSubImg
                    src={require('../../images/col1-2.jpg').default}
                  />
                </SubImgWrap>
              </ContentImgWrap>
              <ContentH3>George Hendrik Breitner</ContentH3>
              <ContentP>Rijksmuseum</ContentP>
            </Content>
            <Content>
              <ContentImgWrap>
                <ContentImg src={require('../../images/col2.jpg').default} />
                <SubImgWrap>
                  <ContentSubImg
                    src={require('../../images/col2-1.jpg').default}
                  />
                  <ContentSubImg
                    src={require('../../images/col2-2.jpg').default}
                  />
                </SubImgWrap>
              </ContentImgWrap>
              <ContentH3>George Hendrik Breitner</ContentH3>
              <ContentP>Rijksmuseum</ContentP>
            </Content>
            <Content>
              <ContentImgWrap>
                <ContentImg src={require('../../images/col3.jpg').default} />
                <SubImgWrap>
                  <ContentSubImg
                    src={require('../../images/col3-1.jpg').default}
                  />
                  <ContentSubImg
                    src={require('../../images/col3-2.jpg').default}
                  />
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
