import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
} from './styles/details';

const Details = ({ params }) => {
  const [datas, setDatas] = useState(null);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://www.rijksmuseum.nl/api/nl/collection/${params.id}?key=4CjxqO0N`,
      );
      setDatas(data.artObject);
    })();
  }, [params]);
  if (datas === null) return <h1>Fuck</h1>;
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
    </>
  );
};

export default Details;
