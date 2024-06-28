import React, { useState } from 'react';
import Table from "@cloudscape-design/components/table";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import Header from "@cloudscape-design/components/header";
import Pagination from "@cloudscape-design/components/pagination";
import TextFilter from "@cloudscape-design/components/text-filter";
import CollectionPreferences from "@cloudscape-design/components/collection-preferences";
import { BreadcrumbGroup, ContentLayout, Select } from '@cloudscape-design/components';

const AdminActions = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <ContentLayout
      headerVariant='high-contrast'
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
      header={<Header variant='h1'>Admin Actions</Header>}
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
          {
            id: "name",
            header: "Name",
            cell: item => item.name,
            isRowHeader: true
          },
          {
            id: "phone",
            header: "Phone Number",
            cell: item => item.phone,
          },
          {
            id: "email",
            header: "Email",
            cell: item => item.email,
          },
          {
            id: "role",
            header: "Role",
            cell: item => item.role,
            editConfig: {
              ariaLabel: "Role",
              editIconAriaLabel: "editable",
              editingCell: (item, { currentValue, setValue }) => {
                const value = currentValue ?? item.role;
                return (
                  <Select
                    autoFocus={true}
                    expandToViewport={true}
                    selectedOption={
                      [
                        { label: "Member", value: "Member" },
                        { label: "Treasurer", value: "Treasurer" },
                        { label: "Secretary", value: "Secretary" },
                        { label: "President", value: "President" }
                      ].find(option => option.value === value) ?? null
                    }
                    onChange={event => setValue(event.detail.selectedOption.value ?? item.role)}
                    options={[
                      { label: "Member", value: "Member" },
                      { label: "Treasurer", value: "Treasurer" },
                      { label: "Secretary", value: "Secretary" },
                      { label: "President", value: "President" }
                    ]}
                  />
                );
              }
            }
          },
          {
            id: "actions",
            header: "Actions",
            cell: item => (
              <SpaceBetween direction="horizontal" size="s">
                <Button variant='icon' iconName='edit'>Edit</Button>
                <Button variant='icon' iconName='remove'>Delete</Button>
              </SpaceBetween>
            )
          }
        ]}
        columnDisplay={[
          { id: "name", visible: true },
          { id: "phone", visible: true },
          { id: "email", visible: true },
          { id: "role", visible: true },
          { id: "actions", visible: true }
        ]}
        enableKeyboardNavigation
        items={[
          {
            name: "John Doe",
            phone: "123-456-7890",
            email: "john@example.com",
            role: "Member"
          },
          {
            name: "Jane Smith",
            phone: "098-765-4321",
            email: "jane@example.com",
            role: "Treasurer"
          },
          {
            name: "Robert Johnson",
            phone: "555-555-5555",
            email: "robert@example.com",
            role: "Secretary"
          },
          {
            name: "Emily Davis",
            phone: "444-444-4444",
            email: "emily@example.com",
            role: "President"
          }
        ]}
        loadingText="Loading resources"
        selectionType="multi"
        trackBy="name"
        empty={
          <Box margin={{ vertical: "xs" }} textAlign="center" color="inherit">
            <SpaceBetween size="m">
              <b>No members</b>
              <Button>Create member</Button>
            </SpaceBetween>
          </Box>
        }
        filter={
          <TextFilter
            filteringPlaceholder="Find members"
            filteringText=""
          />
        }
        header={
          <Header
            counter={
              selectedItems.length
                ? `(${selectedItems.length}/10)`
                : "(10)"
            }
          >
            NGO Members and Roles
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
                { id: "name", visible: true },
                { id: "phone", visible: true },
                { id: "email", visible: true },
                { id: "role", visible: true },
                { id: "actions", visible: true }
              ]
            }}
            pageSizePreference={{
              title: "Page size",
              options: [
                { value: 10, label: "10 members" },
                { value: 20, label: "20 members" }
              ]
            }}
            wrapLinesPreference={{}}
            stripedRowsPreference={{}}
            contentDensityPreference={{}}
            contentDisplayPreference={{
              options: [
                {
                  id: "name",
                  label: "Name",
                  alwaysVisible: true
                },
                { id: "phone", label: "Phone Number" },
                { id: "email", label: "Email" },
                { id: "role", label: "Role" },
                { id: "actions", label: "Actions" }
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

export default AdminActions;
