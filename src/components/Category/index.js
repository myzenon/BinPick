import React, { Component } from 'react'
import { View, Image, ScrollView, Text, TouchableOpacity } from 'react-native'
import { Container } from 'native-base'
import styles from './styles'
import locales from '../../locales'
import { Actions } from 'react-native-router-flux'
import categories from '../../data/trashes'
import Header from '../Header'

const CategoryItem = (props) => (
    <TouchableOpacity style={styles.category} activeOpacity={0.7} onPress={() => Actions.trash({category: props.category})}>
        <Image style={styles.image} source={props.category.image}>
            <View style={styles.nameWrapper}>
                <Text style={styles.name}>{locales.getTrashText(props.category.name, {capitalize: true})}</Text>
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
                <Header style={styles.header} title={locales.t('category')} onBack={() => Actions.pop()} />
                {this.props.renderStatusBar(this.props.name)}
                <ScrollView style={styles.contentWrapper}>
                    {this.renderCategories()}
                </ScrollView>
            </Container>
        )
    }
}
