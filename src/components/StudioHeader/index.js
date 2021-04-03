import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react';
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
  InputWrap,
  AutoCompleteWrap,
  AutoCompleteLi,
  ArtObjWrap,
  ArtImg,
  ArtTitle,
  AutoLink,
} from './styles/studioHeader';

const StudioHeader = ({ children, setIsLoading, setSearchDatas }) => {
  const [query, setQuery] = useState('');
  const [autocompleteData, setAutocompleteData] = useState([]);
  const searchChange = (e) => {
    setQuery(e.target.value);
  };
  const timerId = useRef(null);

  const searchHandler = useCallback(
    async (e) => {
      e.preventDefault();
      setIsLoading(true);
      const { data } = await axios.get(`/collection?key=4CjxqO0N&q=${query}`);
      console.log(data.artObjects);
      setSearchDatas(data.artObjects);
      setIsLoading(false);
    },
    [query, setIsLoading, setSearchDatas],
  );
  useEffect(() => {
    setAutocompleteData([]);
    if (timerId.current) {
      clearTimeout(timerId.current);
    }
    timerId.current = setTimeout(async () => {
      const { data } = await axios.get(`/collection?key=4CjxqO0N&q=${query}`);
      if (query === '') return;
      setAutocompleteData(data.artObjects);
    }, 500);
  }, [query]);
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
                <InputWrap>
                  <SearchInput value={query} onChange={searchChange} />
                  <AutoCompleteWrap autocompleteData={autocompleteData}>
                    {!autocompleteData
                      ? null
                      : autocompleteData.map((value) => (
                          <AutoLink
                            to={`/studio/${value.objectNumber}`}
                            key={value.objectNumber}>
                            <AutoCompleteLi>
                              <ArtObjWrap>
                                <ArtImg
                                  src={
                                    value.webImage === null
                                      ? require('../../images/copyright.png')
                                          .default
                                      : value.webImage.url
                                  }
                                />
                                <ArtTitle>{value.title}</ArtTitle>
                              </ArtObjWrap>
                            </AutoCompleteLi>
                          </AutoLink>
                        ))}
                  </AutoCompleteWrap>
                </InputWrap>
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
