import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Header,
  Table,
  Pagination,
  TextFilter,
  CollectionPreferences
} from '@cloudscape-design/components';

const Donors = () => {
  const navigate = useNavigate();

  // Sample data
  const donors = [
    { donorId: 'D001', donorName: 'Ahmad Ali', email: 'ahmad.ali@example.com', mobileNo: '123-456-7890', type: 'Individual', amount: '$500', date: '2024-01-15' },
    { donorId: 'D002', donorName: 'Fatima Zahra', email: 'fatima.zahra@example.com', mobileNo: '123-456-7891', type: 'Individual', amount: '$200', date: '2024-02-10' },
    { donorId: 'D003', donorName: 'Hassan Abbas', email: 'hassan.abbas@example.com', mobileNo: '123-456-7892', type: 'Corporate', amount: '$1000', date: '2024-03-05' },
    { donorId: 'D004', donorName: 'Ayesha Siddiqui', email: 'ayesha.siddiqui@example.com', mobileNo: '123-456-7893', type: 'Individual', amount: '$150', date: '2024-04-20' },
  ];

  // Table column definitions
  const columnDefinitions = [
    { id: 'donorId', header: 'Donor ID', cell: item => item.donorId },
    { id: 'donorName', header: 'Donor Name', cell: item => item.donorName },
    { id: 'email', header: 'Email', cell: item => item.email },
    { id: 'mobileNo', header: 'Mobile No', cell: item => item.mobileNo },
    { id: 'type', header: 'Type', cell: item => item.type },
    { id: 'amount', header: 'Donation Amount', cell: item => item.amount },
    { id: 'date', header: 'Donation Date', cell: item => item.date },
  ];

  // Handle row click
  const handleRowClick = (donorId) => {
    navigate(`/donor/${donorId}`);
  };

  return (
    <Container
      header={
        <Header variant="h1" description="List of donors with their details and donations">
          Donors
        </Header>
      }
    >
      <Table
        columnDefinitions={columnDefinitions}
        items={donors}
        sortingDisabled
        pagination={<Pagination currentPageIndex={1} pagesCount={1} />}
        filter={<TextFilter filteringText="" onChange={() => {}} placeholder="Search donors" />}
        preferences={<CollectionPreferences title="Preferences" />}
        stickyHeader
        onRowClick={({ detail }) => handleRowClick(detail.item.donorId)}
      />
    </Container>
  );
};

export default Donors;
