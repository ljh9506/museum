import React, { useState } from 'react';
import StudioHeader from '../components/StudioHeader';
import Masonry from '../components/Masonry';
import axios from 'axios';

const Studio = () => {
  const [query, setQuery] = useState('');
  const [searchDatas, setSearchDatas] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const searchChange = (e) => {
    setQuery(e.target.value);
  };
  const searchHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { data } = await axios.get(
      `https://www.rijksmuseum.nl/api/nl/collection?key=4CjxqO0N&q=${query}`,
    );
    setSearchDatas(data.artObjects);
    setIsLoading(false);
  };
  return (
    <>
      <StudioHeader
        searchChange={searchChange}
        searchHandler={searchHandler}
        query={query}>
        <Masonry searchDatas={searchDatas} isLoading={isLoading} />
      </StudioHeader>
    </>
  );
};

export default Studio;
