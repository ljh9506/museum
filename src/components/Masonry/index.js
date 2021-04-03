import React from 'react';
import { Link } from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css';
import useFetchData from '../../hooks/useFetchData';
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
  ScrollLoaderWrapper,
} from './styles/masonry';

const Masonry = ({ searchDatas, isLoading }) => {
  const { datas, scrollDataLoading } = useFetchData(searchDatas);

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
          <Link to={`/studio/${data.objectNumber}`} key={data.objectNumber}>
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
          </Link>
        );
      })}
      <ScrollLoaderWrapper>
        {scrollDataLoading ? (
          <Loader loading color='red' scrollDataLoading={scrollDataLoading} />
        ) : null}
      </ScrollLoaderWrapper>
    </Columns>
  );
};

export default Masonry;
