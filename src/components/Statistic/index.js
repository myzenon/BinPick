import React, { Component } from 'react'
import { View, Image, ScrollView } from 'react-native'
import { Container, Header, Left, Button, Icon, Body, Right, Title, Text } from 'native-base'
import styles from './styles'
import locales from '../../locales'
import bins from '../../data/bins'
import elevation from '../../utils/elevation'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

class Statistic extends Component {
    calculatePercentage(bin) {
        const allTrash = Object.keys(this.props.bin_statistics).reduce((sum, binKey) => sum += parseInt(this.props.bin_statistics[binKey]), 0)
        return (bin / allTrash) * 100
    }

    render() {
        return (
            <Container>
                 <Header style={styles.header}>
                    <Left>
                        <Button
                            transparent
                            onPress={() => Actions.pop()}
                        >
                            <Icon ios="ios-arrow-back" android="md-arrow-back" style={styles.icon} />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.title}>{locales.t('statistic')}</Title>
                    </Body>
                    <Right />
                </Header>
                {this.props.renderStatusBar(this.props.name)}
                <ScrollView>
                    <View style={[styles.cardWrapper, elevation(10)]}>
                        <View style={styles.binsWrapper}>
                            {
                                Object.keys(bins).map((binKey) => {
                                    const percentage = this.calculatePercentage(this.props.bin_statistics[binKey])
                                    return (
                                        <View style={styles.bin} key={binKey}>
                                            <View style={styles.binImageWrapper}>
                                                <Image style={styles.binImage} source={bins[binKey].image} />
                                            </View>
                                            <View style={styles.binDetail}>
                                                <View style={styles.binLabel}>
                                                    <Text style={styles.binName}>{locales.getTrashText(bins[binKey].name)}</Text>
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
        bin_statistics: state.statistics.bin_statistics
    }
}

export default connect(
    mapStateToProps
)(Statistic)
