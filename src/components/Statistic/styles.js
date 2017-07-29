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
    contentWrapper: {
        backgroundColor: 'pink'
    },
    cardWrapper: {
        flexDirection: 'column',
        backgroundColor: '#FFF',
        marginLeft: 16,
        marginRight: 16,
        marginTop: 20
    },
    binsWrapper: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20
    },
    bin: {
        flexDirection: 'row',
        height: 60,
        marginTop: 20
    },
    binImageWrapper: {
        flex: 1,
        backgroundColor: 'red'
    },
    binDetail: {
        flex: 4,
        paddingLeft: 20
    },
    binLabel: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    binName: {
        fontSize: 16,
        color: '#757575'
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
