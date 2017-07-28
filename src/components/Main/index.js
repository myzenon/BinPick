import React, { Component } from 'react'
import { View, Text } from 'react-native'
import locales from '../../locales'

export default class Root extends Component {
    state = {  }
    render() {
        return (
            <View>
                <Text>{locales.t('greeting')}</Text>
            </View>
        )
    }
}
