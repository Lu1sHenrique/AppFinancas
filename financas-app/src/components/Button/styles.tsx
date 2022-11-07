import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';


const styles = StyleSheet.create({

    container: {
        padding: 16,
        alignContent: 'center',
        justifyContent: 'center',
        width: '90%',
        height: 59,
        borderRadius: 10
    },

    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default styles;