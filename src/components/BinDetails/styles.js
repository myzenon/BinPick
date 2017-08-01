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
        height: 75,
        resizeMode: 'contain'
    },
    cardWrapper: {
        flex: 1,
        margin: 16
    },
    descriptionCard: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFF'
    },
    binDescriptionTitleWrapper: {
        paddingBottom: 10
    },
    binDescriptionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#616161'
    },
    binDescription: {
        fontSize: 14,
        color: '#424242'
    },
    listTrashCard: {
        flex: 1,
        marginTop: 30,
        backgroundColor: '#FFF',
        padding: 20
    },
    listTrashTitleWrapper: {
        paddingBottom: 5
    },
    listTrashTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#616161'
    },
    listTrashWrapper: {
        // backgroundColor: 'orange'
    },
    trashWrapper: {
        height: 40,
        flexDirection: 'row'
    },
    trashIndexWrapper: {
        // flex: 1,
        paddingLeft: 30,
        paddingRight: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink'
    },
    trashIndex: {
        fontSize: 18
    },
    trashNameWrapper: {
        flex: 3,
        paddingLeft: 15,
        justifyContent: 'center',
        // backgroundColor: 'yellow'
    },
    trashName: {
        fontSize: 18
    }
})
