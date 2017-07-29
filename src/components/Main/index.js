import React, {Component} from 'react'
import {View, Text, StatusBar, Image,ScrollView,Dimensions, TouchableOpacity} from 'react-native'
import {Container, Icon} from 'native-base'
import SlideButton from '../Slider'
import elevation from '../../utils/elevation'
import styles from './styles'
import IconAwesome from 'react-native-vector-icons/FontAwesome'
import bins from '../../data/bins'
import locales from '../../locales'

export default class Main extends Component {
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
    }
    toggleBin(binKey) {
        const bins = {...this.state.bins}
        bins[binKey] = !bins[binKey]
        this.setState({bins})
    }
    renderBinSlider() {
        const binKeys = Object.keys(this.state.bins)
        if (binKeys.filter((binKey) => !this.state.bins[binKey]).length === binKeys.length) {
            return null
        }
        return (
            <SlideButton
                onSlideSuccess={() => {
                    alert('Yeew !!')
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
                <StatusBar
                    backgroundColor="transparent"
                    barStyle="light-content"
                    translucent={true}/>
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
                        <IconAwesome name="bar-chart-o" style={styles.statsIcon} />
                    </View>
                </View>
            </ScrollView>
        )
    }
}
