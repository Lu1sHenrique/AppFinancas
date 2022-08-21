import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fafafa'
    },

    containerTitle: {
      marginBottom: '7%', 
      alignSelf: 'center'
  },
  
    title:{
    fontSize: 28,
    fontWeight: 'bold',
    margin: 14
  },
   
  containerHeader:{
    width: '80%',
    marginTop: '12%'
  },

  buttonBack:{
    marginStart: 15,
    width: 40
  },

  txtValue:{
    fontSize: 15,
    color: '#424242'
  },

  containerInput:{
    width: '90%',
    borderWidth: 1,
    borderRadius: 15,
    height: 50,
    marginStart: 15,
    paddingHorizontal: 10,
    justifyContent: 'center'
},

  inputKey:{
    fontSize: 20
},

  });

export default styles;