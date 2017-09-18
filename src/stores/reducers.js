//导出action_type类型，以及应用的所有类型
import {ADD_TODO, VisibilityFilters, TOGGLE_TODO, SET_VISIBILITY_FILTER} from './action_type'
import { combineReducers } from 'redux'
//功能模块的 type类型
const {SHOW_ALL} = VisibilityFilters;
const initState = {
    visibilityFilters: VisibilityFilters.SHOW_ALL,
    todos: [
        {
            text: 'html',
            completed: false
        },
        {
            text: 'js',
            completed: false
        },
        {
            text: 'css',
            completed: false
        }
    ]
}
function visibilityFilter (state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
        return action.filter;
    default:
        return state;
    }
}
function todos (state = [], action)  {
    switch (action.type) {
    case ADD_TODO:
        return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
    case TOGGLE_TODO:
             return state.map((todo, index) => {
                if(index === action.index){
                   todo.completed = !todo.completed
                }
                return todo;
            })
    default:
        return state;
    }

}
// function todoApp (state = initState, action) {
//     return {
//         VisibilityFilter: VisibilityFilter(state.VisibilityFilter,action),
//         todos: todos(state.todos, action)
//     }
// }
const todoApp = combineReducers({
    visibilityFilter,
    todos
})
export default todoApp;