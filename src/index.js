import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { App } from './App'
import rootReducer from './store/reducers'
import { createStore, applyMiddleware, compose } from 'redux'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware()))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={ store }>
    <App/>
  </Provider>
)
