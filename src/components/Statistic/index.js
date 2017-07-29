import React, { Component } from 'react'
import { StatusBar, View, Image, ScrollView } from 'react-native'
import { Container, Header, Left, Button, Icon, Body, Right, Title, Text } from 'native-base'
import styles from './styles'
import locales from '../../locales'
import bins from '../../data/bins'
import elevation from '../../utils/elevation'

// const teamID = '2'
// const secretKey = 'C8mGT9'
export default class Statistic extends Component {
    state = {
        bin_statistics: {
            general: 300,
            compostable: 20,
            recycle: 190,
            hazardous: 0,
            can: 5
        }
    }


    // componentWillMount() {
    //     fetch('http://smartbin.devfunction.com/api/?team_id=' + teamID + '&secret=' + secretKey)
    //     .then((response) => response.json())
    //     .then((responseJSON) => {
    //         // console.log(responseJSON.data.bin_statistics)
    //         this.setState({
    //             bin_statistics: responseJSON.data.bin_statistics
    //         })
    //     })
    //     .catch((error) => {
    //         console.warn(error)
    //     })
    // }

    calculatePercentage(bin) {
        const allTrash = this.state.bin_statistics.general + this.state.bin_statistics.compostable + this.state.bin_statistics.recycle
                     + this.state.bin_statistics.hazardous + this.state.bin_statistics.can

        return (bin / allTrash) * 100
    }

    render() {
        return (
            <Container>
                 <Header style={styles.header}>
                    <Left>
                        <Button transparent>
                            <Icon ios="ios-arrow-back" android="md-arrow-back" style={styles.icon} />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.title}>{locales.t('statistic')}</Title>
                    </Body>
                    <Right />
                </Header>
                <StatusBar backgroundColor="#004D40" barStyle="light-content" />
                <ScrollView>
                    <View style={[styles.cardWrapper ,elevation(10)]}>
                        <View style={styles.binsWrapper}>
                            {
                                Object.keys(bins).map((bin) => {
                                    return (
                                        <View style={styles.bin} key={bin}>
                                            <View style={styles.binImageWrapper}>
                                                <Image style={styles.binImage} source={bins[bin].image} />
                                            </View>
                                            <View style={styles.binDetail}>
                                                <View style={styles.binLabel}>
                                                    <Text style={styles.binName}>{bins[bin].name.en}</Text>
                                                    <Text style={styles.binPercent}>{this.calculatePercentage(this.state.bin_statistics[bin]).toFixed(1) + '%'}</Text>
                                                </View>
                                                <View style={styles.statWrapper}>
                                                    <View style={[styles.progressBar, {flex: this.calculatePercentage(this.state.bin_statistics[bin])}]} />
                                                    <View style={[styles.totalBar, {flex: 100 - this.calculatePercentage(this.state.bin_statistics[bin])}]} />
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
