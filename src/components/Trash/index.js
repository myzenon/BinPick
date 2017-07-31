import React, { Component } from 'react'
import { View, Image, ScrollView, Text, TouchableOpacity } from 'react-native'
import { Container, Header, Body, Title, Left, Button, Icon, Right } from 'native-base'
import styles from './styles'
import { Actions } from 'react-native-router-flux'
import locales from '../../locales'
import { connect } from 'react-redux'
import { addBinLocalStats, addWasteLocalStats } from '../../actions/statistics'

const TrashItem = (props) => (
    <TouchableOpacity style={styles.category} activeOpacity={0.7} onPress={() => props.goToSuggestPage(props.trash)}>
        <Image style={styles.image} source={props.trash.image}>
            <View style={styles.nameWrapper}>
                <Text style={styles.name}> {locales.getTrashText(props.trash.name, {capitalize: true})} </Text>
            </View>
        </Image>
    </TouchableOpacity>
)

class Trash extends Component {
    saveStats(trash) {
        this.props.saveBinStats(trash.bins[0])
        this.props.saveWasteStats(this.props.category.name.en)
    }
    goToSuggestPage(trash) {
        this.saveStats(trash)
        Actions.suggest({trash})
    }
    renderProducts() {
        const category = this.props.category
        let arrProducts = []

        for (let i = 0; i < category.products.length; i += 3) {

            arrProducts.push(
                 <View style={styles.rowCategory} key={i}>
                    <TrashItem trash={category.products[i]} goToSuggestPage={this.goToSuggestPage.bind(this)} />
                    { i === category.products.length - 1 ? null : <TrashItem trash={category.products[i + 1]} goToSuggestPage={this.goToSuggestPage.bind(this)} /> }
                    { i + 1 === category.products.length - 1 || i === category.products.length - 1 ? null : <TrashItem trash={category.products[i + 2]} goToSuggestPage={this.goToSuggestPage.bind(this)} /> }
                </View>
            )
        }
        return arrProducts
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
                        <Title style={styles.title}>{locales.getTrashText(this.props.category.name, {capitalize: true})}</Title>
                    </Body>
                    <Right />
                </Header>
                {this.props.renderStatusBar(this.props.name)}
                <ScrollView style={styles.contentWrapper}>
                    {this.renderProducts()}
                </ScrollView>
            </Container>
        )
    }
}

export default connect(
    null,
    {
        saveBinStats: addBinLocalStats,
        saveWasteStats: addWasteLocalStats
    }
)(Trash)