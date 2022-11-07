import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginBottom: 24,
      borderBottomWidth: 0.5,
      borderBottomColor: colors.gray
    },
  
    content:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 2,
      marginBottom: 8
    },
  
    date:{
      color: colors.gray,
      fontWeight: 'bold',
    },

    label:{
      fontWeight: 'bold',
      fontSize: 16
    },

    value:{
      fontSize: 16,
      color: colors.green,
      fontWeight: 'bold'
    },

    expenses:{
      fontSize: 16,
      color: colors.red,
      fontWeight: 'bold'
    },

    skeleton:{
      marginTop: 6,
      width: 80,
      height: 10,
      backgroundColor: colors.gray,
      borderRadius: 8
    }
  });

export default styles;