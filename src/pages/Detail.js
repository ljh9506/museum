import React from 'react';
import Details from '../components/Details';

const Detail = ({ match }) => {
  return <Details params={match.params} />;
};

export default Detail;
