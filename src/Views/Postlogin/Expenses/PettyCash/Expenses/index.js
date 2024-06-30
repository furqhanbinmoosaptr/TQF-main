import { BreadcrumbGroup, ContentLayout, Link } from '@cloudscape-design/components'
import React from 'react'

import Table from "@cloudscape-design/components/table";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import TextFilter from "@cloudscape-design/components/text-filter";
import Header from "@cloudscape-design/components/header";
import ButtonDropdown from "@cloudscape-design/components/button-dropdown";
import Pagination from "@cloudscape-design/components/pagination";
import CollectionPreferences from "@cloudscape-design/components/collection-preferences";
import { useNavigate } from 'react-router-dom';

const Expenses = () => {
  const navigate = useNavigate()
  const [
    selectedItems,
    setSelectedItems
  ] = React.useState([]);

  const handleFormRoute = ()=>{
navigate('/app/expenses/expenses/expenses-form')
  }
  return (
   <ContentLayout
   breadcrumbs={
    <BreadcrumbGroup
    items={[
      { text: "Home", href: "#" },
      { text: "Expenses", href: "#components" },
      {
        text: "Expenses",
        href: "#components/breadcrumb-group"
      }
    ]}
    ariaLabel="Breadcrumbs"
  />
   }
   headerVariant='high-contrast' header={<Header info={<Link variant='info'>Info</Link>} variant='h1'>Expenses</Header>}>

<Table
      renderAriaLive={({
        firstIndex,
        lastIndex,
        totalItemsCount
      }) =>
        `Displaying items ${firstIndex} to ${lastIndex} of ${totalItemsCount}`
      }
      onSelectionChange={({ detail }) =>
        setSelectedItems(detail.selectedItems)
      }
      selectedItems={selectedItems}
      ariaLabels={{
        selectionGroupLabel: "Items selection",
        allItemsSelectionLabel: ({ selectedItems }) =>
          `${selectedItems.length} ${
            selectedItems.length === 1 ? "item" : "items"
          } selected`,
        itemSelectionLabel: ({ selectedItems }, item) =>
          item.ExpenseID
      }}
      columnDefinitions={[
        {
          id: "ExpenseID",
          header: "Expense ID",
          cell: e => e.ExpenseID,
          sortingField: "ExpenseID",
          isRowHeader: true
        },
        {
          id: "Program",
          header: "Program",
          cell: e => e.Program,
          sortingField: "Program"
        },
        {
          id: "SubProgram",
          header: "Sub Program",
          cell: e => e.SubProgram,
          sortingField: "SubProgram"
        },
        { id: "ExpensedBy", header: "Expensed By", cell: e => e.ExpensedBy },
        { id: "ExpenseType", header: "Expense Type", cell: e => e.ExpenseType },
        { id: "Amount", header: "Amount", cell: e => e.Amount },
        { id: "Receipt", header: "Receipt", cell: e => e.Receipt },
        { id: "Date", header: "Date", cell: e => e.Date },
        { id: "CreatedAt", header: "Created At", cell: e => e.CreatedAt }
      ]}
      columnDisplay={[
        { id: "ExpenseID", visible: true },
        { id: "Program", visible: true },
        { id: "SubProgram", visible: true },
        { id: "ExpensedBy", visible: true },
        { id: "ExpenseType", visible: true },
        { id: "Amount", visible: true },
        { id: "Receipt", visible: true },
        { id: "Date", visible: true },
        { id: "CreatedAt", visible: true }
      ]}
      enableKeyboardNavigation
      items={[
        {
          ExpenseID: "1",
          Program: "Program A",
          SubProgram: "Sub A1",
          ExpensedBy: "John Doe",
          ExpenseType: "Travel",
          Amount: "$100",
          Receipt: "Yes",
          Date: "2024-06-01",
          CreatedAt: "2024-06-15"
        },
        {
          ExpenseID: "2",
          Program: "Program B",
          SubProgram: "Sub B1",
          ExpensedBy: "Jane Smith",
          ExpenseType: "Meals",
          Amount: "$50",
          Receipt: "No",
          Date: "2024-06-02",
          CreatedAt: "2024-06-16"
        },
        {
          ExpenseID: "3",
          Program: "Program C",
          SubProgram: "Sub C1",
          ExpensedBy: "Alice Johnson",
          ExpenseType: "Lodging",
          Amount: "$200",
          Receipt: "Yes",
          Date: "2024-06-03",
          CreatedAt: "2024-06-17"
        },
        {
          ExpenseID: "4",
          Program: "Program D",
          SubProgram: "Sub D1",
          ExpensedBy: "Bob Brown",
          ExpenseType: "Supplies",
          Amount: "$30",
          Receipt: "No",
          Date: "2024-06-04",
          CreatedAt: "2024-06-18"
        },
        {
          ExpenseID: "5",
          Program: "Program E",
          SubProgram: "Sub E1",
          ExpensedBy: "Carol White",
          ExpenseType: "Entertainment",
          Amount: "$150",
          Receipt: "Yes",
          Date: "2024-06-05",
          CreatedAt: "2024-06-19"
        }
      ]}
      loadingText="Loading resources"
      selectionType="multi"
      trackBy="ExpenseID"
      empty={
        <Box
          margin={{ vertical: "xs" }}
          textAlign="center"
          color="inherit"
        >
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
              ? "(" + selectedItems.length + "/10)"
              : "(10)"
          }
          actions={
            <SpaceBetween
              direction="horizontal"
              size="xs"
            >
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
              <Button onClick={handleFormRoute} variant="primary">
                Add Expenses
              </Button>
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
              { id: "ExpenseID", visible: true },
              { id: "Program", visible: true },
              { id: "SubProgram", visible: true },
              { id: "ExpensedBy", visible: true },
              { id: "ExpenseType", visible: true },
              { id: "Amount", visible: true },
              { id: "Receipt", visible: true },
              { id: "Date", visible: true },
              { id: "CreatedAt", visible: true }
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
              {
                id: "ExpenseID",
                label: "Expense ID",
                alwaysVisible: true
              },
              { id: "Program", label: "Program" },
              { id: "SubProgram", label: "Sub Program" },
              { id: "ExpensedBy", label: "Expensed By" },
              { id: "ExpenseType", label: "Expense Type" },
              { id: "Amount", label: "Amount" },
              { id: "Receipt", label: "Receipt" },
              { id: "Date", label: "Date" },
              { id: "CreatedAt", label: "Created At" }
            ]
          }}
          stickyColumnsPreference={{
            firstColumns: {
              title: "Stick first column(s)",
              description:
                "Keep the first column(s) visible while horizontally scrolling the table content.",
              options: [
                { label: "None", value: 0 },
                { label: "First column", value: 1 },
                { label: "First two columns", value: 2 }
              ]
            },
            lastColumns: {
              title: "Stick last column",
              description:
                "Keep the last column visible while horizontally scrolling the table content.",
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
  )
}

export default Expenses
