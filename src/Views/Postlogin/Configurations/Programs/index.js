import * as React from "react";
import Table from "@cloudscape-design/components/table";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import TextFilter from "@cloudscape-design/components/text-filter";
import Header from "@cloudscape-design/components/header";
import Pagination from "@cloudscape-design/components/pagination";
import CollectionPreferences from "@cloudscape-design/components/collection-preferences";
import { ButtonDropdown, ContentLayout, Link } from "@cloudscape-design/components";

const DonationsPrograms = () => {
  const [selectedItems, setSelectedItems] = React.useState([]);

  const data = [
    { id: 1, programName: "Educational", slug: "educational", balanceAmount: "6,684,145.14/-", status: "Active" },
    { id: 2, programName: "Welfare", slug: "welfare", balanceAmount: "13,348,172.62/-", status: "Active" },
    { id: 3, programName: "Operationals", slug: "operational", balanceAmount: "280.49/-", status: "Hold" },
    { id: 4, programName: "Economical", slug: "economical", balanceAmount: "2,605,528.05/-", status: "Active" },
    { id: 5, programName: "Medical", slug: "medical", balanceAmount: "0.00/-", status: "Deactive" },
    { id: 6, programName: "Recreational", slug: "cultural/event", balanceAmount: "0.00/-", status: "Deactive" },
  ];

  return (
    <ContentLayout
      headerVariant="high-contrast"
      header={
        <SpaceBetween size="m">
          <Header variant="h1" info={<Link variant="info">Info</Link>}>
            TQF Donation Programs
          </Header>
        </SpaceBetween>
      }
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
          itemSelectionLabel: ({ selectedItems }, item) => item.programName,
        }}
        columnDefinitions={[
          {
            id: "programName",
            header: "Program Name",
            cell: e => e.programName,
            sortingField: "programName",
            isRowHeader: true,
          },
          {
            id: "slug",
            header: "Slug",
            cell: e => e.slug,
            sortingField: "slug",
          },
          {
            id: "balanceAmount",
            header: "Balance Amount",
            cell: e => e.balanceAmount,
            sortingField: "balanceAmount",
          },
          {
            id: "status",
            header: "Status",
            cell: e => e.status,
            sortingField: "status",
          },
        ]}
        columnDisplay={[
          { id: "programName", visible: true },
          { id: "slug", visible: true },
          { id: "balanceAmount", visible: true },
          { id: "status", visible: true },
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
        filter={
          <TextFilter filteringPlaceholder="Find resources" filteringText="" />
        }
        header={
          <Header
            counter={selectedItems.length ? `(${selectedItems.length}/6)` : "(6)"}
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
                <Button variant="primary">Add Program</Button>
              </SpaceBetween>
            }
          >
           Programs Records
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
                { id: "programName", visible: true },
                { id: "slug", visible: true },
                { id: "balanceAmount", visible: true },
                { id: "status", visible: true },
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
                { id: "programName", label: "Program Name", alwaysVisible: true },
                { id: "slug", label: "Slug" },
                { id: "balanceAmount", label: "Balance Amount" },
                { id: "status", label: "Status" },
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
};

export default DonationsPrograms;
