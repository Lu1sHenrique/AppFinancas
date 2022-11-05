import { Dimensions , StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const windowWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
  buttonBanco: {
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
  
  iconButtonbanco: {
    marginStart: 15
  },

  txtButtonBanco: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  deleteBox: {
    backgroundColor: colors.red,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100
  },

  action: {
    color: colors.white
  }

})

export default styles;