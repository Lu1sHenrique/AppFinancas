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
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'center'
    },

    title: {
        fontSize: 24,
        fontWeight: '500',
        left: 50
    },

    value: {
        color: colors.green,
        fontSize: 24,
        fontWeight: '500',
        right: 70
    },
})

export default styles;