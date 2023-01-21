import { createStore } from "redux";
import cardReducers from "./Redux/reducer";

const store = createStore(cardReducers);


export default store;

