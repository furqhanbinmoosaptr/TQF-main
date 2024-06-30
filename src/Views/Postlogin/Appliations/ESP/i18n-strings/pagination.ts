import { TableProps } from '@cloudscape-design/components';

export const renderAriaLive: TableProps['renderAriaLive'] = ({ firstIndex, lastIndex, totalItemsCount }) => {
  return totalItemsCount !== undefined
    ? `Displaying items ${firstIndex} to ${lastIndex} of ${totalItemsCount}`
    : `Displaying items ${firstIndex} to ${lastIndex}`;
};