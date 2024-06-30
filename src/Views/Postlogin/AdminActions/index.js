import { ContentLayout, Link } from '@cloudscape-design/components';
import React from 'react';
import Table from "@cloudscape-design/components/table";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import TextFilter from "@cloudscape-design/components/text-filter";
import Header from "@cloudscape-design/components/header";
import ButtonDropdown from "@cloudscape-design/components/button-dropdown";
import Pagination from "@cloudscape-design/components/pagination";
import CollectionPreferences from "@cloudscape-design/components/collection-preferences";

const AdminActions = () => {
  const [selectedItems, setSelectedItems] = React.useState([]);

  const data = [
    { id: 1, user: "TQF Admin", email: "tqfadmin@gmail.com", createdAt: "01, Jan 1970 | 12 : 00 : 00 AM", contactNumber: "+91 9876543210" },
    { id: 2, user: "Wahed Ali Khan", email: "tqfwahed@gmail.com", createdAt: "22, Nov 2021 | 05 : 21 : 53 PM", contactNumber: "+91 9876543211" },
    { id: 3, user: "Shaik Akhter Ahmed", email: "akhterahmed65@gmail.com", createdAt: "22, Nov 2021 | 05 : 32 : 26 PM", contactNumber: "+91 9876543212" },
    { id: 4, user: "Mir Mohsin Ali", email: "eidiko.mohsinali@gmail.com", createdAt: "27, Aug 2022 | 12 : 51 : 00 PM", contactNumber: "+91 9876543213" },
    { id: 5, user: "Shakil Shaikh", email: "shakiltqf@gmail.com", createdAt: "15, Oct 2022 | 12 : 21 : 54 PM", contactNumber: "+91 9876543214" },
    { id: 6, user: "Nain Shaikh", email: "naintqf@gmail.com", createdAt: "15, Oct 2022 | 12 : 24 : 23 PM", contactNumber: "+91 9876543215" },
    { id: 7, user: "Moin Shaikh", email: "mointqf@gmail.com", createdAt: "15, Oct 2022 | 12 : 26 : 46 PM", contactNumber: "+91 9876543216" },
  ];

  return (
    <ContentLayout headerVariant='high-contrast' header={<Header variant='h1' info={<Link variant='info'>Info</Link>}>Admin Actions</Header>}>
      <Table
        renderAriaLive={({ firstIndex, lastIndex, totalItemsCount }) =>
          `Displaying items ${firstIndex} to ${lastIndex} of ${totalItemsCount}`
        }
        onSelectionChange={({ detail }) => setSelectedItems(detail.selectedItems)}
        selectedItems={selectedItems}
        ariaLabels={{
          selectionGroupLabel: "Items selection",
          allItemsSelectionLabel: ({ selectedItems }) =>
            `${selectedItems.length} ${selectedItems.length === 1 ? "item" : "items"} selected`,
          itemSelectionLabel: ({ selectedItems }, item) => item.user,
        }}
        columnDefinitions={[
          { id: "id", header: "Id", cell: e => e.id, sortingField: "id", isRowHeader: true },
          { id: "user", header: "User", cell: e => e.user, sortingField: "user" },
          { id: "email", header: "Email", cell: e => e.email, sortingField: "email" },
          { id: "createdAt", header: "Created At", cell: e => e.createdAt, sortingField: "createdAt" },
          { id: "contactNumber", header: "Contact Number", cell: e => e.contactNumber, sortingField: "contactNumber" },
        ]}
        columnDisplay={[
          { id: "id", visible: true },
          { id: "user", visible: true },
          { id: "email", visible: true },
          { id: "createdAt", visible: true },
          { id: "contactNumber", visible: true },
        ]}
        items={data}
        loadingText="Loading resources"
        selectionType="multi"
        trackBy="id"
        empty={
          <Box margin={{ vertical: "xs" }} textAlign="center" color="inherit">
            <SpaceBetween size="m">
              <b>No resources</b>
              <Button>Create resource</Button>
            </SpaceBetween>
          </Box>
        }
        filter={
          <TextFilter filteringPlaceholder="Find resources" filteringText="" />
        }
        header={
          <Header
            counter={selectedItems.length ? `(${selectedItems.length}/7)` : "(7)"}
            actions={
              <SpaceBetween direction="horizontal" size="xs">
                <ButtonDropdown
                  items={[
                    { text: "Edit", id: "mv", disabled: false },
                    { text: "Delete", id: "rn", disabled: false },
                  ]}
                >
                  Actions
                </ButtonDropdown>
                <Button variant="primary">Add Member</Button>
              </SpaceBetween>
            }
          >
            Admin Users
          </Header>
        }
        pagination={<Pagination currentPageIndex={1} pagesCount={1} />}
        preferences={
          <CollectionPreferences
            title="Preferences"
            confirmLabel="Confirm"
            cancelLabel="Cancel"
            preferences={{ pageSize: 10, contentDisplay: [
              { id: "id", visible: true },
              { id: "user", visible: true },
              { id: "email", visible: true },
              { id: "createdAt", visible: true },
              { id: "contactNumber", visible: true },
            ] }}
            pageSizePreference={{ title: "Page size", options: [{ value: 10, label: "10 resources" }] }}
            wrapLinesPreference={{}}
            stripedRowsPreference={{}}
            contentDensityPreference={{}}
            contentDisplayPreference={{
              options: [
                { id: "id", label: "Id", alwaysVisible: true },
                { id: "user", label: "User" },
                { id: "email", label: "Email" },
                { id: "createdAt", label: "Created At" },
                { id: "contactNumber", label: "Contact Number" },
              ],
            }}
            stickyColumnsPreference={{
              firstColumns: {
                title: "Stick first column(s)",
                description: "Keep the first column(s) visible while horizontally scrolling the table content.",
                options: [
                  { label: "None", value: 0 },
                  { label: "First column", value: 1 },
                  { label: "First two columns", value: 2 },
                ],
              },
              lastColumns: {
                title: "Stick last column",
                description: "Keep the last column visible while horizontally scrolling the table content.",
                options: [{ label: "None", value: 0 }, { label: "Last column", value: 1 }],
              },
            }}
          />
        }
      />
    </ContentLayout>
  );
};

export default AdminActions;
