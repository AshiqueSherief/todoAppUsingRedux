import { createStore } from "redux";
import Reducer from "./Redux/Reducer";

const Store = createStore(Reducer);
export default Store;
