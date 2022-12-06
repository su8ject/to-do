const defaultState = {
  uncompleted: [],
  completed: [],
};

export const T = {
  addCompleted: "ADD_COMPLETED",
  addUncompleted: "ADD_UNCOMPLETED",
  deleteComleted: "DELETE_COMPLETED",
  deleteUncomleted: "DELETE_UNCOMPLETED",
};

export const reducer = (state = defaultState, action) => {
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
