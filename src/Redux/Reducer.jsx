import { TEXT } from "./Type";

const initialState = {
  value: [],
};

const Reducer = (state = initialState, action) => {
  console.log("#sh dispatched value in reducer", action.payload);
  switch (action.type) {
    case TEXT:
      console.log("#sh dispatched value in switch case", action.payload);
      const temp = [...state.value, action.payload];
      console.log("value in temp in reducer", temp);
      return {
        ...state,
        value: temp,
      };

    default:
      return state;
  }
};
export default Reducer;
