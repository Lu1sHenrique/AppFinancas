import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
  lineInputIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d3d3d3',
    borderWidth: 1,
    borderColor: '#808080',
    height: 50,
    borderRadius: 10,
    width: '80%',
    alignSelf: 'center'
  },

  input: {
    flex: 1,
    marginStart: 20,
    fontSize: 20,
    color: "#808080"
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 10
  },

  list: {
    marginHorizontal: 50
  }
});

export default styles;