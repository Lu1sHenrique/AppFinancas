import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    buttonBanco:{
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        width: '80%',
        alignSelf: 'center',
        marginVertical: 8,
        height: 60,
        alignItems: 'center',
        borderRadius: 15,
        justifyContent: 'space-between'
    },

    txtButtonBanco:{
      fontSize: 15,
      fontWeight: 'bold'
    },

    iconButtonbanco:{
      marginStart: 15
    },

    txtValue:{
      marginEnd: 15,
      color: 'green'
    }
})

export default styles;