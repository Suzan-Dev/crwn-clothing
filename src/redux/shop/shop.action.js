import ShopActionTypes from './shop.type';

export const updatedCollection = (collection) => ({
  type: ShopActionTypes.UPDATED_COLLECTION,
  payload: collection,
});
