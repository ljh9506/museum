import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Collection from '../Collection';
import {
  ButtonWrap,
  Description,
  DetailsBg,
  DetailsBgContainer,
  DetailsImg,
  DetailsInfoSection,
  DetailsInfoWrapper,
  DownloadImg,
  ExistButton,
  LeftInfo,
  Pallet,
  PalletItem,
  RightInfo,
  Subtle,
  Title,
  TourButton,
  VideoWrap,
  VideoImg,
  VideoP,
  VideoIcon,
  VideoImgWrap,
  LoaderWrapper,
  Loader,
} from './styles/details';

const Details = ({ params }) => {
  const instance = axios.create({
    baseURL: `https://www.rijksmuseum.nl/api/en/collection/${params.id}?key=4CjxqO0N`,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
    },
  });

  const [datas, setDatas] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      window.scrollTo(0, 0);
      setIsLoading(true);
      const { data } = await instance.get();
      setDatas(data.artObject);
      setIsLoading(false);
    })();
  }, []);
  if (datas === null)
    return (
      <LoaderWrapper>
        <Loader isLoading={isLoading} />
      </LoaderWrapper>
    );
  return (
    <>
      <DetailsBgContainer>
        <DetailsBg>
          <DetailsImg src={datas.webImage.url} />
        </DetailsBg>
      </DetailsBgContainer>
      <DetailsInfoSection>
        <DetailsInfoWrapper>
          <LeftInfo>
            <Title>{datas.title}</Title>
            <Subtle>Subtle : {datas.materials.join(', ')}</Subtle>
            <Description>{datas.description}</Description>
            <ButtonWrap>
              <ExistButton>On display in room 2.8</ExistButton>
              <TourButton>Visit via the Rembrandt tour</TourButton>
            </ButtonWrap>
          </LeftInfo>
          <RightInfo>
            <Pallet>
              <PalletItem color='#0B0906'></PalletItem>
              <PalletItem color='#2F2718'></PalletItem>
              <PalletItem color='#A69272'></PalletItem>
              <PalletItem color='#CEC9B6'></PalletItem>
              <PalletItem color='#755F42'></PalletItem>
              <PalletItem color='#BBAC8E'></PalletItem>
            </Pallet>
            <DownloadImg>Download Image</DownloadImg>
            <VideoWrap>
              <VideoImgWrap>
                <VideoImg src={datas.webImage.url} />
                <VideoIcon />
              </VideoImgWrap>
              <VideoP>
                Listen to auto fragment (from the multimedia tour)
              </VideoP>
            </VideoWrap>
          </RightInfo>
        </DetailsInfoWrapper>
      </DetailsInfoSection>

      <Collection />
    </>
  );
};

export default Details;
