import React, { useState } from 'react';
import StudioHeader from '../components/StudioHeader';
import Masonry from '../components/Masonry';

const Studio = () => {
  const [searchDatas, setSearchDatas] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <StudioHeader setIsLoading={setIsLoading} setSearchDatas={setSearchDatas}>
        <Masonry searchDatas={searchDatas} isLoading={isLoading} />
      </StudioHeader>
    </>
  );
};

export default Studio;
