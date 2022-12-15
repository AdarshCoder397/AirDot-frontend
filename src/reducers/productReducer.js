import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
  CLEAR_ERRORS,
} from "../constants/productConstant";

export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ALL_PRODUCT_REQUEST:
      console.log("req")
      return {
        loading: true,
        products: [],
      };

    case ALL_PRODUCT_SUCCESS:
      console.log("suc")
      return {
        loading: false,
        products: action.payload.products,
        productsCount: action.payload.productCount,
      };
    case ALL_PRODUCT_FAIL:
      console.log("fail",action.payload)
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
