import React from 'react';
import {
  CardContent,
  CardContentH2,
  CardContentP,
  ColWrap,
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesP,
  ServicessIcon,
  ServicesSubCard,
  ServicesWrapper,
} from './styles/services';
import Icon1 from '../../images/service1.webp';
import Icon2 from '../../images/service2.jfif';
import Icon3 from '../../images/service3.jfif';

const Services = () => {
  return (
    <ServicesContainer>
      {/* <ServicesH1>Our Services</ServicesH1> */}
      <ServicesWrapper>
        <ServicesCard>
          <ServicessIcon src={Icon1} />
          <CardContent>
            <CardContentH2>Highlight</CardContentH2>
            <CardContentP>
              The LittleStreet, Johannes Vermeer, c. 1660
            </CardContentP>
          </CardContent>
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
