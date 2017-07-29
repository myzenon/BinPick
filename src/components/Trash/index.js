import React, { Component } from 'react'
import { StatusBar, View, Image, ScrollView, Text, TouchableOpacity } from 'react-native'
import { Container, Header, Body, Title, Left, Button, Icon, Right } from 'native-base'
import styles from './styles'

const category = {
    name: {
        th: '',
        en: 'FOOD'
    },
    products: [
        {
            name: {
                th: '',
                en: 'Plastic Botton'
            },
            image: require('../../image/food.jpg')
        },
        {
            name: {
                th: '',
                en: 'Glass Botton'
            },
            image: require('../../image/food.jpg')
        },
        {
            name: {
                th: '',
                en: 'Noodle Cup'
            },
            image: require('../../image/food.jpg')
        },
        {
            name: {
                th: '',
                en: 'Plastic Box'
            },
            image: require('../../image/food.jpg')
        },
        {
            name: {
                th: '',
                en: 'Foam Box'
            },
            image: require('../../image/food.jpg')
        }
    ]
}

export default class Trash extends Component {

    renderProducts() {
        let arrProducts = []

        for (let i = 0; i < category.products.length; i+=3) {
            console.log(category.products[0].image)
            arrProducts.push(
                 <View style={styles.rowCategory} key={i}>
                    <TouchableOpacity style={styles.category} activeOpacity={0.7} onPress={console.log('ส่ง key ของ category ไปให้อีกหน้า')}>
                        <Image style={styles.image} source={category.products[i].image}>
                            <View style={styles.nameWrapper}>
                                <Text style={styles.name}> {category.products[i].name.en} </Text>
                            </View>
                        </Image>
                    </TouchableOpacity>
                    { i === category.products.length - 1 ? null :
                    <TouchableOpacity style={styles.category} activeOpacity={0.7} onPress={console.log('ส่ง key ของ category ไปให้อีกหน้า')}>
                        <Image style={styles.image} source={category.products[i+1].image}>
                            <View style={styles.nameWrapper}>
                                <Text style={styles.name}> {category.products[i+1].name.en} </Text>
                            </View>
                        </Image>
                    </TouchableOpacity> }
                    { i + 1 === category.products.length - 1 || i === category.products.length - 1 ? null :
                    <TouchableOpacity style={styles.category} activeOpacity={0.7} onPress={console.log('ส่ง key ของ category ไปให้อีกหน้า')}>
                        <Image style={styles.image} source={category.products[i+2].image}>
                            <View style={styles.nameWrapper}>
                                <Text style={styles.name}> {category.products[i+2].name.en} </Text>
                            </View>
                        </Image>
                    </TouchableOpacity> } 
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
                        <Button transparent>
                            <Icon ios="ios-arrow-back" android="md-arrow-back" style={styles.icon} />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.title}>{category.name.en}</Title>
                    </Body>
                    <Right />
                </Header>
                <StatusBar backgroundColor="#004D40" barStyle="light-content" />
                <ScrollView style={styles.contentWrapper}>
                    {this.renderProducts()}
                </ScrollView>
            </Container>
        )
    }
}
