import t from '../action-types'

export const addUncompleted = task => {
  return {
    type: t.ADD_UNCOMPLETED,
    task,
  }
}
