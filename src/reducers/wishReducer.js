export const ACTIONS = {
  ADD_WISH: "ADD_WISH",
  REMOVE_WISH: "REMOVE_WISH",
  ADD_TO_CART: "ADD_TO_CART",
};
export const wishReducer = (wishList, action) => {
  switch (action.type) {
    case ACTIONS.ADD_WISH:
      return [
        ...wishList,
        { id: action.payload.id, name: action.payload.title },
      ];
    case ACTIONS.REMOVE_WISH:
      return wishList.filter((item) => item.id !== action.payload.id);
    default:
      return wishList;
  }
};
