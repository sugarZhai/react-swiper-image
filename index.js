import React from 'react'
import {render} from 'react-dom'
import {Route, Switch,BrowserRouter} from 'react-router-dom'
import App from './app/App';

render((
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}></Route>
        </Switch>
    </BrowserRouter>
), document.getElementById('root'))