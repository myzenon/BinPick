import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    wrapper: {
        backgroundColor: '#00695C'
    },
    logoWrapper: {
        flex: 3
    },
    selectBinWrapper: {
        flex: 4,
        backgroundColor: '#FFF'
    },
    sliderWrapper: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    statsWrapper: {
        flex: 1
    },

    sliderFrame: {
        flex: 1,
        flexDirection: 'row',
        margin: 30,
        padding: 15,
        height: 60,
        borderRadius: 5,
        backgroundColor: '#011C17',
        alignItems: 'center',
        // justifyContent: 'center'
    },
    sliderSpace: {
        flex: 1
    },
    sliderText: {
        fontSize: 16,
        color: '#D4D4D4',
        fontWeight: 'bold'
    },
    sliderIcon: {
        fontSize: 20,
        color: '#D4D4D4',
        fontWeight: 'bold'
    },
    sliderBinWrapper: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    sliderBin: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 3,
        // width: 500,
        // height: 100,
        flex: 1,
        margin: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.8)'
    }
})
