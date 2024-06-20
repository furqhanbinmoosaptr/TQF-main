import React, { useState } from 'react';
import {
  AppLayout,
  BreadcrumbGroup,
  Button,
  Container,
  ContentLayout,
  FileUpload,
  Flashbar,
  Form,
  FormField,
  Grid,
  Header,
  HelpPanel,
  Input,
  Link,
  SideNavigation,
  SpaceBetween,
  SplitPanel,
  Textarea,
} from '@cloudscape-design/components';

const ESPform = () => {
    
const [value, setValue] = useState([]);
const [adharrNum, SetAdhaarNum] = useState('');
const [rationNum, SetRationNum] = useState('');
const [mobNum, setMobNum] = useState('');

const handleAdhaarChange = (event) => {
  const value = event.detail.value;
  if (/^\d  *$/.test(value)) { // Allow only digits
    SetAdhaarNum(value);
  }
};

const handleRationChange = (event) => {
  const value = event.detail.value;
  if (/^\d*$/.test(value)) { // Allow only digits
    SetRationNum(value);
  }
};

const handleMobChange = (event) => {
  const value = event.detail.value;
  if (/^\d*$/.test(value)) { // Allow only digits
    setMobNum(value);
  }
};

  return (
    <div className="form-container">
    <Container>
      <form onSubmit={e => e.preventDefault()}>
        <Form
          variant="embedded"
          actions={
            <SpaceBetween direction="horizontal" size="xs">
              <Button formAction="none" Link="#dashboard" variant="link">
                Cancel
              </Button>
              <Button variant="primary">Save Application</Button>
            </SpaceBetween>
          }
          header={<Header variant="h3">Add New Application</Header>}
        >
          <Grid gridDefinition={[{ colspan: { default: 12, s: 6, l: 4 } }]}>
            <FormField label="Event Name*">
              <Input value={adharrNum} onChange={handleAdhaarChange} placeholder='Event Name' />
            </FormField>
            <FormField label="Event Manager*">
              <Input value={rationNum} onChange={handleRationChange} placeholder='Event Manager Name' />
            </FormField>
            <FormField label="Event Location*">
              <Input value={mobNum} onChange={handleMobChange} placeholder='Add Event Location' />
            </FormField>
            <FormField label="Event Description*">
              <Textarea placeholder='Add Event Description' />
            </FormField>
            <FormField label="Add Event Thumbnail*">
              <FileUpload
                onChange={({ detail }) => setValue(detail.value)}
                value={value}
                i18nStrings={{
                  uploadButtonText: e => e ? "Choose files" : "Choose file",
                  dropzoneText: e => e ? "Drop files to upload" : "Drop file to upload",
                  removeFileAriaLabel: e => `Remove file ${e + 1}`,
                  limitShowFewer: "Show fewer files",
                  limitShowMore: "Show more files",
                  errorIconAriaLabel: "Error"
                }}
                showFileLastModified
                showFileSize
                showFileThumbnail
                tokenLimit={3}
              />
            </FormField>
          </Grid>
        </Form>
      </form>
    </Container>
    <style jsx>{`
      .form-container {
        padding: 20px;
      }
      @media (max-width: 768px) {
        .form-container {
          padding: 10px;
        }
      }
    `}</style>
  </div>
  )
}

export default ESPform