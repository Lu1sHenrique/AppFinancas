import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingStart: 18,
      paddingEnd: 18,
      marginTop: -50,
      marginHorizontal: 40,
      borderRadius: 15,
      paddingTop: 22,
      paddingBottom: 22,
      zIndex: 99,
      shadowColor: colors.black,
      shadowOffset: {
	  width: 0,
	  height: 7,
      },
      shadowOpacity: 0.41,
      shadowRadius: 9.11,

elevation: 14,
    },

    itemTitle:{
        fontSize: 20,
        color: colors.gray,
        marginBottom: 8
    },

    content:{
        flexDirection: 'row',
        alignItems: 'center'
    },

    currencySimbol:{
        color: colors.gray,
        marginRight: 6
    },

    balance:{
        fontSize: 22,
        color: colors.green
    },

    expenses:{
        fontSize: 22,
        color: colors.red
    }
  });

export default styles;