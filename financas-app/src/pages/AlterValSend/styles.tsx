import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: colors.white
    },

    containerTitle: {
        marginTop: 70,
        marginBottom: 60,
        marginHorizontal: 15
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 15
    },

    containerInput: {
        width: '85%',
        borderBottomWidth: 1,
        borderBottomColor: colors.gray,
        borderRadius: 15,
        height: 50,
        marginStart: 15,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 50
    },

    txtInputValue: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.gray
    },

    inputValue: {
        width: '97%',
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.gray
    },
})

export default styles;