import * as React from "react";
import Table from "@cloudscape-design/components/table";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import TextFilter from "@cloudscape-design/components/text-filter";
import Header from "@cloudscape-design/components/header";
import ButtonDropdown from "@cloudscape-design/components/button-dropdown";
import Pagination from "@cloudscape-design/components/pagination";
import CollectionPreferences from "@cloudscape-design/components/collection-preferences";
import { ContentLayout , Link , Alert } from "@cloudscape-design/components";

const PettyCash = () => {
  const [selectedItems, setSelectedItems] = React.useState([{ description: "Office supplies" }]);
  
  return (
<ContentLayout 
    header={
        <SpaceBetween size="m">
          <Header
            variant="h1"
            info={<Link variant="info">Info</Link>}
            
          >
           Petty Cash
          </Header>
        </SpaceBetween>
      }>

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
        itemSelectionLabel: ({ selectedItems }, item) => item.description
      }}
      columnDefinitions={[
        {
          id: "date",
          header: "Date",
          cell: e => e.date,
          sortingField: "date",
          isRowHeader: true
        },
        {
          id: "amount",
          header: "Amount",
          cell: e => e.amount,
          sortingField: "amount"
        },
        {
          id: "purpose",
          header: "Purpose",
          cell: e => e.purpose
        },
        {
          id: "department",
          header: "Department",
          cell: e => e.department
        },
        {
          id: "approvedBy",
          header: "Approved By",
          cell: e => e.approvedBy
        },
        {
          id: "status",
          header: "Status",
          cell: e => e.status
        },
        {
          id: "remarks",
          header: "Remarks",
          cell: e => e.remarks
        }
      ]}
      columnDisplay={[
        { id: "date", visible: true },
        { id: "amount", visible: true },
        { id: "purpose", visible: true },
        { id: "department", visible: true },
        { id: "approvedBy", visible: true },
        { id: "status", visible: true },
        { id: "remarks", visible: true }
      ]}
      enableKeyboardNavigation
      items={[
        {
          date: "2024-06-01",
          amount: "$100",
          purpose: "Office supplies",
          department: "Administration",
          approvedBy: "John Doe",
          status: "Approved",
          remarks: "Urgent purchase"
        },
        {
          date: "2024-06-05",
          amount: "$200",
          purpose: "Travel expenses",
          department: "Finance",
          approvedBy: "Jane Smith",
          status: "Pending",
          remarks: "Client meeting"
        },
        {
          date: "2024-06-10",
          amount: "$50",
          purpose: "Refreshments",
          department: "HR",
          approvedBy: "Mary Johnson",
          status: "Approved",
          remarks: "Team building"
        },
        {
          date: "2024-06-15",
          amount: "$300",
          purpose: "Equipment maintenance",
          department: "IT",
          approvedBy: "Paul Brown",
          status: "Rejected",
          remarks: "Non-essential"
        },
        {
          date: "2024-06-20",
          amount: "$150",
          purpose: "Stationery",
          department: "Procurement",
          approvedBy: "Linda White",
          status: "Approved",
          remarks: "Monthly restock"
        },
        {
          date: "2024-06-25",
          amount: "$250",
          purpose: "Software subscription",
          department: "IT",
          approvedBy: "Tom Black",
          status: "Pending",
          remarks: "Annual renewal"
        },
        {
          date: "2024-07-01",
          amount: "$75",
          purpose: "Office decor",
          department: "Administration",
          approvedBy: "Ahmed Khan",
          status: "Approved",
          remarks: "Reception area"
        },
        {
          date: "2024-07-03",
          amount: "$120",
          purpose: "Cleaning services",
          department: "Facilities",
          approvedBy: "Fatima Ali",
          status: "Approved",
          remarks: "Weekly cleaning"
        },
        {
          date: "2024-07-05",
          amount: "$90",
          purpose: "Event supplies",
          department: "Marketing",
          approvedBy: "Omar Hassan",
          status: "Pending",
          remarks: "Annual conference"
        },
        {
          date: "2024-07-07",
          amount: "$130",
          purpose: "Client gifts",
          department: "Sales",
          approvedBy: "Zara Abdullah",
          status: "Approved",
          remarks: "Holiday season"
        },
        {
          date: "2024-07-10",
          amount: "$60",
          purpose: "Training materials",
          department: "HR",
          approvedBy: "Ali Ahmed",
          status: "Approved",
          remarks: "Onboarding"
        }
      ]}
      loadingText="Loading resources"
      selectionType="multi"
      trackBy="date"
      empty={
        <Box margin={{ vertical: "xs" }} textAlign="center" color="inherit">
          <SpaceBetween size="m">
            <b>No resources</b>
            <Button>Create resource</Button>
          </SpaceBetween>
        </Box>
      }
      filter={
        <TextFilter
          filteringPlaceholder="Find resources"
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
          actions={
            <SpaceBetween direction="horizontal" size="xs">
              <ButtonDropdown
                items={[
                  { text: "Deactivate", id: "deactivate", disabled: false },
                  { text: "Activate", id: "activate", disabled: false },
                  { text: "Status 3", id: "status3", disabled: false },
                  { text: "View details", id: "viewDetails", disabled: false },
                  { text: "Edit", id: "edit", disabled: false },
                  { text: "Delete", id: "delete", disabled: false }
                ]}
              >
                Actions
              </ButtonDropdown>
              <Button>Secondary button</Button>
              <Button variant="primary">Create resource</Button>
            </SpaceBetween>
          }
        >
          Petty Cash Records
        </Header>
      }
      pagination={<Pagination currentPageIndex={1} pagesCount={2} />}
      preferences={
        <CollectionPreferences
          title="Preferences"
          confirmLabel="Confirm"
          cancelLabel="Cancel"
          preferences={{
            pageSize: 10,
            contentDisplay: [
              { id: "date", visible: true },
              { id: "amount", visible: true },
              { id: "purpose", visible: true },
              { id: "department", visible: true },
              { id: "approvedBy", visible: true },
              { id: "status", visible: true },
              { id: "remarks", visible: true }
            ]
          }}
          pageSizePreference={{
            title: "Page size",
            options: [
              { value: 10, label: "10 records" },
              { value: 20, label: "20 records" }
            ]
          }}
          wrapLinesPreference={{}}
          stripedRowsPreference={{}}
          contentDensityPreference={{}}
          contentDisplayPreference={{
            options: [
              { id: "date", label: "Date", alwaysVisible: true },
              { id: "amount", label: "Amount" },
              { id: "purpose", label: "Purpose" },
              { id: "department", label: "Department" },
              { id: "approvedBy", label: "Approved By" },
              { id: "status", label: "Status" },
              { id: "remarks", label: "Remarks" }
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
}

export default PettyCash;
