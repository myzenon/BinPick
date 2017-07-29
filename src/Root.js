import React, { Component } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { Spinner } from 'native-base'
import Store from './Store'
import Navigation from './Navigation'

import getStats from './api/getStats'
import { updateStats } from './actions/statistics'

class Root extends Component {
    state = {
        isLoading: true,
        store: Store(() => this.onStoreReady()),
    }
    onStoreReady() {
        this.setState({ isLoading: false })
        getStats()
            .then((stats) => {
                this.state.store.dispatch(updateStats(stats))
            })
    }
    render () {
        if (this.state.isLoading) {
            return (
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Spinner color="black" />
                </View>
            )
        }
        return (
            <Provider store={this.state.store}>
                <Navigation />
            </Provider>
        )
    }
}

export default Root
