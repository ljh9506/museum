import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import useFetchData from '../../hooks/fetchData';
import {
  Columns,
  Figcaption,
  Figure,
  FigureH2,
  FigureImg,
  FigureP,
  FigureWrap,
  Loader,
  LoaderWrapper,
  FigurePlace,
} from './styles/masonry';

const Masonry = ({ searchDatas, isLoading }) => {
  const [datas, setDatas] = useState(null);
  useEffect(() => {
    (async () => {
      window.scrollTo(0, 0);
      const { data } = await axios.get(
        'https://www.rijksmuseum.nl/api/nl/collection?key=4CjxqO0N&ps=10',
      );
      setDatas(data.artObjects);
    })();
  }, []);

  useEffect(() => {
    setDatas(searchDatas);
    console.log(searchDatas);
  }, [searchDatas]);

  if (datas === null || isLoading)
    return (
      <Columns>
        <LoaderWrapper>
          <Loader loading color='red' />
        </LoaderWrapper>
      </Columns>
    );
  return (
    <Columns>
      {datas.map((data) => {
        return (
          <Figure>
            <FigureImg
              src={
                data.webImage === null
                  ? require('../../images/copyright.png').default
                  : data.webImage.url
              }
              effect='blur'
            />
            <FigureWrap>
              <Figcaption>
                <FigureH2>{data.title}</FigureH2>
                <FigureP>{data.principalOrFirstMaker}</FigureP>
                <FigurePlace>
                  {data.productionPlaces.length > 0
                    ? `On Existing in ${data.productionPlaces[0]}`
                    : 'Unknown'}
                </FigurePlace>
              </Figcaption>
            </FigureWrap>
          </Figure>
        );
      })}
    </Columns>
  );
};

export default Masonry;
