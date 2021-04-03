import styled from 'styled-components/macro';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
`;

export const HeaderWrap = styled.div`
  position: relative;
  max-height: 220px;
  height: 100%;
  overflow: hidden;
`;

export const HeaderImg = styled.img`
  width: 100%;
  height: 100%;
  --o-object-fit: cover;
  object-fit: cover;
`;

export const HeaderBottom = styled.h1`
  color: #fff;
  position: absolute;
  left: 50px;
  bottom: 30px;
  z-index: 1;
`;

export const SearchSection = styled.section`
  display: flex;
  position: absolute;
  top: 220px;
  width: 100%;
  height: 100px;
  background-color: #000;
  z-index: 1;
  padding: 20px 40px;
`;

export const SearchWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const SearchForm = styled.form`
  display: flex;
  width: 100%;
  @media screen and (max-width: 480px) {
    justify-content: center;
  }
`;

export const SearchFormWrap = styled.div`
  min-width: 50%;
  display: flex;
`;

export const InputWrap = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
`;

export const SearchInput = styled.input`
  height: 40px;
  width: 100%;
  padding: 0 10px;
  &:focus {
    outline: none;
  }
`;

export const AutoCompleteWrap = styled.ul`
  display: ${({ autocompleteData }) =>
    autocompleteData.length > 0 ? 'flex' : 'none'};
  flex-direction: column;
  position: absolute;
  max-height: 200px;
  bottom: -200px;
  left: 0;
  right: 0;
  overflow-y: scroll;

  @media screen and (max-width: 480px) {
    left: 0;
    right: 0;
  }
`;

export const AutoLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const AutoCompleteLi = styled.li`
  width: 100%;
  list-style: none;
  background-color: #fff;
  padding: 12px 40px;
  height: 100px;
  border-bottom: 1px solid gray;

  &:hover {
    background-color: #808080;
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    padding: 12px;
  }
`;

export const ArtObjWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ArtImg = styled.img`
  max-width: 80px;
  max-height: 80px;
  margin-right: 10px;
`;

export const ArtTitle = styled.span`
  font-size: 14px;
  overflow: hidden;
  font-weight: bold;
  white-space: nowrap;
`;

export const SearchButton = styled.button`
  padding: 0 20px;
  height: 40px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: bold;
  background-color: #d55140;
  font-size: 16px;

  @media screen and (max-width: 480px) {
    padding: 0 10px;
  }
`;

export const Icon = styled(FaSearch)`
  margin-right: 8px;
  font-weight: bold;
  color: #fff;
  font-size: 16px;
`;

export const Ha = styled.h1``;

export const SearchButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
