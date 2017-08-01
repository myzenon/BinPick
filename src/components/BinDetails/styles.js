import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    header: {
        backgroundColor: '#00695C'
    },
    binsWrapper: {
    },
    binsImageWrapper: {
        flexDirection: 'row'
    },
    imageWrapper: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'red',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    binImage: {
        flex: 1,
        height: 60,
        resizeMode: 'contain'
    },
    binDescriptionWrapper: {
        flex: 3,
        backgroundColor: 'yellow'
    } ,
    listTrashWrapper: {
        flex: 4,
        backgroundColor: 'orange'
    }
})
