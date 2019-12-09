const initState = {
  selection: '',
  amount: 0.0,
};

export default function transferAccountReducer(state = initState, action) {
  switch (action.type) {
    case 'SELECTION_VALUE':
      return {
        ...state,
        selection: action.value,
      };
    case 'AMOUNT_VALUE':
      return {
        ...state,
        amount: action.amount,
      };
    default:
      return state;
  }
}
