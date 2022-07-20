import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1
    },

    tabs: {
        height: 64,
        backgroundColor: 'green',
        flexDirection: 'row'
    },

    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    contents: {
        flex: 1,
        backgroundColor: 'lightblue'
    }
})