import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        top: 0,
		left: 0,
        right: 0,
        height: 56
    },
    leftButton: {
        alignSelf: 'center',
        alignItems: 'flex-start'
    },
    icon: {
        fontSize: 25,
        color: '#FFF',
    },
    titleWrapper: {
        flex: 1,
        alignItems: 'flex-start',
        alignSelf: 'center',
        marginLeft: 10
    },
    title: {
        color: '#FFF',
        fontSize: 20
    },
    rightButton: {
        flex: 1
    }
})
