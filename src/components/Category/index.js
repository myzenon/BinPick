import React, { Component } from 'react'
import { StatusBar, View, Image, ScrollView, Text, TouchableOpacity } from 'react-native'
import { Container, Header, Body, Title, Left, Button, Icon, Right } from 'native-base'
import styles from './styles'

const categories = {
    FOOD : {
        name: {
            th: '',
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

export default class Category extends Component {

    renderCategories() {
        const categoriesLength = Object.keys(categories).length
        const keyCategories = Object.keys(categories)
        let arrCategories = []

        for (let i = 0; i < categoriesLength; i+=2) {
            arrCategories.push(
                 <View style={styles.rowCategory} key={i}>
                    <TouchableOpacity style={styles.category} activeOpacity={0.7} onPress={console.log('ส่ง key ของ category ไปให้อีกหน้า')}>
                        <Image style={styles.image} source={categories[keyCategories[i]].image}>
                            <View style={styles.nameWrapper}>
                                <Text style={styles.name}> {categories[keyCategories[i]].name.en} </Text>
                            </View>
                        </Image>
                    </TouchableOpacity>
                    { i === categoriesLength - 1 ? null :
                    <TouchableOpacity style={styles.category} activeOpacity={0.7} onPress={console.log('ส่ง key ของ category ไปให้อีกหน้า')}>
                        <Image style={styles.image} source={categories[keyCategories[i + 1]].image}>
                            <View style={styles.nameWrapper}>
                                <Text style={styles.name}> {categories[keyCategories[i + 1]].name.en} </Text>
                            </View>
                        </Image>
                    </TouchableOpacity> }
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
                        <Button transparent>
                            <Icon ios="ios-arrow-back" android="md-arrow-back" style={styles.icon} />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.title}> Category </Title>
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
