import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({

  avatar: {
    flex: 1,
    borderBottomColor: colors.gray,
    width: '75%',
    alignSelf: 'center',
    marginVertical: 2,
    alignItems: 'center'

  },
  IconAvatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.green
  },

  dateBank: {
    alignSelf: 'center',
    alignItems: 'center'
  },

  txtNomeCliente: {
    fontSize: 18,
    fontWeight: '600',
  },

  bank1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 1,
  },
  bank: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.grayBlack
  },

  txtIniciaisCliente: {
    fontSize: 20,
    color: colors.white
  },

});

export default styles;