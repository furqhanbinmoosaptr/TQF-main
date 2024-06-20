import React, { useState } from 'react';
import {
  AppLayout,
  ContentLayout,
  Container,
  Header,
  FormField,
  Input,
  Select,
  Textarea,
  Button,
  SpaceBetween,
  Grid,
} from '@cloudscape-design/components';

const AddPettyCash = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [currency, setCurrency] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({ amount, description, date, category, currency, notes });
  };

  return (
  
    
          <Container>
            <form onSubmit={handleSubmit}>
              <Grid
                gridDefinition={[
                  { colspan: { default: 12, xs: 6, s: 6, m: 4, l: 3 } },
                  { colspan: { default: 12, xs: 6, s: 6, m: 4, l: 3 } },
                  { colspan: { default: 12, xs: 6, s: 6, m: 4, l: 3 } },
                  { colspan: { default: 12, xs: 6, s: 6, m: 4, l: 3 } },
                  { colspan: { default: 12, xs: 6, s: 6, m: 4, l: 3 } },
                  { colspan: { default: 12, xs: 6, s: 6, m: 4, l: 3 } },
                ]}
              >
                <FormField
                  label="Amount"
                  description="Enter the amount of petty cash"
                  errorText=""
                >
                  <Input
                    type="number"
                    value={amount}
                    onChange={({ detail }) => setAmount(detail.value)}
                    placeholder="Enter amount"
                  />
                </FormField>
                <FormField
                  label="Description"
                  description="Enter a description for the petty cash"
                  errorText=""
                >
                  <Input
                    value={description}
                    onChange={({ detail }) => setDescription(detail.value)}
                    placeholder="Enter description"
                  />
                </FormField>
                <FormField
                  label="Date"
                  description="Enter the date for the petty cash"
                  errorText=""
                >
                  <Input
                    type="date"
                    value={date}
                    onChange={({ detail }) => setDate(detail.value)}
                  />
                </FormField>
                <FormField
                  label="Category"
                  description="Select the category of petty cash"
                  errorText=""
                >
                  <Select
                    selectedOption={category}
                    onChange={({ detail }) => setCategory(detail.selectedOption)}
                    options={[
                      { label: "Supplies", value: "supplies" },
                      { label: "Travel", value: "travel" },
                      { label: "Food", value: "food" },
                      { label: "Other", value: "other" },
                    ]}
                    placeholder="Select category"
                  />
                </FormField>
                <FormField
                  label="Currency"
                  description="Enter the currency for the petty cash"
                  errorText=""
                >
                  <Input
                    value={currency}
                    onChange={({ detail }) => setCurrency(detail.value)}
                    placeholder="Enter currency"
                  />
                </FormField>
                <FormField
                  label="Notes"
                  description="Enter any additional notes"
                  errorText=""
                >
                  <Textarea
                    value={notes}
                    onChange={({ detail }) => setNotes(detail.value)}
                    placeholder="Enter notes"
                  />
                </FormField>
              </Grid>
              <SpaceBetween size="l">
                <Button variant="primary" type="submit">
                  Add Petty Cash
                </Button>
              </SpaceBetween>
            </form>
          </Container>  
  );
};

export default AddPettyCash;
