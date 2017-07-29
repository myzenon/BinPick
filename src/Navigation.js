import React from 'react'
import { connect } from 'react-redux'
import { Router, Scene } from 'react-native-router-flux'
import Main from './components/Main'
import Trash from './components/Trash'
import Category from './components/Category'
import Statistic from './components/Statistic'
import Suggest from './components/Suggest'


const RouterWithRedux = connect()(Router)

export default () => (
    <RouterWithRedux>
        <Scene key="root">
            <Scene key="main" component={Main} hideNavBar />
            <Scene key="category" component={Category} hideNavBar />
            <Scene key="trash" component={Trash} hideNavBar />
            <Scene key="statistic" component={Statistic} hideNavBar />
            <Scene key="suggest" component={Suggest} hideNavBar initial />
        </Scene>
    </RouterWithRedux>
)
