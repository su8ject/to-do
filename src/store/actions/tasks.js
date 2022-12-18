import t from "../action-types";

export const addUncompleted = (task) => {
  return {
    type: t.ADD_UNCOMPLETED,
    task,
  };
};

export const addCompleted = (task) => {
  return {
    type: t.ADD_COMPLETED,
    task,
  };
};

  export const deleteUncompleted = (task) => {
    return {
      type: t.ADD_UNCOMPLETED,
      task,
    };
  };
