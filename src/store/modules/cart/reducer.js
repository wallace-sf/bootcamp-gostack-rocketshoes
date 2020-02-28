import produce from 'immer';

export default function cart(state = [], action) {
  const { payload } = action;

  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        draft.push(payload);
      });
    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === payload);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === payload.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(payload.amount);
        }
      });
    }
    default:
      return state;
  }
}
