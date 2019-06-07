export default function catsReducer(state = [], action) {
  switch (action.type) {
    case 'LOADING_CATS':
      return state;
    case 'FETCH_CATS':
      return [...action.payload];
    default:
      return state;
  };
};
