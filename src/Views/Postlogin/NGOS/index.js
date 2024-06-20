import React, { useState } from 'react';

import Table from "@cloudscape-design/components/table";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import TextFilter from "@cloudscape-design/components/text-filter";
import Header from "@cloudscape-design/components/header";
import ButtonDropdown from "@cloudscape-design/components/button-dropdown";
import Pagination from "@cloudscape-design/components/pagination";
import CollectionPreferences from "@cloudscape-design/components/collection-preferences";
import { BreadcrumbGroup, ContentLayout, Link } from '@cloudscape-design/components';

const NGOS = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <ContentLayout
      breadcrumbs={
        <BreadcrumbGroup
          items={[
            { text: "Home", href: "#" },
            { text: "NGO Records", href: "#components" },
          ]}
          ariaLabel="Breadcrumbs"
        />
      }
      header={
        <Header
          info={<Link variant="info">Info</Link>}
          variant='h1'>NGO Records</Header>
      }>
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
            item.ngoName
        }}
        columnDefinitions={[
          {
            id: "ngoName",
            header: "NGO Name",
            cell: e => e.ngoName,
            isRowHeader: true
          },
          {
            id: "ngoContact",
            header: "NGO Contact",
            cell: e => e.ngoContact,
          },
          { 
            id: "ngoEmail", 
            header: "NGO Email", 
            cell: e => e.ngoEmail 
          },
          { 
            id: "address", 
            header: "Address", 
            cell: e => e.address 
          },
          { 
            id: "category", 
            header: "Category", 
            cell: e => e.category 
          }
        ]}
        columnDisplay={[
          { id: "ngoName", visible: true },
          { id: "ngoContact", visible: true },
          { id: "ngoEmail", visible: true },
          { id: "address", visible: true },
          { id: "category", visible: true }
        ]}
        enableKeyboardNavigation
        items={[
          {
            ngoName: "Islamic Relief Worldwide",
            ngoContact: "+1-800-947-3544",
            ngoEmail: "info@irworldwide.org",
            address: "123 Charity St, City, Country",
            category: "Humanitarian Aid"
          },
          {
            ngoName: "Muslim Hands",
            ngoContact: "+44-115-911-7222",
            ngoEmail: "contact@muslimhands.org",
            address: "456 Help Ave, City, Country",
            category: "Education and Relief"
          },
          {
            ngoName: "Helping Hand for Relief and Development",
            ngoContact: "+1-888-808-4357",
            ngoEmail: "info@hhrd.org",
            address: "789 Support Rd, City, Country",
            category: "Development"
          },
          {
            ngoName: "Penny Appeal",
            ngoContact: "+44-300-11-11-11",
            ngoEmail: "info@pennyappeal.org",
            address: "101 Aid Blvd, City, Country",
            category: "Emergency Response"
          },
          {
            ngoName: "Zakat Foundation of America",
            ngoContact: "+1-888-925-2886",
            ngoEmail: "contact@zakat.org",
            address: "121 Charity Lane, City, Country",
            category: "Poverty Alleviation"
          },
        ]}
        loadingText="Loading NGO Records"
        selectionType="multi"
        trackBy="ngoName"
        empty={
          <Box
            margin={{ vertical: "xs" }}
            textAlign="center"
            color="inherit"
          >
            <SpaceBetween size="m">
              <b>No records found</b>
              <Button >Add NGO</Button>
            </SpaceBetween>
          </Box>
        }
        filter={
          <TextFilter
            filteringPlaceholder="Find records"
            filteringText=""
          />
        }
        header={
          <Header
            counter={
              selectedItems.length
                ? "(" + selectedItems.length + "/5)"
                : "(5)"
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
                <Button  href='/app/ngo/form' variant="primary">
                  Add NGO
                </Button>
              </SpaceBetween>
            }
          >
          NGO Records
          </Header>
        }
        pagination={
          <Pagination currentPageIndex={1} pagesCount={1} />
        }
        preferences={
          <CollectionPreferences
            title="Preferences"
            confirmLabel="Confirm"
            cancelLabel="Cancel"
            preferences={{
              pageSize: 10,
              contentDisplay: [
                { id: "ngoName", visible: true },
                { id: "ngoContact", visible: true },
                { id: "ngoEmail", visible: true },
                { id: "address", visible: true },
                { id: "category", visible: true }
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
                {
                  id: "ngoName",
                  label: "NGO Name",
                  alwaysVisible: true
                },
                { id: "ngoContact", label: "NGO Contact" },
                { id: "ngoEmail", label: "NGO Email" },
                { id: "address", label: "Address" },
                { id: "category", label: "Category" }
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

export default NGOS;
