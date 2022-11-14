import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },

    containerTitle: {
        marginTop: '70%',
        marginBottom: 50,
        alignSelf: 'center',
        marginLeft: '40%',
        width: '90%'
    },

    value: {
        color: colors.green,
        fontSize: 32,
        fontWeight: '500',
        right: 20
    },
})

export default styles;