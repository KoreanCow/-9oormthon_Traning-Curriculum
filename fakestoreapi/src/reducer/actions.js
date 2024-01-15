export const addToCart = (product, count = 1) => ({
  type: 'ADD_TO_CART',
  payload: { product, count }
});

export const removeToCart = (product) => ({
  type: 'REMOVE_TO_CART',
  payload: { product }
})

export const updateItemCount = (product, actionType) => ({
  type: 'UPDATE_ITEM_COUNT',
  payload: { product, actionType },
});