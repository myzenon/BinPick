import React, { Component } from 'react'
import { View, Image, ScrollView, Text } from 'react-native'
import {} from 'native-base'
import styles from './styles'
import Header from '../Suggest/Header'
import elevation from '../../utils/elevation'
import locales from '../../locales'

export default class BinDetails extends Component {
    render() {
        return (
            <ScrollView>
                <Header style={styles.header} title={locales.t('binDetails')} />
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
                    <View style={styles.cardWrapper}>
                        <View style={[styles.descriptionCard, elevation(10)]}>
                            <View style={styles.binDescriptionTitleWrapper}>
                                <Text style={styles.binDescriptionTitle}>{locales.t('Description')}</Text>
                            </View>
                            <View>
                                <Text style={styles.binDescription}>rjgkejrgbrkejgbrjkgebrejkgvjvjebverbvjrhebvhjervbehjrvbrehjvberjhvbrehjvbrehjvbehrjbvhrebvhejrbvhjerbvehrbvehrjvbehrjvb</Text>
                            </View>
                        </View>
                        <View style={[styles.listTrashCard, elevation(10)]}>
                            <View style={styles.listTrashTitleWrapper}>
                                <Text style={styles.binDescriptionTitle}>List Trash</Text>
                            </View>
                            <View style={styles.listTrashWrapper}>
                                <View style={styles.trashWrapper}>
                                    <View style={styles.trashIndexWrapper}>
                                        <Text style={styles.trashIndex}>1</Text>
                                    </View>
                                    <View style={styles.trashNameWrapper}>
                                        <Text style={styles.trashName}>tissue</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}