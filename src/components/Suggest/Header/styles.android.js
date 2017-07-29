import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    header: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'center',
        top: 0,
		left: 0,
        right: 0,
        height: 56
    },
    leftButton: {
        flex: 0.5,
        alignSelf: 'center',
        alignItems: 'flex-start'
    },
    icon: {
        fontSize: 25,
        color: '#FFF',
        marginLeft: -10
    },
    titleWrapper: {
        flex: 1,
        alignItems: 'flex-start',
        alignSelf: 'center'
    },
    title: {
        color: '#FFF',
        fontSize: 20
    },
    rightButton: {
        flex: 1
    }
})
