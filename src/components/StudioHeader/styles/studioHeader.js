import styled from 'styled-components/macro';
import { FaSearch } from 'react-icons/fa';
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

export const SearchInput = styled.input`
  height: 40px;
  width: 100%;
  padding: 0 10px;
  &:focus {
    outline: none;
  }
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
