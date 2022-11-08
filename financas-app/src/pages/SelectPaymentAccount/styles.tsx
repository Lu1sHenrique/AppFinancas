import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white
    },

    containerTitle: {
      marginTop: 70,
      marginBottom: 30,
      marginHorizontal: 20
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