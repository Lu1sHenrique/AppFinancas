import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  containerTitle: {
    marginTop: 10,
    marginBottom: 25,
    marginHorizontal: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center'
  },

  title: {
    fontSize: 24,
    fontWeight: '500',
  },

  value: {
    color: colors.green,
    fontSize: 24,
    fontWeight: '500',
  },

  checkbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    marginLeft: 10,
    marginTop: 30
  },

  text: {
    marginRight: 170
  },

});

export default styles;