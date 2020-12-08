import React from "react";
import Icon1 from "../../assets/images/svg-1.svg";
import Icon2 from "../../assets/images/svg-2.svg";
import Icon3 from "../../assets/images/svg-3.svg";
import {
  ServicesP,
  ServicesH2,
  ServicesH1,
  ServicesIcon,
  ServicesCard,
  ServicesWrapper,
  ServicesContainer,
} from "./ServicesElement";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServicesP>
            We help reduce your fees and increase your overall revenue.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Voice command</ServicesH2>
          <ServicesP>
            You can interaction with Website from your device.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Voice search</ServicesH2>
          <ServicesP>
            You can enter search queries without using the keyboard.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
