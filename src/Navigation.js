import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Main from './components/Main'
import Trash from './components/Trash'
import Category from './components/Category'
import Statistic from './components/Statistic'

export default () => (
    <Router>
        <Scene key="root">
            <Scene key="main" component={Main} hideNavBar />
            <Scene key="trash" component={Trash} hideNavBar />
            <Scene key="category" component={Category} hideNavBar />
            <Scene key="statistic" component={Statistic} hideNavBar initial />
        </Scene>
    </Router>
)
