import {reduceReducers, reducersMap} from "../helpers";
import t from "../action-types";

const tasks = [
    {uid: Date.now(), content: "test", completed: true,}
];

const tasksReducer = reduceReducers(
    tasks,
    reducersMap(
        {
            [t.ADD_TASK]: (state, action) => ([...state, {
                uid: Date.now(),
                content: action.task,
                completed: false
            }
            ]),
            [t.TOGGLE_COMPLETED]: (state, action) => (state.map(task => task === action.task ? {...task, completed: !task.completed} : task)),
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
