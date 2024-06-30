import {
  Box,
  Button,
  Input,
  BreadcrumbGroup,
  ContentLayout,
  DatePicker,
  Form,
  FormField,
  Header,
  Link,
  SpaceBetween,
  Container,
  Grid,
} from '@cloudscape-design/components';
import React, { useState } from 'react';

const AddPettyCash = () => {
  const [formData, setFormData] = useState({
    withdrawnFrom: '',
    withdrawalAmount: '',
    withdrawnBy: '',
    withdrawalDate: '',
    purpose: '',
    approvedBy: '',
    remarks: '',
  });

  const handleInputChange = ({ detail }) => {
    const { name, value } = detail;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = ({ detail }) => {
    setFormData({
      ...formData,
      withdrawalDate: detail.value,
    });
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log(formData);
  };

  return (
    <ContentLayout
      headerVariant="high-contrast"
      breadcrumbs={
        <BreadcrumbGroup
          items={[
            { text: 'Home', href: '#' },
            { text: 'Expenses', href: '#' },
            { text: 'Add Petty Cash', href: '#components' },
          ]}
          ariaLabel="Breadcrumbs"
        />
      }
      header={
        <Header info={<Link variant="info">Info</Link>} variant="h1">
          Add Petty Cash
        </Header>
      }
    >
      <Container>
        <Form
          actions={
            <SpaceBetween direction="horizontal" size="xs">
              <Button variant="link">Cancel</Button>
              <Button variant="primary" onClick={handleSubmit}>
                Submit
              </Button>
            </SpaceBetween>
          }
        >
          <Grid gridDefinition={[{ colspan: 3 }, { colspan: 3 }, { colspan: 3 }, { colspan: 3 }]}>
            <FormField label="Withdrawn From" description="Source of the petty cash withdrawal">
              <Input
                name="withdrawnFrom"
                value={formData.withdrawnFrom}
                onChange={handleInputChange}
                placeholder="Enter source"
              />
            </FormField>
            <FormField label="Withdrawal Amount" description="Amount of petty cash withdrawn" required>
              <Input
                name="withdrawalAmount"
                type="number"
                value={formData.withdrawalAmount}
                onChange={handleInputChange}
                placeholder="Enter amount"
              />
            </FormField>
            <FormField label="Withdrawn By" description="Person who is withdrawing the petty cash" required>
              <Input
                name="withdrawnBy"
                value={formData.withdrawnBy}
                onChange={handleInputChange}
                placeholder="Enter name"
              />
            </FormField>
            <FormField label="Withdrawal Date" description="Date of the petty cash withdrawal" required>
              <DatePicker
                value={formData.withdrawalDate}
                onChange={handleDateChange}
                placeholder="Select date"
              />
            </FormField>
            <FormField label="Purpose" description="Purpose of the petty cash withdrawal">
              <Input
                name="purpose"
                value={formData.purpose}
                onChange={handleInputChange}
                placeholder="Enter purpose"
              />
            </FormField>
            <FormField label="Approved By" description="Person who approved the petty cash withdrawal">
              <Input
                name="approvedBy"
                value={formData.approvedBy}
                onChange={handleInputChange}
                placeholder="Enter name"
              />
            </FormField>
            <FormField label="Remarks" description="Additional remarks or notes">
              <Input
                name="remarks"
                value={formData.remarks}
                onChange={handleInputChange}
                placeholder="Enter remarks"
              />
            </FormField>
          </Grid>
        </Form>
      </Container>
    </ContentLayout>
  );
};

export default AddPettyCash;
