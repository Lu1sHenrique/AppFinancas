import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fd8fd3',
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
        paddingTop: 44
    },

    content:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    userName:{
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },

    buttonUser:{
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44 / 2
    }
})

export default styles;