import React, { Component } from 'react'
import { View, Image, ScrollView, Text, TouchableOpacity } from 'react-native'
import { Container, Header, Body, Title, Left, Button, Icon, Right } from 'native-base'
import styles from './styles'
import { Actions } from 'react-native-router-flux'
import locales from '../../locales'

const TrashItem = (props) => (
    <TouchableOpacity style={styles.category} activeOpacity={0.7} onPress={() => Actions.suggest({trash: props.trash})}>
        <Image style={styles.image} source={props.trash.image}>
            <View style={styles.nameWrapper}>
                <Text style={styles.name}> {locales.getTrashText(props.trash.name, {capitalize: true})} </Text>
            </View>
        </Image>
    </TouchableOpacity>
)

export default class Trash extends Component {

    renderProducts() {
        const category = this.props.category
        let arrProducts = []

        for (let i = 0; i < category.products.length; i += 3) {

            arrProducts.push(
                 <View style={styles.rowCategory} key={i}>
                    <TrashItem trash={category.products[i]} />
                    { i === category.products.length - 1 ? null : <TrashItem trash={category.products[i + 1]} /> }
                    { i + 1 === category.products.length - 1 || i === category.products.length - 1 ? null : <TrashItem trash={category.products[i + 2]} /> }
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
