import axios from 'axios';
import React, { useState } from 'react';
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

const StudioHeader = ({ children, searchChange, searchHandler, query }) => {
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
                <SearchInput value={query} onChange={searchChange} />
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
      {children}
    </>
  );
};

export default StudioHeader;
