import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({

  lineInputIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    height: 50,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center'
  },

  input: {
    flex: 1,
    marginStart: 20,
    fontSize: 15,
    color: colors.gray
  },

  });

export default styles;