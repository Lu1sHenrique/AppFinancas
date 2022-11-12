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
    width: 189,
    height: '100%',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20
  },

  action: {
    color: colors.white
  },

  nameBank:{
    fontSize: 36,
    marginTop: 20,
    marginBottom: '20%',
    fontWeight: 'bold',
    marginHorizontal: 30,
    alignSelf: 'center',
    color: colors.blueBlack,
  },

  close: {
    marginLeft: '80%',
    marginTop: '20%'
  }, 

})

export default styles;