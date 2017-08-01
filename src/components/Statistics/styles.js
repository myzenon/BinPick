import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    header: {
        backgroundColor: '#00695C'
    },
    title: {
        color: '#FFF',
        fontSize: 20
    },
    icon: {
        fontSize: 25,
        color: '#FFF'
    },
    cardWrapper: {
        flexDirection: 'column',
        backgroundColor: '#FFF',
        marginLeft: 16,
        marginRight: 16,
        marginTop: 20,
        marginBottom: 16
    },
    binsWrapper: {
        marginRight: 16,
        marginBottom: 16
    },
    bin: {
        flexDirection: 'row',
        height: 70,
        marginTop: 25
    },
    binImageWrapper: {
        flex: 1,
        alignItems: 'center'
    },
    binImage: {
        flex: 1,
        width: 200,
        resizeMode: 'contain'
    },
    binDetail: {
        flex: 4,
    },
    binLabel: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    binLabelLeft: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    binName: {
        fontSize: 16,
        color: '#757575'
    },
    binAmount: {
        fontSize: 14,
        color: '#BBB',
        marginLeft: 7
    },
    statWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    progressBar: {
        height: 15,
        backgroundColor: '#59AF63'
    },
    totalBar: {
        height: 15,
        backgroundColor: '#EFEFEF'
    },
    binPercent: {
        fontSize: 12,
        textAlign: 'center',
        color: '#59AF63'
    }
})
