import React from 'react';
import {
  HeaderContainer,
  HeaderImg,
  HeaderWrap,
  HeaderBottom,
  SearchSection,
  SearchWrap,
  SearchInput,
  SearchButton,
  SearchForm,
  SearchButtonWrap,
  Icon,
  SearchFormWrap,
} from './styles/studioHeader';

const StudioHeader = () => {
  const searchHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <HeaderContainer>
        <HeaderWrap>
          <HeaderImg src={require('../../images/header.jpg').default} />
          <HeaderBottom>Search in Rijksstudio</HeaderBottom>
        </HeaderWrap>
        <SearchSection>
          <SearchWrap>
            <SearchForm onSubmit={searchHandler}>
              <SearchFormWrap>
                <SearchInput />
                <SearchButtonWrap>
                  <SearchButton type='submit'>
                    <Icon />
                    Search
                  </SearchButton>
                </SearchButtonWrap>
              </SearchFormWrap>
            </SearchForm>
          </SearchWrap>
        </SearchSection>
      </HeaderContainer>
    </>
  );
};

export default StudioHeader;
