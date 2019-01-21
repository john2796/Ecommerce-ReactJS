const initialState = {
  testing: "testing",
  products: [],
  singleProduct: []
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.data
      };

    case "GET_ONE_PRODUCT":
      return {
        ...state,
        singleProduct: action.data
      };
    default:
      return state;
  }
}
