import React, { Component } from 'react'
import { StatusBar, View, Image, ScrollView } from 'react-native'
import { Container, Header, Left, Button, Icon, Body, Right, Title, Text } from 'native-base'
import styles from './styles'
import locales from '../../locales'

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
                <ScrollView style={styles.contentWrapper}>
                    <View style={styles.cardWrapper}>
                        <View style={styles.binsWrapper}>
                            <View style={styles.bin}>
                                <View style={styles.binImageWrapper}>
                                    <Image />
                                </View>
                                 <View style={styles.binDetail}>
                                    <View style={styles.binLabel}>
                                        <Text style={styles.binName}>Genetal Waste Bin</Text>
                                        <Text style={styles.binPercent}>{this.calculatePercentage(this.state.bin_statistics[10]).toFixed(1) + '%'}</Text>
                                    </View>
                                    <View style={styles.statWrapper}>
                                        <View style={[styles.progressBar, {flex: 8}]} />
                                        <View style={[styles.totalBar, {flex: 2}]} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </Container>
        )

                        /* {
                                Object.keys(this.state.bin_statistics).map((bin) => {
                                    return (
                                        <View style={styles.bin}>
                                            <View style={styles.image}>
                                                <Image />
                                            </View>
                                            <View style={styles.detail}>
                                                <View style={styles.nameWrapper}>
                                                    <Text style={styles.name}>{bin}</Text>
                                                </View>
                                                <View style={styles.statWrapper}>
                                                    <View style={styles.statPipe}>
                                                        <View style={[styles.stat1, { flex: this.calculatePercentage(this.state.bin_statistics[bin])}]} />
                                                        <View style={[styles.stat2, { flex: 100 - this.calculatePercentage(this.state.bin_statistics[bin])}]} />
                                                    </View>
                                                    <View style={styles.percentWrapper}>
                                                        <Text style={styles.percent}>{this.calculatePercentage(this.state.bin_statistics[bin]).toFixed(1) + '%'}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    )
                                })
                            } */
    }
}