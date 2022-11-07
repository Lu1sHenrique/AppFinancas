import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.white
    },
  
    containerTxtAccountsConec:{
     justifyContent: 'center',
     alignSelf: 'center'
    },
  
    txtAccountsConec:{
      fontSize: 24,
      marginTop: 20,
      marginBottom: 20,
      fontWeight: '500',
      color: colors.black,
    },

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
      justifyContent: 'space-around'
  },

  txtButtonBanco:{
    fontSize: 15
  },

});

export default styles;