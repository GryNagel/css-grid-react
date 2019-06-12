import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from './Layout';
import Header from './Header';
import Dashboard from './components/Dashboard'
import Report from './components/Report'

export default function App() {
    return (
        <div className="app">
            <Router>
                <Header/>
                <Route exact path="/" component={Layout} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/report" component={Report} />
            </Router>
        </div>
    )
}
