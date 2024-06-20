import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Header } from '@cloudscape-design/components';

const DonorDetail = () => {
  const { id } = useParams();
  // Sample data
  const donorDetails = {
    D001: { donorId: 'D001', donorName: 'Ahmad Ali', email: 'ahmad.ali@example.com', mobileNo: '123-456-7890', type: 'Individual', amount: '$500', date: '2024-01-15' },
    D002: { donorId: 'D002', donorName: 'Fatima Zahra', email: 'fatima.zahra@example.com', mobileNo: '123-456-7891', type: 'Individual', amount: '$200', date: '2024-02-10' },
    D003: { donorId: 'D003', donorName: 'Hassan Abbas', email: 'hassan.abbas@example.com', mobileNo: '123-456-7892', type: 'Corporate', amount: '$1000', date: '2024-03-05' },
    D004: { donorId: 'D004', donorName: 'Ayesha Siddiqui', email: 'ayesha.siddiqui@example.com', mobileNo: '123-456-7893', type: 'Individual', amount: '$150', date: '2024-04-20' },
  };

  const donor = donorDetails[id];

  if (!donor) {
    return (
      <Container header={<Header variant="h1">Donor Not Found</Header>}>
        <p>No donor found with the ID {id}</p>
      </Container>
    );
  }

  return (
    <Container header={<Header variant="h1">{donor.donorName}</Header>}>
      <p><strong>Donor ID:</strong> {donor.donorId}</p>
      <p><strong>Email:</strong> {donor.email}</p>
      <p><strong>Mobile No:</strong> {donor.mobileNo}</p>
      <p><strong>Type:</strong> {donor.type}</p>
      <p><strong>Donation Amount:</strong> {donor.amount}</p>
      <p><strong>Donation Date:</strong> {donor.date}</p>
    </Container>
  );
};

export default DonorDetail;
