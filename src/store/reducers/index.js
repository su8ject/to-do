import { combineReducers } from 'redux'

import tasks from './tasks'

const rootReducer = (state, action) => {
  const appReducer = combineReducers({
    tasks
  })

  return appReducer(state, action)

  // switch (action.type) {
  //   case "ADD_UNCOMPLETED":
  //     return { ...state, uncompleted: [...state.uncompleted, action.payload] };
  //
  //   case "ADD_COMPLETED":
  //     return { ...state, completed: [...state.completed, action.payload] };
  //
  //   case "DELETE_UNCOMPLETED":
  //     return {
  //       ...state,
  //       uncompleted: state.uncompleted.filter(
  //         (task) => task !== action.payload
  //       ),
  //     };
  //
  //   case "DELETE_COMPLETED":
  //     return {
  //       ...state,
  //       completed: state.completed.filter((task) => task !== action.payload),
  //     };
  //
  //   default:
  //     return state;
}

export default rootReducer

export const getCompleted = state => tasks.getCompleted(state.tasks)
export const getUncompleted = state => tasks.getUncompleted(state.tasks)

