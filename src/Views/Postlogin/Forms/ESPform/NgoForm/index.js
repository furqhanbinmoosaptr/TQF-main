import React from 'react';
import {
  Form,
  SpaceBetween,
  Container,
  Grid,
  Input,
  Select,
  Button
} from '@cloudscape-design/components';

const NGOForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <SpaceBetween size="m">
          <h1>Add NGO Form</h1>
          <Grid
            gridDefinition={[
              { colspan: { default: 12, m: 6 } },
              { colspan: { default: 12, m: 6 } },
            ]}
          >
            <Input
              placeholder="Enter NGO name"
              label="NGO Name"
              required
            />
            <Input
              placeholder="Enter registration number"
              label="Registration Number"
              required
            />
            <Input
              placeholder="Enter contact person name"
              label="Contact Person"
              required
            />
            <Input
              placeholder="Enter contact email"
              label="Contact Email"
              type="email"
              required
            />
            <Input
              placeholder="Enter contact phone number"
              label="Contact Phone"
              type="tel"
              required
            />
            <Input
              placeholder="Enter address"
              label="Address"
              required
            />
            <Input
              placeholder="Enter city"
              label="City"
              required
            />
            <Input
              placeholder="Enter postal code"
              label="Postal Code"
              type="number"
              required
            />
            <Select
              placeholder="Select state"
              label="State"
              options={[
                { label: 'State 1', value: 'state_1' },
                { label: 'State 2', value: 'state_2' },
                // Add more states as needed
              ]}
              required
            />
            <Select
              placeholder="Select country"
              label="Country"
              options={[
                { label: 'Country 1', value: 'country_1' },
                { label: 'Country 2', value: 'country_2' },
                // Add more countries as needed
              ]}
              required
            />
            <Input
              placeholder="Enter NGO description"
              label="Description"
              required
            />
            <Input
              placeholder="Enter website URL"
              label="Website URL"
              type="url"
            />
            <Input
              placeholder="Enter date of establishment"
              label="Date of Establishment"
              type="date"
              required
            />
            <Input
              placeholder="Enter mission statement"
              label="Mission Statement"
              required
            />
            <Input
              placeholder="Enter area of operation"
              label="Area of Operation"
              required
            />
          </Grid>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </SpaceBetween>
      </Form>
    </Container>
  );
};

export default NGOForm;
