// import { createStore} from 'redux';
// import todoApp from './reducers'
// import { setVisilityFilter, addTodo, toggleTodo } from './action_type'
// let store = createStore(todoApp)
// console.log(store.getState())
// let unsubscribe = store.subscribe(() => {
//     console.log('监听。。。。')
//     console.log(store.getState())
// })
// // store.dispatch(setVisilityFilter('1111'))
// store.dispatch(addTodo('php'))
// // store.dispatch(toggleTodo(1))
// unsubscribe();
import {createStore, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger';
import rootReducer from './reducers';
const loggerMiddleware = createLogger();
const createStoreWithMiddleware = applyMiddleware(
    loggerMiddleware
)(createStore);
export default function configureStore(initState) {
    return createStoreWithMiddleware(rootReducer, initState)
}