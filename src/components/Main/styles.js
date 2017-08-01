import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    wrapper: {
        backgroundColor: '#00695C',
    },
    fixedWrapper: {

    },
    logoWrapper: {
        flex: 2,
        marginTop: 50,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 20
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
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row'
    },

    logoImage: {
        flex: 1,
        width: '100%',
        resizeMode: 'contain'
    },

    binWrapper: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
    },
    binImageWrapper: {
        flex: 1,
        position: 'relative'
    },
    binImage: {
        flex: 1,
        width: '100%',
        // height: '100%',
        resizeMode: 'contain'
    },
    binSuggestWrapper: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 30
    },
    binSuggestText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#606060'
    },

    checkWrapper: {
        position: 'absolute',
        right: 5,
        top: 5
    },
    checkImage: {
        flex: 1,
        width: 25,
        height: 25
    },

    sliderFrame: {
        flex: 1,
        flexDirection: 'row',
        margin: 30,
        padding: 15,
        height: 60,
        borderRadius: 5,
        backgroundColor: '#011C17',
        alignItems: 'center'
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
        // flex: 1,
        flexDirection: 'row',
        margin: 13,
        backgroundColor: 'rgba(255, 255, 255, 0.9)'
    },
    sliderBinImage: {
        width: 15,
        height: 25,
        resizeMode: 'contain'
    },

    statsIcon: {
        fontSize: 25,
        color: '#FFF',
        marginLeft: 5,
        marginRight: 5
    }
})
