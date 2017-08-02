import React, { Component } from 'react'
import { View, Image, ScrollView, Text, TouchableOpacity } from 'react-native'
import { Container } from 'native-base'
import styles from './styles'
import locales from '../../locales'
import bins from '../../data/bins'
import elevation from '../../utils/elevation'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import Header from '../Header'

class Statistics extends Component {
    componentWillMount() {
        const bin_statistics = {...this.props.remote_bin_stats}
        Object.keys(this.props.local_bin_stats).forEach((binKey) => bin_statistics[binKey] += this.props.local_bin_stats[binKey])
        this.setState({bin_statistics})
    }
    calculatePercentage(bin) {
        const allTrash = Object.keys(this.state.bin_statistics).reduce((sum, binKey) => sum += parseInt(this.state.bin_statistics[binKey]), 0)
        return (bin / allTrash) * 100
    }
    getBinAmount(bin) {
        return (parseInt(this.props.remote_bin_stats[bin]) + parseInt(this.props.local_bin_stats[bin])).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    }
    render() {
        return (
            <Container>
                <Header style={styles.header} title={locales.t('statistic')} onBack={() => Actions.pop()} />
                {this.props.renderStatusBar(this.props.name)}
                <ScrollView>
                    <View style={[styles.cardWrapper, elevation(10)]}>
                        <View style={styles.binsWrapper}>
                            {
                                Object.keys(bins).map((binKey) => {
                                    const percentage = this.calculatePercentage(this.state.bin_statistics[binKey])
                                    return (
                                        <View style={styles.bin} key={binKey}>
                                            <TouchableOpacity style={styles.binImageWrapper} onPress={() => Actions.binDetails({binKey})}>
                                                <Image style={styles.binImage} source={bins[binKey].image} />
                                            </TouchableOpacity>
                                            <View style={styles.binDetail}>
                                                <View style={styles.binLabel}>
                                                    <View style={styles.binLabelLeft}>
                                                        <Text style={styles.binName}>{locales.getTrashText(bins[binKey].name)}</Text>
                                                        <Text style={styles.binAmount}>({this.getBinAmount(binKey)})</Text>
                                                    </View>
                                                    <Text style={styles.binPercent}>{percentage.toFixed(1) + '%'}</Text>
                                                </View>
                                                <View style={styles.statWrapper}>
                                                    <View style={[styles.progressBar, {flex: percentage}]} />
                                                    <View style={[styles.totalBar, {flex: 100 - percentage}]} />
                                                </View>
                                            </View>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </View>
                </ScrollView>
            </Container>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        remote_bin_stats: state.remote_statistics.bin_statistics,
        local_bin_stats: state.local_statistics.bin_statistics
    }
}

export default connect(
    mapStateToProps
)(Statistics)
