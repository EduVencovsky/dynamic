import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './views/HomePage/HomePage'
import PageNotFound from './views/PageNotFound/PageNotFound'

export default function App() {
    return (
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route component={PageNotFound} />
        </Switch>
    )
}

