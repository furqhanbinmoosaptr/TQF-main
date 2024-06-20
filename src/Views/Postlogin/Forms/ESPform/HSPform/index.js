import React, { useState } from 'react';
import {
  Container,
  Header,
  Grid,
  FormField,
  Input,
  DatePicker,
  Select,
  Button,
} from '@cloudscape-design/components';

const HSPform = () => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    address1: '',
    address2: '',
    landmark: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    interests: [],
    volunteerType: '',
    title: '',
    occupation: '',
    qualification: '',
    industry: '',
    alternatePhone: '',
    adharNumber: '',
    panNumber: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      dateOfBirth: date,
    }));
  };

  const handleSelectChange = ({ detail }, field) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [field]: detail.selectedOption.value,
    }));
  };

  const handleInterestsChange = ({ detail }) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      interests: detail.selectedOptions.map(option => option.value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission
    console.log('Form Submitted', formValues);
  };

  return (
    <Container
      header={
        <Header variant="h1" description="Fill out the form to add a new volunteer">
          Add Volunteer
        </Header>
      }
    >
      <form onSubmit={handleSubmit}>
        <Grid gridDefinition={[{ colspan: { default: 4 } }, { colspan: { default: 4 } }, { colspan: { default: 4 } }]}>
          <FormField label="First Name" description="Enter the volunteer's first name" required>
            <Input name="firstName" value={formValues.firstName} onChange={handleInputChange} placeholder="First Name" />
          </FormField>
          <FormField label="Last Name" description="Enter the volunteer's last name" required>
            <Input name="lastName" value={formValues.lastName} onChange={handleInputChange} placeholder="Last Name" />
          </FormField>
          <FormField label="Email Address" description="Enter the volunteer's email address" required>
            <Input type="email" name="email" value={formValues.email} onChange={handleInputChange} placeholder="Email Address" />
          </FormField>
        </Grid>

        <Grid gridDefinition={[{ colspan: { default: 4 } }, { colspan: { default: 4 } }, { colspan: { default: 4 } }]}>
          <FormField label="Phone Number" description="Enter the volunteer's phone number" required>
            <Input type="tel" name="phone" value={formValues.phone} onChange={handleInputChange} placeholder="Phone Number" />
          </FormField>
          <FormField label="Alternate Mobile Number" description="Enter the volunteer's alternate phone number">
            <Input type="tel" name="alternatePhone" value={formValues.alternatePhone} onChange={handleInputChange} placeholder="Alternate Mobile Number" />
          </FormField>
          <FormField label="Date of Birth" description="Select the volunteer's date of birth" required>
            <DatePicker value={formValues.dateOfBirth} onChange={({ detail }) => handleDateChange(detail.value)} placeholder="YYYY/MM/DD" />
          </FormField>
        </Grid>

        <Grid gridDefinition={[{ colspan: { default: 4 } }, { colspan: { default: 4 } }, { colspan: { default: 4 } }]}>
          <FormField label="Gender" description="Select the volunteer's gender" required>
            <Select
              selectedOption={{ label: formValues.gender || 'Select Gender', value: formValues.gender }}
              onChange={(e) => handleSelectChange(e, 'gender')}
              options={[
                { label: "Male", value: "male" },
                { label: "Female", value: "female" },
                { label: "Other", value: "other" }
              ]}
              placeholder="Select Gender"
            />
          </FormField>
          <FormField label="Volunteer Type" description="Select the volunteer type" required>
            <Select
              selectedOption={{ label: formValues.volunteerType || 'Select Type', value: formValues.volunteerType }}
              onChange={(e) => handleSelectChange(e, 'volunteerType')}
              options={[
                { label: "Full-Time", value: "full_time" },
                { label: "Part-Time", value: "part_time" },
                { label: "Intern", value: "intern" }
              ]}
              placeholder="Select Type"
            />
          </FormField>
          <FormField label="Title" description="Enter the volunteer's title" required>
            <Input name="title" value={formValues.title} onChange={handleInputChange} placeholder="Title" />
          </FormField>
        </Grid>

        <Grid gridDefinition={[{ colspan: { default: 4 } }, { colspan: { default: 4 } }, { colspan: { default: 4 } }]}>
          <FormField label="Occupation" description="Enter the volunteer's occupation" required>
            <Input name="occupation" value={formValues.occupation} onChange={handleInputChange} placeholder="Occupation" />
          </FormField>
          <FormField label="Qualification" description="Enter the volunteer's qualification" required>
            <Input name="qualification" value={formValues.qualification} onChange={handleInputChange} placeholder="Qualification" />
          </FormField>
          <FormField label="Industry" description="Enter the volunteer's industry" required>
            <Input name="industry" value={formValues.industry} onChange={handleInputChange} placeholder="Industry" />
          </FormField>
        </Grid>

        <Grid gridDefinition={[{ colspan: { default: 6 } }, { colspan: { default: 6 } }]}>
          <FormField label="Adhar Number" description="Enter the volunteer's Adhar number" required>
            <Input name="adharNumber" value={formValues.adharNumber} onChange={handleInputChange} placeholder="Adhar Number" />
          </FormField>
          <FormField label="Pan Number" description="Enter the volunteer's Pan number" required>
            <Input name="panNumber" value={formValues.panNumber} onChange={handleInputChange} placeholder="Pan Number" />
          </FormField>
        </Grid>

        <Grid gridDefinition={[{ colspan: { default: 6 } }, { colspan: { default: 6 } }]}>
          <FormField label="Address Line 1" description="Enter the volunteer's address line 1" required>
            <Input name="address1" value={formValues.address1} onChange={handleInputChange} placeholder="Address Line 1" />
          </FormField>
          <FormField label="Address Line 2" description="Enter the volunteer's address line 2">
            <Input name="address2" value={formValues.address2} onChange={handleInputChange} placeholder="Address Line 2" />
          </FormField>
        </Grid>

        <Grid gridDefinition={[{ colspan: { default: 4 } }, { colspan: { default: 4 } }, { colspan: { default: 4 } }]}>
          <FormField label="Landmark" description="Enter the volunteer's landmark">
            <Input name="landmark" value={formValues.landmark} onChange={handleInputChange} placeholder="Landmark" />
          </FormField>
          <FormField label="Country" description="Enter the volunteer's country" required>
            <Input name="country" value={formValues.country} onChange={handleInputChange} placeholder="Country" />
          </FormField>
          <FormField label="State" description="Enter the volunteer's state" required>
            <Input name="state" value={formValues.state} onChange={handleInputChange} placeholder="State" />
          </FormField>
        </Grid>

        <Grid gridDefinition={[{ colspan: { default: 6 } }, { colspan: { default: 6 } }]}>
          <FormField label="City" description="Enter the volunteer's city" required>
            <Input name="city" value={formValues.city} onChange={handleInputChange} placeholder="City" />
          </FormField>
          <FormField label="Postal Code" description="Enter the volunteer's postal code" required>
            <Input name="postalCode" value={formValues.postalCode} onChange={handleInputChange} placeholder="Postal Code" />
          </FormField>
        </Grid>

        <FormField label="Volunteer Interests" description="Select the volunteer's areas of interest" required>
          <Select
            selectedOptions={formValues.interests.map(interest => ({ label: interest, value: interest }))}
            onChange={handleInterestsChange}
            options={[
              { label: "Education", value: "education" },
              { label: "Health", value: "health" },
              { label: "Environment", value: "environment" },
              { label: "Community Service", value: "community_service" }
            ]}
            placeholder="Select Interests"
            multiple
          />
        </FormField>

        <Button variant="primary" type="submit">Add Volunteer</Button>
      </form>
    </Container>
  );
};

export default HSPform;
