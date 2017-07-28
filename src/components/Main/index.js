import React, {Component} from 'react'
import {View, Text, StatusBar} from 'react-native'
import {Container, Icon} from 'native-base'
import SlideButton from '../Slider'
import elevation from '../../utils/elevation'
import styles from './styles'

export default class Main extends Component {
    state = {
        sth: 0
    }
    render() {
        return (
            <Container style={styles.wrapper}>
                <StatusBar
                    backgroundColor="transparent"
                    barStyle="light-content"
                    translucent={true}/>
                <View style={styles.logoWrapper}>
                    <Text>Logo</Text>
                </View>
                <View style={[styles.selectBinWrapper, elevation(10)]}>

                    <Text>
                        dds
                    </Text>

                </View>
                <View style={styles.sliderWrapper}>
                    <View style={styles.sliderFrame}>
                        <View style={styles.sliderSpace} />
                        <Text style={styles.sliderText}>
                            SLIDE&nbsp;&nbsp;&nbsp;&nbsp;
                        </Text>
                        <Icon name="arrow-forward" style={styles.sliderIcon}/>
                        <View style={styles.sliderBinWrapper}>
                            <SlideButton
                                onSlideSuccess={() => {
                                    alert('Yeew !!')
                                }}
                                successfulSlidePercent={40}
                            >
                                <View style={styles.sliderBin}>
                                    <Text>Slide Me !!</Text>
                                </View>
                            </SlideButton>
                        </View>
                    </View>
                </View>
                <View style={styles.statsWrapper}>
                    <Text>stats</Text>
                </View>
            </Container>
        )
    }
}
