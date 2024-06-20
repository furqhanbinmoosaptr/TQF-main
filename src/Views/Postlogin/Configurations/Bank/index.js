import React, { useState } from 'react';
import { Table, Box, SpaceBetween, Button, TextFilter, Header, ButtonDropdown, Pagination, CollectionPreferences } from "@cloudscape-design/components";

const Bank = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  const pageSize = 1; // Items per page

  const items = [
    { bankName: "Bank of Education", description: "Funds for education", balanceAmount: "$10,000", bankNumber: "123456" },
    { bankName: "Health Bank", description: "Healthcare funds", balanceAmount: "$20,000", bankNumber: "654321" },
    { bankName: "Water Bank", description: "Clean water support", balanceAmount: "$5,000", bankNumber: "112233" },
    { bankName: "Employment Bank", description: "Job creation funds", balanceAmount: "$15,000", bankNumber: "223344" },
    { bankName: "Empowerment Bank", description: "Women's empowerment", balanceAmount: "$25,000", bankNumber: "334455" },
    { bankName: "Relief Bank", description: "Disaster relief funds", balanceAmount: "$8,000", bankNumber: "445566" },
    { bankName: "SBI Bank", description: "General banking services", balanceAmount: "$30,000", bankNumber: "556677" },
    { bankName: "ICICI Domestic", description: "Domestic banking services", balanceAmount: "$40,000", bankNumber: "667788" },
    { bankName: "Green Bank", description: "Environmental projects", balanceAmount: "$12,000", bankNumber: "778899" },
    { bankName: "Tech Bank", description: "Technology investments", balanceAmount: "$50,000", bankNumber: "889900" },
    { bankName: "Education Plus", description: "Additional education funds", balanceAmount: "$7,000", bankNumber: "990011" },
    { bankName: "Health First", description: "Primary healthcare funds", balanceAmount: "$18,000", bankNumber: "101010" },
    { bankName: "Aqua Bank", description: "Water conservation", balanceAmount: "$4,000", bankNumber: "111111" },
    { bankName: "Job Creators", description: "Employment generation", balanceAmount: "$14,000", bankNumber: "121212" },
    { bankName: "Empower Women", description: "Women's projects", balanceAmount: "$22,000", bankNumber: "131313" },
    { bankName: "Relief Aid", description: "Emergency funds", balanceAmount: "$9,000", bankNumber: "141414" },
    { bankName: "General Bank", description: "General services", balanceAmount: "$35,000", bankNumber: "151515" },
    { bankName: "Domestic Bank", description: "Local banking", balanceAmount: "$45,000", bankNumber: "161616" },
    { bankName: "Eco Bank", description: "Eco-friendly projects", balanceAmount: "$13,000", bankNumber: "171717" },
    { bankName: "Innovation Bank", description: "Innovative projects", balanceAmount: "$55,000", bankNumber: "181818" },
    { bankName: "Eco Bank", description: "Eco-friendly projects", balanceAmount: "$13,000", bankNumber: "171717" },
    { bankName: "Eco Bank", description: "Eco-friendly projects", balanceAmount: "$13,000", bankNumber: "171717" },
    { bankName: "Eco Bank", description: "Eco-friendly projects", balanceAmount: "$13,000", bankNumber: "171717" },
    { bankName: "Eco Bank", description: "Eco-friendly projects", balanceAmount: "$13,000", bankNumber: "171717" },
    { bankName: "Eco Bank", description: "Eco-friendly projects", balanceAmount: "$13,000", bankNumber: "171717" },
    { bankName: "Eco Bank", description: "Eco-friendly projects", balanceAmount: "$13,000", bankNumber: "171717" },
    { bankName: "Eco Bank", description: "Eco-friendly projects", balanceAmount: "$13,000", bankNumber: "171717" },
    { bankName: "Eco Bank", description: "Eco-friendly projects", balanceAmount: "$13,000", bankNumber: "171717" },
    { bankName: "Eco Bank", description: "Eco-friendly projects", balanceAmount: "$13,000", bankNumber: "171717" },
    { bankName: "Eco Bank", description: "Eco-friendly projects", balanceAmount: "$13,000", bankNumber: "171717" },
    { bankName: "Eco Bank", description: "Eco-friendly projects", balanceAmount: "$13,000", bankNumber: "171717" },
    { bankName: "Eco Bank", description: "Eco-friendly projects", balanceAmount: "$13,000", bankNumber: "171717" },
    { bankName: "Eco Bank", description: "Eco-friendly projects", balanceAmount: "$13,000", bankNumber: "171717" },
    { bankName: "Eco Bank", description: "Eco-friendly projects", balanceAmount: "$13,000", bankNumber: "171717" },
    { bankName: "Eco Bank", description: "Eco-friendly projects", balanceAmount: "$13,000", bankNumber: "171717" },
    { bankName: "Eco Bank", description: "Eco-friendly projects", balanceAmount: "$13,000", bankNumber: "171717" },

  ];

  const paginatedItems = items.slice(
    (currentPageIndex - 1) * pageSize,
    currentPageIndex * pageSize
  );

  return (
    <div>
      <Table
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
            item.bankName
        }}
        columnDefinitions={[
          {
            id: "bankName",
            header: "Bank Name",
            cell: e => e.bankName,
            sortingField: "bankName",
            isRowHeader: true
          },
          { 
            id: "description", 
            header: "Description", 
            cell: e => e.description 
          },
          { 
            id: "balanceAmount", 
            header: "Balance Amount", 
            cell: e => e.balanceAmount,
            sortingField: "balanceAmount" 
          },
          { 
            id: "bankNumber", 
            header: "Bank Number", 
            cell: e => e.bankNumber
          },
          {
            id: "actions",
            header: "Actions",
            cell: e => (
              <ButtonDropdown
                items={[
                  { id: "start", text: "Start" },
                  { id: "stop", text: "Stop", disabled: true },
                  {
                    id: "hibernate",
                    text: "Hibernate",
                    disabled: true
                  },
                  { id: "reboot", text: "Reboot", disabled: true },
                  { id: "terminate", text: "Terminate" }
                ]}
                ariaLabel="Control instance"
                variant="inline-icon"
              />
            ),
          }
        ]}
        columnDisplay={[
          { id: "bankName", visible: true },
          { id: "description", visible: true },
          { id: "balanceAmount", visible: true },
          { id: "bankNumber", visible: true },
          { id: "actions", visible: true }
        ]}
        enableKeyboardNavigation
        items={paginatedItems}
        loadingText="Loading banks..."
        selectionType="multi"
        trackBy="bankName"
        empty={
          <Box
            margin={{ vertical: "xs" }}
            textAlign="center"
            color="inherit"
          >
            <SpaceBetween size="m">
              <b>No banks found</b>
              <Button>Add Bank</Button>
            </SpaceBetween>
          </Box>
        }
        filter={
          <TextFilter
            filteringPlaceholder="Find banks"
            filteringText=""
          />
        }
        header={
          <Header
            counter={
              selectedItems.length
                ? "(" + selectedItems.length + "/" + items.length + ")"
                : `(${items.length})`
            }
            actions={
              <SpaceBetween
                direction="horizontal"
                size="xs"
              >
                <ButtonDropdown
                  items={[
                    {
                      text: "Export",
                      id: "export",
                      disabled: false
                    },
                    {
                      text: "Delete",
                      id: "delete",
                      disabled: false
                    }
                  ]}
                >
                  Actions
                </ButtonDropdown>
                <Button variant="primary">
                  Add Bank
                </Button>
              </SpaceBetween>
            }
          >
            Banks List
          </Header>
        }
        pagination={
          <Pagination 
            currentPageIndex={currentPageIndex} 
            pagesCount={Math.ceil(items.length / pageSize)} 
            onChange={({ detail }) => setCurrentPageIndex(detail.selectedPageIndex)}
          />
        }
        preferences={
          <CollectionPreferences
            title="Preferences"
            confirmLabel="Confirm"
            cancelLabel="Cancel"
            preferences={{
              pageSize: pageSize,
              contentDisplay: [
                { id: "bankName", visible: true },
                { id: "description", visible: true },
                { id: "balanceAmount", visible: true },
                { id: "bankNumber", visible: true },
                { id: "actions", visible: true }
              ]
            }}
            pageSizePreference={{
              title: "Page size",
              options: [
                { value: 10, label: "10 banks" },
                { value: 20, label: "20 banks" }
              ]
            }}
            wrapLinesPreference={{}}
            stripedRowsPreference={{}}
            contentDensityPreference={{}}
            contentDisplayPreference={{
              options: [
                {
                  id: "bankName",
                  label: "Bank Name",
                  alwaysVisible: true
                },
                { id: "description", label: "Description" },
                { id: "balanceAmount", label: "Balance Amount" },
                { id: "bankNumber", label: "Bank Number" },
                { id: "actions", label: "Actions" }
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
    </div>
  );
};

export default Bank;
