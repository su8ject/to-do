import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { App } from "./App";

const defaultState = {
  uncompleted: ["zhipa", "gfdgd"],
  completed: ["ssdfd"],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_UNCOMPLETED":
      return { ...state, uncompleted: [...state.uncompleted, action.payload] };

    case "ADD_COMPLETED":
      return { ...state, completed: [...state.completed, action.payload] };

    case "DELETE_UNCOMPLETED":
      return {
        ...state,
        uncompleted: state.uncompleted.filter(
          (task) => task !== action.payload
        ),
      };

    case "DELETE_COMPLETED":
      return {
        ...state,
        completed: state.completed.filter((task) => task !== action.payload),
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
