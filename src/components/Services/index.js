import React from 'react';
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesP,
  ServicessIcon,
  ServicesWrapper,
} from './styles/services';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-1.svg';
import Icon3 from '../../images/svg-1.svg';

const Services = () => {
  return (
    <ServicesContainer>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicessIcon src={Icon1} />
          <ServicesH2>Reduce Expense</ServicesH2>
          <ServicesP>BLABLABLABLABLABLABLA</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicessIcon src={Icon2} />
          <ServicesH2>Visit Museum</ServicesH2>
          <ServicesP>BLABLABLABLABLABLABLA</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicessIcon src={Icon3} />
          <ServicesH2>See the history</ServicesH2>
          <ServicesP>ABLABLABLABLABLABLABLA</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
