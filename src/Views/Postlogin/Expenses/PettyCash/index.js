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
import { BreadcrumbGroup, ContentLayout, Link } from "@cloudscape-design/components";
import { useNavigate } from "react-router-dom";

const PettyCash = () => {
  const navigate = useNavigate()
  const handlePettycashRoute = ()=>{
    navigate('/app/expenses/petty-cash/pettycash-form')
  }
  const [selectedItems, setSelectedItems] = React.useState([]);

  const generateRandomNumber = () => {
    return Math.floor(1000000000 + Math.random() * 9000000000).toString();
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const items = [
    {
      pettyCashId: generateRandomNumber(),
      withdrawFrom: "Cash Office",
      withdrawBy: "John Doe",
      amount: "$100",
      withdrawDate: "2024-06-01",
      createdAt: formatDate("2024-06-01T10:20:30"),
    },
    {
      pettyCashId: generateRandomNumber(),
      withdrawFrom: "Cash Office",
      withdrawBy: "John Doe",
      amount: "$100",
      withdrawDate: "2024-06-01",
      createdAt: formatDate("2024-06-01T10:20:30"),
    },
    {
      pettyCashId: generateRandomNumber(),
      withdrawFrom: "Cash Office",
      withdrawBy: "John Doe",
      amount: "$100",
      withdrawDate: "2024-06-01",
      createdAt: formatDate("2024-06-01T10:20:30"),
    },

    {
      pettyCashId: generateRandomNumber(),
      withdrawFrom: "Cash Office",
      withdrawBy: "John Doe",
      amount: "$100",
      withdrawDate: "2024-06-01",
      createdAt: formatDate("2024-06-01T10:20:30"),
    },{
      pettyCashId: generateRandomNumber(),
      withdrawFrom: "Cash Office",
      withdrawBy: "John Doe",
      amount: "$100",
      withdrawDate: "2024-06-01",
      createdAt: formatDate("2024-06-01T10:20:30"),
    },
    {
      pettyCashId: generateRandomNumber(),
      withdrawFrom: "Cash Office",
      withdrawBy: "John Doe",
      amount: "$100",
      withdrawDate: "2024-06-01",
      createdAt: formatDate("2024-06-01T10:20:30"),
    },
    {
      pettyCashId: generateRandomNumber(),
      withdrawFrom: "Main Office",
      withdrawBy: "Jane Smith",
      amount: "$200",
      withdrawDate: "2024-06-05",
      createdAt: formatDate("2024-06-05T15:45:00"),
    },
    // ... Add more items as needed
  ];

  
  return (
    <ContentLayout 
    breadcrumbs={
      <BreadcrumbGroup
      items={[
        { text: "Expenses", href: "#" },
        { text: "Petty Cash", href: "#components" },
      ]}
      ariaLabel="Breadcrumbs"
    />
    }
      headerVariant="high-contrast"
      header={
        <SpaceBetween size="m">
          <Header
            variant="h1"
            info={<Link variant="info">Info</Link>}
          >
            Petty Cash
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
          itemSelectionLabel: ({ selectedItems }, item) => item.pettyCashId,
        }}
        columnDefinitions={[
          {
            id: "pettyCashId",
            header: "Petty Cash ID",
            cell: e => e.pettyCashId,
            sortingField: "pettyCashId",
          },
          {
            id: "withdrawFrom",
            header: "Withdraw From",
            cell: e => e.withdrawFrom,
            sortingField: "withdrawFrom",
          },
          {
            id: "withdrawBy",
            header: "Withdraw By",
            cell: e => e.withdrawBy,
            sortingField: "withdrawBy",
          },
          {
            id: "amount",
            header: "Amount",
            cell: e => e.amount,
            sortingField: "amount",
          },
          {
            id: "withdrawDate",
            header: "Withdraw Date",
            cell: e => e.withdrawDate,
            sortingField: "withdrawDate",
          },
          {
            id: "createdAt",
            header: "Created At",
            cell: e => e.createdAt,
            sortingField: "createdAt",
          },
        ]}
        columnDisplay={[
          { id: "pettyCashId", visible: true },
          { id: "withdrawFrom", visible: true },
          { id: "withdrawBy", visible: true },
          { id: "amount", visible: true },
          { id: "withdrawDate", visible: true },
          { id: "createdAt", visible: true },
        ]}
        enableKeyboardNavigation
        items={items}
        loadingText="Loading resources"
        selectionType="multi"
        trackBy="pettyCashId"
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
            filteringPlaceholder="Find Petty Cash "
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
                    { text: "Edit", id: "edit", disabled: false },
                    { text: "Delete", id: "delete", disabled: false },
                  ]}
                >
                  Actions
                </ButtonDropdown>
                <Button onClick={handlePettycashRoute} variant="primary">Add Petty Cash</Button>
              </SpaceBetween>
            }
          >
            Records
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
                { id: "pettyCashId", visible: true },
                { id: "withdrawFrom", visible: true },
                { id: "withdrawBy", visible: true },
                { id: "amount", visible: true },
                { id: "withdrawDate", visible: true },
                { id: "createdAt", visible: true },
              ],
            }}
            pageSizePreference={{
              title: "Page size",
              options: [
                { value: 10, label: "10 records" },
                { value: 20, label: "20 records" },
              ],
            }}
            wrapLinesPreference={{}}
            stripedRowsPreference={{}}
            contentDensityPreference={{}}
            contentDisplayPreference={{
              options: [
                { id: "pettyCashId", label: "Petty Cash ID", alwaysVisible: true },
                { id: "withdrawFrom", label: "Withdraw From" },
                { id: "withdrawBy", label: "Withdraw By" },
                { id: "amount", label: "Amount" },
                { id: "withdrawDate", label: "Withdraw Date" },
                { id: "createdAt", label: "Created At" },
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

export default PettyCash;
