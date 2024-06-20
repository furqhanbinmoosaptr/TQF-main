import React, { useState } from 'react';
import {
  AppLayout,
  BreadcrumbGroup,
  Button,
  Container,
  ContentLayout,
  Flashbar,
  Form,
  FormField,
  Header,
  HelpPanel,
  Input,
  Link,
  SideNavigation,
  SpaceBetween,
  SplitPanel,
  Grid
} from '@cloudscape-design/components';

const Search = () => {
  const [adharrNum, setAdhaarNum] = useState('');
  const [rationNum, setRationNum] = useState('');
  const [mobNum, setMobNum] = useState('');

  const handleAdhaarChange = (event) => {
    const value = event.detail.value;
    if (/^\d*$/.test(value)) { // Allow only digits
      setAdhaarNum(value);
    }
  };

  const handleRationChange = (event) => {
    const value = event.detail.value;
    if (/^\d*$/.test(value)) { // Allow only digits
      setRationNum(value);
    }
  };

  const handleMobChange = (event) => {
    const value = event.detail.value;
    if (/^\d*$/.test(value)) { // Allow only digits
      setMobNum(value);
    }
  };

  return (
<ContentLayout
breadcrumbs={
  <BreadcrumbGroup
  items={[
    { text: "Home", href: "#" },
    { text: "Search", href: "#components" },
  ]}
  ariaLabel="Breadcrumbs"
/>
}
header={
  <Header  variant='h1'>
    Search Beneficiary 
  </Header>
}>
    <div>
      <Container>
        <form onSubmit={e => e.preventDefault()}>
          <Form
            variant="embedded"
            actions={
              <SpaceBetween direction="horizontal" size="xs">
                <Button formAction="none" Link="#dashboard">
                  Cancel
                </Button>
                <Button variant="primary">Search</Button>
              </SpaceBetween>
            }
            header={<Header variant="h3">Search Information</Header>}
          >
            <Grid gridDefinition={[{ colspan: { default: 12, s: 6 } }, { colspan: { default: 12, s: 6 } }]}>
              <FormField label="Search Adhar Number*">
                <Input type='number' value={adharrNum} onChange={handleAdhaarChange} placeholder='Please enter beneficiary adhar number' />
              </FormField>
              <FormField label="Search Ration Number*">
                <Input type='number' value={rationNum} onChange={handleRationChange} placeholder='Please enter beneficiary adhar number' />
              </FormField>
              <FormField label="Search Mobile Number*">
                <Input type='number' value={mobNum} onChange={handleMobChange} placeholder='Search Mobile Number' />
              </FormField>
              <FormField label="Search By Reference*">
                <Input type='number' placeholder='Search Reference Name' />
              </FormField>
            </Grid>
          </Form>
        </form>
      </Container>

      <div style={{marginTop:14}}>
        <Container>
          No Search Results.....
        </Container>
      </div>
    </div>
    </ContentLayout>

  );
}

export default Search;
