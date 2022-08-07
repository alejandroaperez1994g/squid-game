export const ACTIONS = {
  ADD_WISH: 'ADD_WISH',
  REMOVE_WISH: 'REMOVE_WISH',
  EMPTY_WISH: 'EMPTY_WISH',
  SET_WISH_LIST: 'SET_WISH_LIST',
};
export const wishReducer = (wishList, action) => {
  switch (action.type) {
    case ACTIONS.ADD_WISH:
      return [
        ...wishList,
        {
          id: action.payload.id,
          name: action.payload.title,
          img: action.payload.image,
          price: action.payload.discount,
        },
      ];
    case ACTIONS.REMOVE_WISH:
      return wishList.filter((item) => item.id !== action.payload.id);
    case ACTIONS.EMPTY_WISH:
      return [];
    case ACTIONS.SET_WISH_LIST:
      return [...action.payload];
    default:
      return wishList;
  }
};
