import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    header: {
        flexDirection: 'row',
        paddingTop: 15,
        // justifyContent: 'center',
        top: 0,
		left: 0,
        right: 0,
        height: 64
    },
    leftButton: {
        // flex: 1,
        alignSelf: 'center',
        alignItems: 'flex-start',
    },
    icon: {
        fontSize: 25,
        color: '#FFF'
    },
    titleWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // alignSelf: 'center'
        // backgroundColor: 'red'
    },
    title: {
        color: '#FFF',
        fontSize: 20
    },
    rightButton: {
        // flex: 1
    }
})
