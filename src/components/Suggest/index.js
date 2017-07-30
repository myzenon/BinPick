import React, { Component } from 'react'
import { StatusBar, View, Image, ScrollView, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import Header from './Header'
import elevation from '../../utils/elevation'
import locales from '../../locales'
import bins from '../../data/bins'

const trash = {
        name: {
            en: 'Plastic Bottle',
            th: 'ขวดพลาสติก'
        },
        image: require('../../images/bins/Yellow.png'),
        bins: [
            'general',
            'compostable',
            'recycle',
            'hazardous'
        ], // เรียงตามลำดับความสำคัญ  
        tips: [
            {
                detail: {
                    en: 'ntnmtlnmntlnmtlynmtynyneggwgwgwhwgggggrehreheherhreherherherh',
                    th: 'พะ้พะ้พะ้พะ้พะ้พะ้ะพ้พะ้พะ้พะ้ะพ้ะพ้เำนพ่เำพ่เรำพเ่ำรพนเ่ำรนพเ่ำรพนเ่ำพรนเ่ำรพนเ่รำนพเ่'
                },
                image: require('../../image/food.jpg')
            },
            {
                detail: {
                    en: 'rklgjlrgr;lkg;rtgkt;rgtkjhrjkrtgjkrtngrjgnrjgnrjbgrhjtgbhrtjbgjr',
                    th: 'า่ินพระิืนระพิ้รพนิรพนิืนิะนิืรนิืรนพิืรนพิืเำ่เำ่พาิเ่ำพิเพำ่้ิเำพ่้เิพำ้่ิเำ้พ่ิเ้่พำิเ้ำพ่ิเ้่ำพิเำ้่พเ'
                },
                image: require('../../image/food.jpg')
            }
        ]
    }

export default class Suggest extends Component {
    render() {
        return (
            <ScrollView>
                <View style={[styles.imageHeaderWrapper, elevation(10)]}>
                    <Image style={styles.imageHeader} source={require('../../image/food.jpg')} >
                        <StatusBar backgroundColor="#000" barStyle="light-content" />
                        <Header style={styles.header} title={locales.getTrashText(trash.name)} />
                    </Image>
                </View>
                <View style={styles.cardWrapper}>
                    <View style={[styles.card, elevation(10)]}>
                        <View style={styles.binWrapper}>
                            <View style={styles.binColor}>
                                <Text style={styles.titleResult}>{locales.t('binResult')}</Text>
                                <Text style={styles.binResult}>Yellow</Text>
                            </View>
                            <View style={styles.binImageWrapper}>
                                <Image style={styles.binImage} source={trash.image} />
                            </View>
                        </View>
                        <View style={styles.buttonWrapper}>
                            <TouchableOpacity style={styles.selectNewTrashButton} onPress={() => alert('select new trash')}>
                                <Text style={styles.selectNewTrashButtonName}>{locales.t('newTrashButton')}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[styles.card, {marginTop: 20}, elevation(10)]}>
                        <View style={styles.tipWrapper}>
                            <View style={styles.tipTitleWrapper}>
                                <Text style={styles.tipTitle}>{locales.t('tip')}</Text>
                            </View>
                            <View style={styles.binSuggestWrapper}>
                                <View style={styles.binSuggest}>
                                    <Text style={styles.binSuggestName}>{locales.t('binTip')} {locales.getTrashText(bins[trash.bins[0]].color)} {locales.t('lastWordColorBin')}</Text>
                                </View>
                                <View style={styles.binSuggestImageWrapper}>
                                    <Image style={styles.binSuggestImage} source={bins[trash.bins[0]].image} />
                                </View>
                            </View>
                            {
                                trash.tips.map((tip, index) => {
                                    return (
                                        <View style={styles.suggestionWrapper} key={index}>
                                            <View style={styles.suggestion}>
                                                <Text style={styles.suggestionDetail}>{locales.getTrashText(tip.detail)}</Text>
                                            </View>
                                            <View style={styles.imageSuggestionWrapper}>
                                                <Image style={styles.imageSuggestion} source={tip.image} />
                                            </View>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
