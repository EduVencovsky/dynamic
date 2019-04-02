import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
    <div>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </div>,
    document.getElementById('app')
)
