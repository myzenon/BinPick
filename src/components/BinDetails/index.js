import React, { Component } from 'react'
import { View, Image, ScrollView } from 'react-native'
import {} from 'native-base'
import styles from './styles'
import Header from '../Suggest/Header'

export default class BinDetails extends Component {
    render() {
        return (
            <ScrollView>
                <Header style={styles.header} title="Bin Details" />
                <View style={styles.binsWrapper}>
                    <View style={styles.binsImageWrapper}>
                        <View style={styles.imageWrapper}>
                            <Image style={styles.binImage} source={require('../../images/bins/Blue.png')} />
                        </View>
                        <View style={styles.imageWrapper}>
                            <Image style={styles.binImage} />
                        </View>
                        <View style={styles.imageWrapper}>
                            <Image style={styles.binImage} />
                        </View>
                        <View style={styles.imageWrapper}>
                            <Image style={styles.binImage} />
                        </View>
                    </View>
                    <View style={styles.binDescriptionWrapper}></View>
                    <View style={styles.listTrashWrapper}></View>
                </View>
            </ScrollView>
        )
    }
}