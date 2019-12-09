const transferAccountSelectionAction = (value) => ({
  type: 'SELECTION_VALUE',
  value,
});

const transferAccountAmountAction = (amount) => ({
  type: 'AMOUNT_VALUE',
  amount,
});

export { transferAccountSelectionAction, transferAccountAmountAction };
