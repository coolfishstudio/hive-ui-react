import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRedirect, Redirect } from 'react-router'

import './style/index.less'

import Container from './containers/Container'
import Home from './containers/Home'
import Practice from './containers/Practice'
import Components from './containers/Components'

import ComponentsIntroduce from './containers/components/Introduce'
import Layout from './containers/components/Layout'
import Icon from './containers/components/Icon'
import Button from './containers/components/Button'

const ComponentElements = {
    introduce: ComponentsIntroduce,
    layout: Layout,
    icon: Icon,
    button: Button
}

render( 
    <Router history={ browserHistory }>
        <Route path='/' component={ Container }>
            <Route path='home' component={ Home } />
            <Route path='practice' component={ Practice } />
            <Route path='components' component={ Components }>
                <Route path=':children' component={ (props) => {
                    const Children = ComponentElements[props.params.children];
                    return <Children /> 
                } } />
            </Route>
            <IndexRedirect to='/home' />
        </Route>
    </Router>,
    document.getElementById('application')
)