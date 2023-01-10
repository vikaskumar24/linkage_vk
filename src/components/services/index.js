import React from "react";
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from "./ServicesElements";
import Icon1 from "../../images/space.svg"
import Icon2 from "../../images/online.svg"
import Icon3 from "../../images/real-time.svg"
import { useHistory } from "react-router-dom"
const Services = () => {
  const history=useHistory()
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard onClick={()=>{history.push("datacenterservices")}}>
          <ServicesIcon src={Icon1}  />
          <ServicesH2>Data Centre Designs</ServicesH2>
          <ServicesP>
          Without the right infrastructure to record, work, and store data, many businesses aren’t getting the best out of p
          </ServicesP>
        </ServicesCard>
        <ServicesCard  onClick={()=>{history.push("networkservices")}}>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Network Services</ServicesH2>
          <ServicesP>
            A network service is an application running at the network application layer and provide data storage,communication.
          </ServicesP>
        </ServicesCard>
        <ServicesCard  onClick={()=>{history.push("wirelessservices")}}>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Wireless Services</ServicesH2>
          <ServicesP>
            it mean any mobile radio service,common carrier wireless exchange service,cellular service,personal communication services.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
