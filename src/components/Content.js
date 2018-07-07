import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home, Categories } from './'
import { Navbar } from '../containers'
const Content = () => (
    <div>
        <Navbar />
        <br />
        <div className="container">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/categories" component={Categories} />
                <Route render={() => <h4>Not Found !!</h4>} />
            </Switch>
        </div>
    </div>
)

export default Content