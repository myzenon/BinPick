import React, { Component } from 'react'
import { View, Image, ScrollView, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import Header from '../Header'
import elevation from '../../utils/elevation'
import locales from '../../locales'
import bins from '../../data/bins'
import { Actions } from 'react-native-router-flux'

export default class BinDetails extends Component {

    componentWillMount() {
        const binsSelected = {}

        Object.keys(bins).forEach((binKey, index) => {
            binsSelected[binKey] = false
            if (this.props.binKey === undefined) {
                if (index === 0) {
                    binsSelected[binKey] = true
                }
            }
            else {
                binsSelected[this.props.binKey] = true
            }
        })

        this.setState({ binsSelected })

    }

    selectBin(binKey) {
        const binSelectedNew = { ...this.state.binsSelected }
        Object.keys(binSelectedNew).forEach((key) => {
            binSelectedNew[key] = false
        })
        binSelectedNew[binKey] = !binSelectedNew[binKey]

        this.setState({
            binsSelected: binSelectedNew
        })
    }

    findBinSelected() {
        let binSelected = ''

        Object.keys(this.state.binsSelected).forEach((binKey) => {
            binSelected = this.state.binsSelected[binKey] ?  binKey : binSelected
        })

        return binSelected
    }
    render() {
        const binSelected = this.findBinSelected()
        return (
            <ScrollView>
                <Header style={styles.header} title={locales.t('binDetails')} onBack={() => Actions.pop()} />
                {this.props.renderStatusBar(this.props.name)}
                <View style={styles.binsWrapper}>
                    <View style={styles.binsImageWrapper}>
                        {
                            Object.keys(bins).map((binKey) => {
                                return (
                                    <TouchableOpacity style={styles.imageWrapper} key={binKey} onPress={ () => this.selectBin(binKey) }>
                                         <Image style={styles.binImage} source={ this.state.binsSelected[binKey] ? bins[binKey].image2.open : bins[binKey].image2.close } /> 
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                    <View style={styles.cardWrapper}>
                        <View style={[styles.descriptionCard, elevation(10)]}>
                            <View style={styles.imageDescriptionWrapper}>
                                 <Image style={styles.imageDescription} source={bins[binSelected].image} />
                            </View>
                            <View style={styles.binDescriptionWrapper}>
                                <View style={styles.binDescriptionTitleWrapper}>
                                    <Text style={styles.binDescriptionTitle}>{locales.getTrashText(bins[binSelected].name)}</Text>
                                </View>
                                <View>
                                    <Text style={styles.description}>{locales.getTrashText(bins[binSelected].description)}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.listTrashCard, elevation(10)]}>
                            <View style={styles.listTrashTitleWrapper}>
                                <Text style={styles.binDescriptionTitle}>{locales.t('listTrash')}</Text>
                            </View>
                            <View style={styles.listTrashWrapper}>
                                {
                                    bins[binSelected].trashList.map((binKey, index) => {
                                        return (
                                            <View style={styles.trashWrapper} key={index}>
                                                <View style={styles.trashIndexWrapper}>
                                                    <Text style={styles.trashIndex}>{index + 1}</Text>
                                                </View>
                                                <View style={styles.trashNameWrapper}>
                                                    <Text style={styles.trashName}>{locales.getTrashText(bins[binSelected].trashList[index])}</Text>
                                                </View>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}