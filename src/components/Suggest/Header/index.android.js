import React, { Component } from 'react'
import { View } from 'react-native'
import { Button, Icon, Title } from 'native-base'
import styles from './styles'

export default class Header extends Component {
    render() {
        return (
            <View style={[styles.header, this.props.style]}>
                <View style={styles.leftButton}>
                    <Button transparent>
                        <Icon name="md-arrow-back" style={styles.icon} />
                    </Button>
                </View>
                <View style={styles.titleWrapper}>
                    <Title style={styles.title}>{this.props.title}</Title>
                </View>
                <View style={styles.rightButton} />
            </View>
        )
    }
}
