import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },

  containerTitle: {
    marginTop: 70,
    marginBottom: 30,
    marginHorizontal: 15
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 15
  },
  
  value: {
    color: colors.green
  },
  search: {
    marginTop: 5,
  },

  lineInputIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    height: 50,
    borderRadius: 10,
    width: '80%',
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