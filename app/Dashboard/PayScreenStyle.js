import {
    StyleSheet,
    Dimensions
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    preview: {
        height: screenWidth,
        width: screenWidth
    },
    toplevel: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    send: {
        height: screenWidth,
        width: screenWidth,
        backgroundColor: palette.customRed,
        justifyContent: 'center',
        alignItems: 'center'
    },
    receive: {
        height: screenWidth,
        width: screenWidth,
        backgroundColor: palette.indigoDark1
    },
    placeholder: {
        height: screenWidth,
        width: screenWidth,
        backgroundColor: palette.whiteDark
    }
});