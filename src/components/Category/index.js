import React, { Component } from 'react'
import { StatusBar, View, Image, ScrollView, Text, TouchableOpacity } from 'react-native'
import { Container, Header, Body, Title, Left, Button, Icon, Right } from 'native-base'
import styles from './styles'
import locales from '../../locales'
import { Actions } from 'react-native-router-flux'

const categories = {
    FOOD : {
        name: {
            th: 'อาหาร',
            en: 'FOOD'
        },
        image: require('../../image/food.jpg')
    },
    PAPER : {
        name: {
            th: '',
            en: 'PAPER'
        },
        image: require('../../image/food.jpg')
    },
    CLOTH : {
        name: {
            th: '',
            en: 'CLOTH'
        },
        image: require('../../image/food.jpg')
    },
    MEDICINE : {
        name: {
            th: '',
            en: 'MACHINE'
        },
        image: require('../../image/food.jpg')
    },
    ELECTRONIC : {
        name: {
            th: '',
            en: 'ELECTRONIC'
        },
        image: require('../../image/food.jpg')
    }
}

const CategoryItem = (props) => (
    <TouchableOpacity style={styles.category} activeOpacity={0.7} onPress={() => Actions.trash({category: props.category})}>
        <Image style={styles.image} source={props.category.image}>
            <View style={styles.nameWrapper}>
                <Text style={styles.name}>{locales.getTrashText(props.category.name)}</Text>
            </View>
        </Image>
    </TouchableOpacity>
)

export default class Category extends Component {
    renderCategories() {
        const categoriesLength = Object.keys(categories).length
        const keyCategories = Object.keys(categories)
        let arrCategories = []

        for (let i = 0; i < categoriesLength; i += 2) {
            arrCategories.push(
                 <View style={styles.rowCategory} key={i}>
                    <CategoryItem category={categories[keyCategories[i]]} />
                    { i === categoriesLength - 1 ? null : <CategoryItem category={categories[keyCategories[i + 1]]} /> }
                </View>
            )
        }
        return arrCategories
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
                        <Title style={styles.title}>{locales.t('category')}</Title>
                    </Body>
                    <Right />
                </Header>
                <StatusBar backgroundColor="#004D40" barStyle="light-content" />
                <ScrollView style={styles.contentWrapper}>
                    {this.renderCategories()}
                </ScrollView>
            </Container>
        )
    }
}
