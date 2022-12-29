import t from "../action-types";

export const addTask = (task) => {
    return {
        type: t.ADD_TASK,
        task,
    };
};

export const toggleCompleted = (task) => {
    return {
        type: t.TOGGLE_COMPLETED,
        task,
    };
};

export const deleteTask = (task) => {
    return {
        type: t.DELETE_TASK,
        task,
    };
};
