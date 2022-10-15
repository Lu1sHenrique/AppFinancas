import {StyleSheet} from 'react-native';

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
      shadowColor: "#000",
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
        color: '#bababa',
        marginBottom: 8
    },

    content:{
        flexDirection: 'row',
        alignItems: 'center'
    },

    currencySimbol:{
        color: '#dadada',
        marginRight: 6
    },

    balance:{
        fontSize: 22,
        color: '#2ecc71'
    },

    expenses:{
        fontSize: 22,
        color: '#e74c3c'
    }
  });

export default styles;