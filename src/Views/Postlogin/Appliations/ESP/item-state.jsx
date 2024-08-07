import React from 'react';
import { StatusIndicator } from '@cloudscape-design/components';

export default function ItemState({ state }) {
  if (state === 'deleting') {
    return <StatusIndicator type="pending">Deleting...</StatusIndicator>;
  }
  return <StatusIndicator type={state === 'Deactivated' ? 'error' : 'success'}>{state}</StatusIndicator>;
}