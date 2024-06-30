import { BreadcrumbGroup, ContentLayout, Header, Link } from '@cloudscape-design/components';
import React from 'react';

import Table from "@cloudscape-design/components/table";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import TextFilter from "@cloudscape-design/components/text-filter";
import Pagination from "@cloudscape-design/components/pagination";
import CollectionPreferences from "@cloudscape-design/components/collection-preferences";

const Beneficiary = () => {
  const [selectedItems, setSelectedItems] = React.useState([]);

  return (
    <ContentLayout 
      breadcrumbs={
        <BreadcrumbGroup
          items={[
            { text: "System", href: "#" },
            { text: "Components", href: "#components" },
            { text: "Breadcrumb group", href: "#components/breadcrumb-group" }
          ]}
          ariaLabel="Breadcrumbs"
        />
      }
      headerVariant='high-contrast' 
      header={<Header info={<Link variant='info'>Info</Link>} variant='h1'>Beneficiary</Header>}
    >
      <Table
        renderAriaLive={({ firstIndex, lastIndex, totalItemsCount }) =>
          `Displaying items ${firstIndex} to ${lastIndex} of ${totalItemsCount}`
        }
        onSelectionChange={({ detail }) =>
          setSelectedItems(detail.selectedItems)
        }
        selectedItems={selectedItems}
        ariaLabels={{
          selectionGroupLabel: "Items selection",
          allItemsSelectionLabel: ({ selectedItems }) =>
            `${selectedItems.length} ${selectedItems.length === 1 ? "item" : "items"} selected`,
          itemSelectionLabel: ({ selectedItems }, item) => item.name
        }}
        columnDefinitions={[
          { id: "beneficiaryId", header: "Beneficiary Id", cell: e => e.beneficiaryId, sortingField: "beneficiaryId", isRowHeader: true },
          { id: "name", header: "Name", cell: e => e.name, sortingField: "name" },
          { id: "email", header: "Email", cell: e => e.email, sortingField: "email" },
          { id: "adharNo", header: "Adhar No", cell: e => e.adharNo, sortingField: "adharNo" },
          { id: "mobileNo", header: "Mobile No", cell: e => e.mobileNo, sortingField: "mobileNo" },
          { id: "type", header: "Type", cell: e => e.type, sortingField: "type" },
          { id: "gender", header: "Gender", cell: e => e.gender, sortingField: "gender" },
          { id: "occupation", header: "Occupation", cell: e => e.occupation, sortingField: "occupation" },
          { id: "addedBy", header: "Added By", cell: e => e.addedBy, sortingField: "addedBy" },
          { id: "createdAt", header: "Created At", cell: e => e.createdAt, sortingField: "createdAt" }
        ]}
        columnDisplay={[
          { id: "beneficiaryId", visible: true },
          { id: "name", visible: true },
          { id: "email", visible: true },
          { id: "adharNo", visible: true },
          { id: "mobileNo", visible: true },
          { id: "type", visible: true },
          { id: "gender", visible: true },
          { id: "occupation", visible: true },
          { id: "addedBy", visible: true },
          { id: "createdAt", visible: true }
        ]}
        enableKeyboardNavigation
        items={[
          { beneficiaryId: "1", name: "John Doe", email: "john.doe@example.com", adharNo: "1234-5678-9012", mobileNo: "1234567890", type: "Type A", gender: "Male", occupation: "Engineer", addedBy: "Admin", createdAt: "2024-06-15" },
          { beneficiaryId: "2", name: "Jane Smith", email: "jane.smith@example.com", adharNo: "2345-6789-0123", mobileNo: "0987654321", type: "Type B", gender: "Female", occupation: "Doctor", addedBy: "Admin", createdAt: "2024-06-16" },
          { beneficiaryId: "3", name: "Alice Johnson", email: "alice.johnson@example.com", adharNo: "3456-7890-1234", mobileNo: "1122334455", type: "Type C", gender: "Female", occupation: "Teacher", addedBy: "Admin", createdAt: "2024-06-17" },
          { beneficiaryId: "4", name: "Bob Brown", email: "bob.brown@example.com", adharNo: "4567-8901-2345", mobileNo: "5566778899", type: "Type A", gender: "Male", occupation: "Artist", addedBy: "Admin", createdAt: "2024-06-18" },
          { beneficiaryId: "5", name: "Carol White", email: "carol.white@example.com", adharNo: "5678-9012-3456", mobileNo: "6677889900", type: "Type B", gender: "Female", occupation: "Musician", addedBy: "Admin", createdAt: "2024-06-19" }
        ]}
        loadingText="Loading resources"
        selectionType="multi"
        trackBy="beneficiaryId"
        empty={
          <Box margin={{ vertical: "xs" }} textAlign="center" color="inherit">
            <SpaceBetween size="m">
              <b>No resources</b>
              <Button>Add Beneficiary</Button>
            </SpaceBetween>
          </Box>
        }
        filter={
          <TextFilter filteringPlaceholder="Find resources" filteringText="" />
        }
        header={
          <Header
            counter={
              selectedItems.length
                ? `(${selectedItems.length}/10)`
                : "(10)"
            }
            actions={
              <SpaceBetween
                direction="horizontal"
                size="xs"
              >
                <Button variant="primary">Add Beneficiary</Button>
              </SpaceBetween>
            }
          >
            Records
          </Header>
        }
        pagination={
          <Pagination currentPageIndex={1} pagesCount={2} />
        }
        preferences={
          <CollectionPreferences
            title="Preferences"
            confirmLabel="Confirm"
            cancelLabel="Cancel"
            preferences={{
              pageSize: 10,
              contentDisplay: [
                { id: "beneficiaryId", visible: true },
                { id: "name", visible: true },
                { id: "email", visible: true },
                { id: "adharNo", visible: true },
                { id: "mobileNo", visible: true },
                { id: "type", visible: true },
                { id: "gender", visible: true },
                { id: "occupation", visible: true },
                { id: "addedBy", visible: true },
                { id: "createdAt", visible: true }
              ]
            }}
            pageSizePreference={{
              title: "Page size",
              options: [
                { value: 10, label: "10 resources" },
                { value: 20, label: "20 resources" }
              ]
            }}
            wrapLinesPreference={{}}
            stripedRowsPreference={{}}
            contentDensityPreference={{}}
            contentDisplayPreference={{
              options: [
                { id: "beneficiaryId", label: "Beneficiary Id", alwaysVisible: true },
                { id: "name", label: "Name" },
                { id: "email", label: "Email" },
                { id: "adharNo", label: "Adhar No" },
                { id: "mobileNo", label: "Mobile No" },
                { id: "type", label: "Type" },
                { id: "gender", label: "Gender" },
                { id: "occupation", label: "Occupation" },
                { id: "addedBy", label: "Added By" },
                { id: "createdAt", label: "Created At" }
              ]
            }}
            stickyColumnsPreference={{
              firstColumns: {
                title: "Stick first column(s)",
                description: "Keep the first column(s) visible while horizontally scrolling the table content.",
                options: [
                  { label: "None", value: 0 },
                  { label: "First column", value: 1 },
                  { label: "First two columns", value: 2 }
                ]
              },
              lastColumns: {
                title: "Stick last column",
                description: "Keep the last column visible while horizontally scrolling the table content.",
                options: [
                  { label: "None", value: 0 },
                  { label: "Last column", value: 1 }
                ]
              }
            }}
          />
        }
      />
    </ContentLayout>
  );
};

export default Beneficiary;
