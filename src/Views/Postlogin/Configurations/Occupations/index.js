import { BreadcrumbGroup, ButtonDropdown, ContentLayout, Link } from '@cloudscape-design/components';
import React from 'react';
import Table from "@cloudscape-design/components/table";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import TextFilter from "@cloudscape-design/components/text-filter";
import Header from "@cloudscape-design/components/header";
import Pagination from "@cloudscape-design/components/pagination";
import CollectionPreferences from "@cloudscape-design/components/collection-preferences";

const Occupations = () => {
  const [selectedItems, setSelectedItems] = React.useState([]);

  const items = [
    { id: "1", occupationName: "Automotive" },
    { id: "2", occupationName: "Healthcare" },
    { id: "3", occupationName: "Finance" },
    { id: "4", occupationName: "Technology" },
    { id: "5", occupationName: "Construction" },
    { id: "6", occupationName: "Retail" },
    { id: "7", occupationName: "Education" },
    { id: "8", occupationName: "Real Estate" },
    { id: "9", occupationName: "Energy" },
    { id: "10", occupationName: "Telecommunications" },
  ];

  return (
    <ContentLayout 
      breadcrumbs={
        <BreadcrumbGroup
          items={[
            { text: "Home", href: "#" },
            { text: "Configurations", href: "#components" },
            {
              text: "Occupations",
              href: "#components/breadcrumb-group"
            }
          ]}
          ariaLabel="Breadcrumbs"
        />
      }
      headerVariant='high-contrast' 
      header={<Header variant='h1' info={<Link variant='info'>Info</Link>}>Occupations</Header>}
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
          itemSelectionLabel: ({ selectedItems }, item) => item.occupationName,
        }}
        columnDefinitions={[
          {
            id: "occupationName",
            header: "Occupation Name",
            cell: e => e.occupationName,
            sortingField: "occupationName",
          },
        ]}
        columnDisplay={[
          { id: "occupationName", visible: true },
        ]}
        enableKeyboardNavigation
        items={items}
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
        
        filter={<TextFilter filteringPlaceholder="Find Occupation" filteringText="" />}
        header={
          <Header actions={<SpaceBetween  direction='horizontal' size='xs'>
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
              <Button variant='primary'>Add Occupation</Button>
            </SpaceBetween>}  counter={selectedItems.length ? `(${selectedItems.length}/10)` : "(10)"}>
            Occupations
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
                { id: "occupationName", visible: true },
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
                { id: "occupationName", label: "Occupation Name" },
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

export default Occupations;
