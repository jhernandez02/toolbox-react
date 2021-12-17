import { createStore } from 'redux'
import rootReducer from './reducers/index'

let storeApp = createStore(rootReducer)

export default storeApp