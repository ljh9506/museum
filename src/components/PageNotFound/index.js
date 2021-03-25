import React from 'react';
import { Image, PageWrapper } from './styles/pageNotFound';

const PageNotFound = () => {
  return (
    <PageWrapper>
      <Image src={require('../../images/pageNotFound.png').default} />
    </PageWrapper>
  );
};

export default PageNotFound;
