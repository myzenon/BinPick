import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button, Icon } from 'native-base'
import styles from './styles'
import elevation from '../../utils/elevation'

export default class Header extends Component {
    render() {
        return (
            <View style={[styles.header, this.props.style, elevation(5)]}>
                <View style={styles.leftButton}>
                    <Button
                        onPress={this.props.onBack}
                        transparent
                    >
                        <Icon name="md-arrow-back" style={styles.icon} />
                    </Button>
                </View>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
            </View>
        )
    }
}
