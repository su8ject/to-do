import {combineReducers} from 'redux'

import tasks from './tasks'

const rootReducer = (state, action) => {
    const appReducer = combineReducers({
        tasks
    })

    return appReducer(state, action)
}

export default rootReducer

export const getCompleted = state => tasks.getCompleted(state.tasks)
export const getUncompleted = state => tasks.getUncompleted(state.tasks)

