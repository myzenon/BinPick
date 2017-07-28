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
        flex: 1
    },
    rowCategory: {
        height: 230,
        flexDirection: 'row',
        borderWidth: 1
    },
    category: {
        flex: 1
    },
    image: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end'
    },
    nameWrapper: {
        height: 40,
        backgroundColor: 'rgba(0,0,0,0.8)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    name: {
        color: '#FFF',
        fontSize: 15
    }
})
