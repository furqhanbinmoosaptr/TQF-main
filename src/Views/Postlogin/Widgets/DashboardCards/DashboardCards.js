
import { Box, ColumnLayout ,Link } from '@cloudscape-design/components'
import React from 'react'

const DashboardCards = () => {
  const accoundBalance = 1222223;
  const cashINHand = 456662334
  const donors = 223;
  const beneficiaries = 1243
  return (
    <ColumnLayout columns={4} variant="text-grid" minColumnWidth={170}>
    <div>
      <Box variant="awsui-key-label">Donors</Box>
      <Link variant="awsui-value-large" href="#" ariaLabel="Running instances (14)">
      {donors}
      </Link>
    </div>
    <div>
      <Box variant="awsui-key-label">Beneficiaries</Box>
      <Link variant="awsui-value-large" href="#" ariaLabel="Volumes (126)">
       {beneficiaries}
      </Link>
    </div>
    <div>
      <Box variant="awsui-key-label"> Total Cash In Hand</Box>
      <Link variant="awsui-value-large" href="#" ariaLabel="Security groups (116)">
      {accoundBalance}₹
      </Link>
    </div>
    <div>
      <Box variant="awsui-key-label">Account Balance</Box>
      <Link variant="awsui-value-large" href="#" ariaLabel="Load balancers (28)">
      {cashINHand}₹
      </Link>
    </div>
  </ColumnLayout>
  )
}

export default DashboardCards;