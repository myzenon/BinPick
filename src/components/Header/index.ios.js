import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button, Icon } from 'native-base'
import styles from './styles'

export default class Header extends Component {

    leftButtonWidth = 0

    getLeftButtonHeight(event) {
        this.leftButtonWidth = event.nativeEvent.layout.width
        this.forceUpdate()
    }

    render() {
        return (
            <View style={[styles.header, this.props.style]}>
                <View onLayout={this.getLeftButtonHeight.bind(this)} style={styles.leftButton}>
                    <Button
                        onPress={this.props.onBack}
                        transparent
                    >
                        <Icon name="ios-arrow-back" style={styles.icon} />
                    </Button>
                </View>
                <View style={styles.titleWrapper}>
                    <Text style={[styles.title, {marginLeft: this.leftButtonWidth * -1}]}>{this.props.title}</Text>
                </View>
                <View style={styles.rightButton} />
            </View>
        )
    }
}
