import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';


const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingVertical: 40,
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
        color: colors.white,
        fontWeight: 'bold',
        justifyContent: 'center',
        marginLeft: 25
    },
    buttonUser:{
        width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44 / 2,
        marginRight: 25
    },
    image: {
        width:'120%',
        height: '130%',
        position: 'absolute'
    },
})

export default styles;