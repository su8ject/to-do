import { reduceReducers, reducersMap } from '../helpers'
import t from '../action-types'

const initialState = {
  uncompleted: [],
  completed  : [],
}

const tasksReducer = reduceReducers(initialState,
  reducersMap(
    {
      [t.ADD_UNCOMPLETED]: (state, action) => ({ ...state, uncompleted: [...state.uncompleted, action.task] })
    },
    {}
  ))

export default tasksReducer

tasksReducer.getCompleted = state => state.completed
tasksReducer.getUncompleted = state => state.uncompleted
