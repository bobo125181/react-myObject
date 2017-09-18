import React, {Component} from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import { Route } from 'react-router'
import routes from './router/index'
import { Provider } from 'react-redux'
import configureStroe from '../stores/store'
let store = configureStroe()
class App extends Component {
    render() {
        return (
            <Provider store={store}>
            <Router>
            <div>
            {routes.map((router) => {
                return <Route {...router}/>
            })}
            </div>
            </Router>
            </Provider>
        )
    }
}
export default App