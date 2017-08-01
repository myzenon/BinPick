import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    header: {
        backgroundColor: '#00695C'
    },
    binsWrapper: {
        paddingLeft: 10,
        paddingRight: 10
    },
    binsImageWrapper: {
        flexDirection: 'row'
    },
    imageWrapper: {
        flex: 1,
        flexDirection: 'row'
    },
    binImage: {
        flex: 1,
        resizeMode: 'contain',
        height: 150
    },
    cardWrapper: {
        flex: 1,
        margin: 16,
        marginTop: 0
    },
    descriptionCard: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        paddingLeft: 0,
        backgroundColor: '#FFF'
    },
    imageDescriptionWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageDescription: {
        flex: 1,
        height: 100,
        resizeMode: 'contain'
    },
    binDescriptionWrapper: {
        flex: 2
    },
    binDescriptionTitleWrapper: {
        paddingBottom: 10
    },
    binDescriptionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#616161'
    },
<<<<<<< HEAD
    description: {
=======
    binDescription: {
>>>>>>> Update BinDetails Component
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
<<<<<<< HEAD
    },
    trashWrapper: {
        flexDirection: 'row',
        borderWidth: 3,
        borderColor: '#FFF'
    },
    trashIndexWrapper: {
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F0F0F0',
        paddingTop: 5,
        paddingBottom: 5
    },
    trashIndex: {
        fontSize: 15
=======
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
>>>>>>> Update BinDetails Component
    },
    trashNameWrapper: {
        flex: 3,
        paddingLeft: 15,
<<<<<<< HEAD
        justifyContent: 'center' 
    },
    trashName: {
        fontSize: 15
=======
        justifyContent: 'center',
        // backgroundColor: 'yellow'
    },
    trashName: {
        fontSize: 18
>>>>>>> Update BinDetails Component
    }
})
