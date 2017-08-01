import React, { Component } from 'react'
import { View, Image, ScrollView, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import Header from '../Header'
import elevation from '../../utils/elevation'
import locales from '../../locales'
import bins from '../../data/bins'
import { Actions, ActionConst } from 'react-native-router-flux'
import { connect } from 'react-redux'

class Suggest extends Component {
    findPossibleBin() {
        const selectedBinKeys = Object.keys(this.props.selectedBins).filter((binKey) => this.props.selectedBins[binKey])
        return this.props.trash.bins.filter((binKey) => selectedBinKeys.indexOf(binKey) !== -1)[0]
    }
    render() {
        const resultBin = this.findPossibleBin()
        return (
            <View>
                {this.props.renderStatusBar(this.props.name)}
                <Header ref="header" style={styles.header} title={locales.getTrashText(this.props.trash.name, {capitalize: true})} onBack={() => Actions.pop()} />
                <ScrollView>
                    <View style={[styles.imageHeaderWrapper, elevation(10)]}>
                        <Image style={styles.imageHeader} source={this.props.trash.image} />
                    </View>
                    <View style={styles.cardWrapper}>
                        <View style={[styles.card, elevation(10)]}>
                            <View style={styles.binWrapper}>
                                <View style={styles.binColor}>
                                    <Text style={styles.titleResult}>{locales.t('binResult')}</Text>
                                    <Text style={[styles.binResult, {color: bins[resultBin].hexColor}]}>{locales.getTrashText(bins[resultBin].color, { capitalize: true })}</Text>
                                </View>
                                <View style={styles.binImageWrapper}>
                                    <Image style={styles.binImage} source={bins[this.findPossibleBin()].image} />
                                </View>
                            </View>
                            <View style={styles.buttonWrapper}>
                                <TouchableOpacity style={styles.selectNewTrashButton} onPress={() => Actions.category({type: ActionConst.POP_TO})}>
                                    <Text style={styles.selectNewTrashButtonName}>{locales.t('newTrashButton')}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[styles.card, {marginTop: 20}, elevation(10)]}>
                            <View style={styles.tipWrapper}>
                                <View style={styles.tipTitleWrapper}>
                                    <Text style={styles.tipTitle}>{locales.t('tip')}</Text>
                                </View>
                                <TouchableOpacity style={styles.binSuggestWrapper}>
                                    <View style={styles.binSuggest}>
                                        <Text style={styles.binSuggestName}>{locales.t('binTip')} {locales.getTrashText(bins[this.props.trash.bins[0]].color)} {locales.t('lastWordColorBin')}</Text>
                                        <View style={styles.binSuggestImageWrapper}>
                                            <Image style={styles.binSuggestImage} source={bins[this.props.trash.bins[0]].image} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                {
                                    this.props.trash.tips.map((tip, index) => {
                                        return (
                                            <View style={styles.suggestionWrapper} key={index}>
                                                <View style={styles.suggestion}>
                                                    <Text style={styles.suggestionDetail}>{locales.getTrashText(tip.detail)}</Text>
                                                </View>
                                                <View style={styles.imageSuggestionWrapper}>
                                                    <Image style={styles.imageSuggestion} source={tip.image} />
                                                </View>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        selectedBins: state.selectedBins
    }
}
export default connect(
    mapStateToProps
)(Suggest)
