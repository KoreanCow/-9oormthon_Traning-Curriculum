const initialState = {
  cartList: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const { product, count } = action.payload;
      const duplicateCount = state.cartList.find(item => item.id === product.id)
      if (duplicateCount) {
        return {
          ...state,
          cartList: state.cartList.map(item =>
            item.id === product.id ? { ...item, count: item.count + count } : item
          ),
        };
      } else {
        return {
          ...state,
          cartList: [...state.cartList, { ...product, count }],
        }
      };
    case 'REMOVE_TO_CART':
      const removedCartList = state.cartList.filter(item => item !== action.payload.product);
      return {
        ...state,
        cartList: removedCartList
      }
    case 'UPDATE_ITEM_COUNT':
      const { product: productToUpdate, actionType } = action.payload; // product를 productToUpdate로 변경
      const updatedCart = state.cartList.map((item) =>
        item.id === productToUpdate.id
          ? {
            ...item,
            count:
              actionType === 'INCREMENT' ? item.count + 1 : item.count - 1,
          }
          : item
      );
      return {
        ...state,
        cartList: updatedCart,
      };
    default:
      return state;
  }
}

export default cartReducer;
