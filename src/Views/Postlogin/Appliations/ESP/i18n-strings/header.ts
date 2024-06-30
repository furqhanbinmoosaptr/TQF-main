export const getHeaderCounterText = (
    items: ReadonlyArray<unknown>,
    selectedItems: ReadonlyArray<unknown> | undefined
  ) => {
    return selectedItems && selectedItems?.length > 0 ? `(${selectedItems.length}/${items.length})` : `(${items.length})`;
  };
  
  export const getHeaderCounterServerSideText = (totalCount: number, selectedCount: number | undefined) => {
    return selectedCount && selectedCount > 0 ? `(${selectedCount}/${totalCount}+)` : `(${totalCount}+)`;
  };