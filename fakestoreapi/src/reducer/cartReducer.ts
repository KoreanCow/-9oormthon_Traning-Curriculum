import { Product } from './actions';

interface AddToCartAction {
  type: 'ADD_TO_CART';
  payload: {
    product: Product;
    count: number;
  };
}

interface RemoveToCartAction {
  type: 'REMOVE_TO_CART';
  payload: {
    product: Product;
  };
}

interface UpdateItemCountAction {
  type: 'UPDATE_ITEM_COUNT';
  payload: {
    product: Product;
    actionType: 'INCREMENT' | 'DECREMENT';
  };
}

type CartAction = AddToCartAction | RemoveToCartAction | UpdateItemCountAction;

interface CartState {
  cartList: Product[];
}

const initialState: CartState = {
  cartList: [],
};

const cartReducer = (state: CartState = initialState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const { product, count } = action.payload;
      const duplicateCount = state.cartList.find(item => item.id === product.id);
      const updatedCount = (duplicateCount?.count || 0) + count;

      return {
        ...state,
        cartList: duplicateCount
          ? state.cartList.map(item =>
            item.id === product.id ? { ...item, count: updatedCount } : item
          )
          : [...state.cartList, { ...product, count: updatedCount }],
      };

    case 'REMOVE_TO_CART':
      const removedCartList = state.cartList.filter(item => item.id !== action.payload.product.id);
      return {
        ...state,
        cartList: removedCartList,
      };

    case 'UPDATE_ITEM_COUNT':
      const { product: productToUpdate, actionType } = action.payload;
      const updatedCart = state.cartList.map((item) =>
        item.id === productToUpdate.id
          ? {
            ...item,
            count:
              actionType === 'INCREMENT' ? (item.count || 0) + 1 : Math.max(0, (item.count || 0) - 1),
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
};

export default cartReducer;
