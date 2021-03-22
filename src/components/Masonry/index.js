import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {
  Columns,
  Figcaption,
  Figure,
  FigureImg,
  FigureP,
  FigureWrap,
  Loader,
  LoaderWrapper,
} from './styles/masonry';

const Masonry = () => {
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
  if (datas === null)
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
            <FigureImg src={data.webImage.url} effect='blur' />
            <FigureWrap>
              <Figcaption>
                {data.title}
                <FigureP>{data.principalOrFirstMaker}</FigureP>
              </Figcaption>
            </FigureWrap>
          </Figure>
        );
      })}
    </Columns>
  );
};

export default Masonry;
