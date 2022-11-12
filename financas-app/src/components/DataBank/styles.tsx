import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({

  avatar: {
    alignSelf: 'center',
    marginVertical: 2,
    marginBottom: '20%'
  },

  dateBank: {
    alignSelf: 'center',
    alignItems: 'center'
  },

  date: {
    fontSize: 25,
    fontWeight: '600',
  },

  bank1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 1,
  },
  
  bank: {
    fontSize: 25,
    fontWeight: '600',
    color: colors.grayBlack
  },

});

export default styles;