import React, { Component } from 'react'
import { View, Text, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import { Icon } from 'native-base'
import SlideButton from './Slider'
import elevation from '../../utils/elevation'
import styles from './styles'
import IconAwesome from 'react-native-vector-icons/FontAwesome'
import bins from '../../data/bins'
import locales from '../../locales'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { updateSelectedBins } from '../../actions/selectedBins'
import { updateRemoteStats, resetLocalStats } from '../../actions/statistics'
import addStats from '../../api/addStats'
import getStats from '../../api/getStats'

class Main extends Component {
    constructor() {
        super()
        this.state = {
            bins: {}
        }
        Object.keys(bins).forEach((binKey) => {
            this.state.bins[binKey] = false
        })
    }
    setWindowHeight() {
        const { width, height } = Dimensions.get('window')
        this.windowHeight = width > height ? width : height
    }
    componentWillMount() {
        this.setWindowHeight()
        this.sendStatsData()
    }
    getStatsData() {
        getStats().then((stats) => {
            this.props.updateRemoteStats(stats)
        })
    }
    sendStatsData() {
        addStats(this.props.local_statistics.bin_statistics, this.props.local_statistics.waste_statistics).then(() => {
            this.getStatsData()
            this.props.resetLocalStats()
        })
    }
    goToStatsPage() {
        this.sendStatsData()
        Actions.statistics()
    }
    toggleBin(binKey) {
        const bins = {...this.state.bins}
        bins[binKey] = !bins[binKey]
        this.setState({bins})
    }
    saveBins() {
        this.props.saveBins(this.state.bins)
        Actions.category()
    }
    renderBinSlider() {
        const binKeys = Object.keys(this.state.bins)
        if (binKeys.filter((binKey) => !this.state.bins[binKey]).length === binKeys.length) {
            return null
        }
        return (
            <SlideButton
                onSlideSuccess={() => {
                    this.saveBins()
                }}
                successfulSlidePercent={40}
            >
                <View style={styles.sliderBin}>
                    {
                        Object.keys(bins).map(binKey => {
                            if (this.state.bins[binKey]) {
                                return (
                                    <Image key={binKey} source={bins[binKey].image} style={styles.sliderBinImage} />
                                )
                            }
                            return null
                        })
                    }
                </View>
            </SlideButton>
        )
    }
    render() {
        return (
            <ScrollView style={styles.wrapper} bounces={false}>
                {this.props.renderStatusBar(this.props.name)}
                <View style={[styles.fixedWrapper, {height: this.windowHeight}]}>
                    <View style={styles.logoWrapper}>
                        <Image source={require('../../images/Logo.png')} style={styles.logoImage} />
                    </View>
                    <View style={[styles.selectBinWrapper, elevation(10)]}>
                        <View style={styles.binWrapper}>
                            {Object.keys(bins).map(binKey => (
                                <TouchableOpacity
                                    key={binKey}
                                    style={styles.binImageWrapper}
                                    activeOpacity={0.8}
                                    onPress={() => this.toggleBin(binKey)}
                                >
                                    <Image source={bins[binKey].image} style={styles.binImage} />
                                    {this.state.bins[binKey] ? (
                                        <View style={styles.checkWrapper}>
                                            <Image source={require('../../images/Check.png')} style={styles.checkImage} />
                                        </View>
                                    ) : null}
                                </TouchableOpacity>
                            ))}
                        </View>
                        <View style={styles.binSuggestWrapper}>
                            <Text style={styles.binSuggestText}>{locales.t('binSuggest')}</Text>
                        </View>
                    </View>
                    <View style={styles.sliderWrapper}>
                        <View style={styles.sliderFrame}>
                            <View style={styles.sliderSpace} />
                            <Text style={styles.sliderText}>
                                {locales.t('binSlide')}&nbsp;&nbsp;&nbsp;&nbsp;
                            </Text>
                            <Icon name="arrow-forward" style={styles.sliderIcon}/>
                            <View style={styles.sliderBinWrapper}>
                                {this.renderBinSlider()}
                            </View>
                        </View>
                    </View>
                    <View style={styles.statsWrapper}>
                        <TouchableOpacity
                            onPress={() => this.goToStatsPage()}
                        >
                            <IconAwesome name="bar-chart-o" style={styles.statsIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => ({
    local_statistics: state.local_statistics
})

export default connect(
    mapStateToProps,
    { 
        saveBins: updateSelectedBins,
        resetLocalStats,
        updateRemoteStats
    }
)(Main)
