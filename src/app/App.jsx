import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './views/HomePage/HomePage'
import PageNotFound from './views/PageNotFound/PageNotFound'
import Header from './components/Header/Header'
import FormList from './views/FormList/FormList'
import FormEdit from './views/FormEdit/FormEdit'

export default function App() {
    return (
        <div className='container-fluid'>
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/editforms/:id' component={FormEdit} />
                <Route path='/editforms' component={FormEdit} />
                <Route path='/forms' component={FormList} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    )
}

