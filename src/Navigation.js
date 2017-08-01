import React, {Component} from 'react'
import { View, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import { Router, Reducer, Scene } from 'react-native-router-flux'
import Main from './components/Main'
import Trash from './components/Trash'
import Category from './components/Category'
import Statistics from './components/Statistics'
import Suggest from './components/Suggest'
import BinDetails from './components/BinDetails'


class RouterWithRedux extends Component {
    reducerCreate (params) {
        const defaultReducer = new Reducer(params)
        return (state, action) => {
            this.props.dispatch(action);
            return defaultReducer(state, action)
        }
    }

    render () {
        return (
            <Router {...this.props} createReducer={this.reducerCreate.bind(this)} >
                {this.props.children}
            </Router>
        )
    }
}

RouterWithRedux = connect()(RouterWithRedux);

const renderStatusBar = (routeName) => {
        switch (routeName) {
            case 'main' :
                return (
                    <StatusBar
                        backgroundColor="transparent"
                        barStyle="light-content"
                        translucent
                    />
                )
            case 'suggest' :
                return (
                    <StatusBar
                        backgroundColor="#000"
                        barStyle="light-content"
                        translucent={false}
                    />
                )
            default :
                return (
                    <StatusBar
                        backgroundColor="#004D40"
                        barStyle="light-content"
                        translucent={false}
                    />
                )
        }
    }

export default () => (
    <RouterWithRedux renderStatusBar={renderStatusBar}>
        <Scene key="root">
            <Scene key="main" component={Main} hideNavBar initial />
            <Scene key="category" component={Category} hideNavBar />
            <Scene key="trash" component={Trash} hideNavBar />
            <Scene key="statistics" component={Statistics} hideNavBar />
            <Scene key="suggest" component={Suggest} hideNavBar />
            <Scene key="binDetails" component={BinDetails} hideNavBar />
        </Scene>
    </RouterWithRedux>
)
