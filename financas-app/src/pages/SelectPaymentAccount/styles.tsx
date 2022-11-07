import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white
    },

    containerTitle: {
      marginTop: 70,
      marginBottom: 60,
      marginHorizontal: 30
  },
  
    title:{
      fontSize: 24,
      fontWeight: 'bold'
  },
   
  containerHeader:{
    width: '80%',
    marginTop: '12%'
  },

  buttonBack:{
    marginStart: 15,
    width: 40
  },

  });

export default styles;