import { shallowEqual as shallowReduxEqual } from 'react-redux/es/exports'
import { useSelector as useReduxSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { useMemo } from 'react'
import { bindActionCreators } from 'redux'

const resolve = value => (typeof value === 'function') ? value() : value

export const reducersMap = (reducerMap, initialState) => (state, action) => {
  if (state === undefined) {
    state = resolve(initialState)
  }

  const reducer = reducerMap[action.type]

  return reducer
    ? reducer(state, action)
    : state
}

export function reduceReducers(initialState, ...reducers) {
  initialState = resolve(initialState)

  const reducer = (state = initialState, action) => {
    return reducers.reduce((s, reducer) => reducer(s, action), state)
  }

  reducer.initialState = initialState
  reducer.init = newState => ({ ...initialState, ...newState })

  return reducer
}

export function useSelector(selector, props, equalityFn = shallowReduxEqual) {
  return useReduxSelector(state => selector(state, props), equalityFn)
}

export function useActions(actions) {
  const dispatch = useDispatch()

  return useMemo(() => {
    const result = {}

    Object.keys(actions).forEach(k => {
      result[k] = bindActionCreators(actions[k], dispatch)
    })

    return result
  }, [dispatch])
}
