import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#8AE192',
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingVertical: 40
    },

    content:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 35
    },

    userName:{
        fontSize: 22,
        color: '#000',
        fontWeight: 'bold',
        justifyContent: 'center',
        marginLeft: 25
    },

    buttonUser:{
        width: 44,
        height: 44,
        backgroundColor: 'rgba(217, 217, 217, 1)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44 / 2,
        marginRight: 25
    }
})

export default styles;