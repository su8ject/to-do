import {reduceReducers, reducersMap} from "../helpers";
import t from "../action-types";

const initialState = [
    {uid: Date.now(), content: "test", completed: true,}
];

const toggle = (state, task) => {
    let foundTask = state.find(foo => foo === task);
    foundTask = {...foundTask, completed: !foundTask.completed};
    return foundTask;
}

const tasksReducer = reduceReducers(
    initialState,
    reducersMap(
        {
            [t.ADD_TASK]: (state, action) => ([...state, {
                uid: Date.now(),
                content: action.task,
                completed: false
            }
            ]),
            [t.TOGGLE_COMPLETED]: (state, action) => ([...state, toggle(state, action.task)].filter(task => task !== action.task)),
            [t.DELETE_TASK]: (state, action) => (
                state.filter(task => task !== action.task)
            ),
        },
        {}
    )
);

export default tasksReducer;

tasksReducer.getCompleted = (state) => state.filter(task => task.completed === true);
tasksReducer.getUncompleted = (state) => state.filter(task => task.completed === false);
