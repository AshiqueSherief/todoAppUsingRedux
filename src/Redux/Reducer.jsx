import { TEXT, DELETE, UPDATE } from "./Type";

const initialState = {
  value: [],
  value1: [],
};

const Reducer = (state = initialState, action) => {
  console.log("#sh dispatched value in reducer", action.payload);
  switch (action.type) {
    case TEXT:
      console.log("#sh dispatched value in TEXT switch case", action.payload);
      const temp1 = [...state.value, action.payload];
      console.log("value in temp1 in reducer", temp1);
      return {
        ...state,
        value: temp1,
      };
    case DELETE:
      console.log("#sh dispatched value in DELETE switch case", action.payload);
      const temp2 = state.value.filter((t) => t.id !== action.payload);
      return {
        ...state,
        value: temp2,
      };
    case UPDATE:
      console.log("#sh dispatched value in UPDATE switch case", action.payload);
      const temp3 = state.value.filter((t) => t.id === action.payload);
      console.log("value in temp3 in reducer", temp3);
      return {
        ...state,
        value1: temp3,
      };
    default:
      return state;
  }
};
export default Reducer;
