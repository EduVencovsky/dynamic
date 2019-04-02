import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './views/HomePage/HomePage'
import PageNotFound from './views/PageNotFound/PageNotFound'
import Header from './components/Header/Header'
import FormPage from './views/FormPage/FormPage'

export default function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/forms/:id?' component={FormPage} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    )
}

