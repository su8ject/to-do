import {reduceReducers, reducersMap} from "../helpers";
import t from "../action-types";

const initialState = {
    uncompleted: [],
    completed: [],
};

const tasksReducer = reduceReducers(
    initialState,
    reducersMap(
        {
            [t.ADD_UNCOMPLETED]: (state, action) => ({
                ...state,
                uncompleted: [...state.uncompleted, action.task],
            }),
            [t.ADD_COMPLETED]: (state, action) => ({
                ...state,
                completed: [...state.completed, action.task],
            }),
            [t.DELETE_UNCOMPLETED]: (state, action) => ({
                ...state,
                uncompleted: state.uncompleted.filter((task) => task !== action.task),
            }),
            [t.DELETE_COMPLETED]: (state, action) => ({
                ...state,
                completed: state.completed.filter((task) => task !== action.task),
            }),
        },
        {}
    )
);

export default tasksReducer;

tasksReducer.getCompleted = (state) => state.completed;
tasksReducer.getUncompleted = (state) => state.uncompleted;
