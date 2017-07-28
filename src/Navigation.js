import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Main from './components/Main'

export default () => (
    <Router>
        <Scene key="root">
            <Scene key="main" component={Main} hideNavBar initial />
        </Scene>
    </Router>
)
