import React from 'react';
import {
  CardContent,
  CardContentH2,
  CardContentP,
  CarouselItem,
  ColWrap,
  ServicesCard,
  ServicesContainer,
  ServicessIcon,
  ServicesSubCard,
  ServicesWrapper,
} from './styles/services';
import Highlight1 from '../../images/service1.webp';
import Highlight2 from '../../images/service2-big.webp';
import Highlight3 from '../../images/service3.webp';
import Highlight4 from '../../images/service4.webp';
import Highlight5 from '../../images/service5-big.webp';
import Icon2 from '../../images/service2.jfif';
import Icon3 from '../../images/service3.jfif';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Services = () => {
  return (
    <ServicesContainer>
      <ServicesWrapper>
        <ServicesCard>
          <Carousel
            showArrows={true}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            swipeable>
            <CarouselItem>
              <ServicessIcon src={Highlight1} />
              <CardContent>
                <CardContentH2>Highlights</CardContentH2>
                <CardContentP>The LittleStreet, Vermeer</CardContentP>
              </CardContent>
            </CarouselItem>

            <CarouselItem>
              <ServicessIcon src={Highlight2} />
              <CardContent>
                <CardContentH2>Highlights</CardContentH2>
                <CardContentP>
                  The Milkmaid, Johannes Vermeer, c. 1660
                </CardContentP>
              </CardContent>
            </CarouselItem>

            <CarouselItem>
              <ServicessIcon src={Highlight3} />
              <CardContent>
                <CardContentH2>Highlights</CardContentH2>
                <CardContentP>Gallery of Honour</CardContentP>
              </CardContent>
            </CarouselItem>

            <CarouselItem>
              <ServicessIcon src={Highlight4} />
              <CardContent>
                <CardContentH2>Highlights</CardContentH2>
                <CardContentP>Cuypers Library</CardContentP>
              </CardContent>
            </CarouselItem>

            <CarouselItem>
              <ServicessIcon src={Highlight5} />
              <CardContent>
                <CardContentH2>Highlights</CardContentH2>
                <CardContentP>Self-Portrait, Van Gogh</CardContentP>
              </CardContent>
            </CarouselItem>
          </Carousel>
        </ServicesCard>
        <ColWrap>
          <ServicesSubCard>
            <ServicessIcon src={Icon2} />
            <CardContent>
              <CardContentH2>Whats On</CardContentH2>
              <CardContentP>All our exhibitions and activities</CardContentP>
            </CardContent>
          </ServicesSubCard>
          <ServicesSubCard>
            <ServicessIcon src={Icon3} />
            <CardContent>
              <CardContentH2>PRACTICAL INFO</CardContentH2>
              <CardContentP>visitors info</CardContentP>
            </CardContent>
          </ServicesSubCard>
        </ColWrap>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
