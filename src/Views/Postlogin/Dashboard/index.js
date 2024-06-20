import React, { Component } from "react";

import ContentLayout from "@cloudscape-design/components/content-layout";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Link from "@cloudscape-design/components/link";
import { BreadcrumbGroup, Grid } from "@cloudscape-design/components";
import DashboardCards from "../Widgets/DashboardCards/DashboardCards";
import HealthCard from "../Widgets/HealthCard/HealthCard";
import MoneyRaisedChart from "../Widgets/MoneyRaisedChart/MoneyRaisedChart";
import RaisedByType from "../Widgets/RaisedByType/RaisedByType";

class Donations extends Component {
  
  render() {
    return (
      <ContentLayout

      breadcrumbs={
        <BreadcrumbGroup
        items={[
          { text: "Home", href: "#" },
          { text: "Dashboard", href: "#components" },
         
        ]}
      />
      }
      header={
          <Header
            variant="h1"
            info={<Link variant="info">Info</Link>}
          >
            Dashboard Overview
          </Header>
      }
    >
<Content/>
    </ContentLayout>
    )
  }
}
export default Donations;




function Content() {
  return (
    <Grid
      gridDefinition={[
        { colspan: { l: 8, m: 8, default: 12 } },
        { colspan: { l: 4, m: 4, default: 12 } },
        { colspan: { l: 6, m: 6, default: 12 } },
        { colspan: { l: 6, m: 6, default: 12 } },
        { colspan: { l: 6, m: 6, default: 12 } },
        { colspan: { l: 6, m: 6, default: 12 } },
        { colspan: { l: 6, m: 6, default: 12 } },
        { colspan: { l: 6, m: 6, default: 12 } },
        { colspan: { l: 8, m: 8, default: 12 } },
        { colspan: { l: 4, m: 4, default: 12 } },
      ]}
    >
      {/* col 1 */}
      <Container header={<Header description="Viewing data from N. Virginia region" variant="h2">Service overview - new</Header>} fitHeight={true}> <DashboardCards/></Container>

      {/* col 2 */}
      <Container header={<Header variant="h2">Service overview - new</Header>}><HealthCard/></Container>

      {/* col 3 */}
       <Container  header={
        <Header variant="h2">Cash vs Bank balance</Header>
       }> <MoneyRaisedChart/> </Container>
       
       {/* col 4 */}
       <Container header={
        <Header variant="h2">Donations Raised by type</Header>
       }><RaisedByType/></Container>
       <Container></Container>
       <Container></Container>
       <Container></Container>
       <Container></Container>
       <Container></Container>
       <Container></Container>
    </Grid>
  );
}