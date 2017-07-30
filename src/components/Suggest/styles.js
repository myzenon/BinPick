import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    imageHeaderWrapper: {
        flexDirection: 'row'
    },
    imageHeader: {
        flex: 1,
        height: 260
    },
    header: {
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    cardWrapper: {
        margin: 16
    },
    card: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    binWrapper: {
        flexDirection: 'row',
        padding: 20
    },
    binColor: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleResult: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#757575'
    },
    binResult: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#FDD835'
    },
    binImageWrapper: {
        flex: 1,
        flexDirection: 'row'
    },
    binImage: {
        flex: 1,
        height: 200,
        resizeMode: 'contain'
    },
    buttonWrapper: {
        flex: 1
    },
    selectNewTrashButton: {
        flex: 1,
        height: 50,
        backgroundColor: '#4DB6AC',
        justifyContent: 'center'
    },
    selectNewTrashButtonName: {
        color: '#FFF',
        fontSize: 18,
        textAlign: 'center'
    },
    tipWrapper: {
    },
    tipTitleWrapper: {
        flex: 1,
        paddingTop: 20,
        paddingLeft: 20
    },
    tipTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#616161'
    },
    binSuggestWrapper: {
        flex: 1,
        flexDirection: 'row',
        padding: 15
    },
    binSuggest: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    binSuggestName: {
        fontSize: 15,
        color: '#757575'
    },
    binSuggestImageWrapper: {
        flex: 1,
        flexDirection: 'row'
    },
    binSuggestImage: {
        flex: 1,
        height: 50,
        resizeMode: 'contain'
    },
    suggestionWrapper: {
        flex: 1,
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0'
    },
    suggestion: {
        flex: 1,
        padding: 20,
        alignItems: 'center'
    },
    suggestionDetail: {
        fontSize: 15,
        color: '#757575',
        textAlign: 'center'
    },
    imageSuggestionWrapper: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        paddingTop: 0
    },
    imageSuggestion: {
        flex: 1,
        width: 100,
        resizeMode: 'cover'
    }
})
