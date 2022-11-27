import { TEXT } from "./Type";

const initialState = {
  value: [],
};

const Reducer = (state = initialState, action) => {
  console.log("#sh dispatched value in reducer", action.payload);
  switch (action.type) {
    case TEXT:
      console.log("#sh dispatched value in switch case", action.payload);
      return {
        ...state,
        value: [...state.value, action.payload],
      };

    default:
      return state;
  }
};
export default Reducer;
