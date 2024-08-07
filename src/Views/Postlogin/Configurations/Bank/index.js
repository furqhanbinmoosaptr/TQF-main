import { ButtonDropdown, ContentLayout, Header, Link } from '@cloudscape-design/components'
import React from 'react'
import Table from "@cloudscape-design/components/table";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import TextFilter from "@cloudscape-design/components/text-filter";
import Pagination from "@cloudscape-design/components/pagination";
import CollectionPreferences from "@cloudscape-design/components/collection-preferences";

const Bank = () => {
  const [selectedItems, setSelectedItems] = React.useState([]);

  const data = [
    { id: 1, bankName: "ICICI Domestic", slug: "ICICI-D", accountNumber: "968500125285" },
    { id: 2, bankName: "ICICI International", slug: "ICICI FCRA", accountNumber: "002036325250" },
    { id: 3, bankName: "State Bank Of India", slug: "SBI", accountNumber: "02000225588" },
  ];

  return (
    <ContentLayout 
      headerVariant='high-contrast' 
      header={<Header variant='h1' info={<Link variant='info'>Info</Link>}>Bank</Header>}
    >
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
          itemSelectionLabel: ({ selectedItems }, item) => item.bankName,
        }}
        columnDefinitions={[
          {
            id: "bankName",
            header: "Bank Name",
            cell: e => e.bankName,
            sortingField: "bankName",
            isRowHeader: true,
          },
          {
            id: "slug",
            header: "Slug",
            cell: e => e.slug,
            sortingField: "slug",
          },
          {
            id: "accountNumber",
            header: "Account Number",
            cell: e => e.accountNumber,
            sortingField: "accountNumber",
          },
        ]}
        columnDisplay={[
          { id: "bankName", visible: true },
          { id: "slug", visible: true },
          { id: "accountNumber", visible: true },
        ]}
        enableKeyboardNavigation
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
        filter={<TextFilter filteringPlaceholder="Find bank" filteringText="" />}
        header={
          <Header
            counter={selectedItems.length ? `(${selectedItems.length}/3)` : "(3)"}
            actions={
              <SpaceBetween direction="horizontal" size="xs">
                   <ButtonDropdown
                items={[
                 
                  {
                    text: "Edit",
                    id: "mv",
                    disabled: false
                  },
                  {
                    text: "Delete",
                    id: "rn",
                    disabled: false
                  }
                ]}
              >
                Actions
              </ButtonDropdown>
                <Button variant="primary">Add Bank</Button>
              </SpaceBetween>
            }
          >
            Bank Records
          </Header>
        }
        pagination={<Pagination currentPageIndex={1} pagesCount={1} />}
        preferences={
          <CollectionPreferences
            title="Preferences"
            confirmLabel="Confirm"
            cancelLabel="Cancel"
            preferences={{
              pageSize: 10,
              contentDisplay: [
                { id: "bankName", visible: true },
                { id: "slug", visible: true },
                { id: "accountNumber", visible: true },
              ],
            }}
            pageSizePreference={{
              title: "Page size",
              options: [
                { value: 10, label: "10 resources" },
                { value: 20, label: "20 resources" },
              ],
            }}
            wrapLinesPreference={{}}
            stripedRowsPreference={{}}
            contentDensityPreference={{}}
            contentDisplayPreference={{
              options: [
                { id: "bankName", label: "Bank Name", alwaysVisible: true },
                { id: "slug", label: "Slug" },
                { id: "accountNumber", label: "Account Number" },
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
                options: [
                  { label: "None", value: 0 },
                  { label: "Last column", value: 1 },
                ],
              },
            }}
          />
        }
      />
    </ContentLayout>
  );
}

export default Bank;
