import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  containerHeader: {
    width: '80%',
    marginTop: '10%'
  },

  containerTitle: {
    marginTop: 50,
    marginBottom: 2,
    marginHorizontal: 30,
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

  editVal: {
    flex: 1,
    width: '45%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    position: 'absolute',
    marginTop: '70%',
    marginBottom: 20
  },

  valor: {
    fontSize: 35,
    fontWeight: '500',
    color: colors.green
  },

  calendarTitle: {
    marginTop: 90,
    marginBottom: 10,
    marginHorizontal: 40,
    fontSize: 24,
    fontWeight: 'bold'
  },

  calendar: {
    borderRadius: 10, 
    elevation: 4, 
    margin: 40,
  }
});

export default styles;