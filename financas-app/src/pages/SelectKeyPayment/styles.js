import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fafafa'
    },

    containerTitle: { 
      marginTop: 70,
      marginBottom: 30,
      marginHorizontal: 15
  },
  
    title:{
      fontSize: 24,
      fontWeight: 'bold',
      margin: 15
  },

  containerSubTitle:{
    width: '85%',
    alignSelf: 'center'
  },

  subTitle:{
    fontSize: 16,
    fontWeight: 'bold'
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

  value:{
  color: '#17B978'
},

  lineInputIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    height: 50,
    borderRadius: 10,
    width: '80%',
    alignSelf: 'center'
},

  input:{
  flex:1, 
  marginStart: 20, 
  fontSize: 15, 
  color:"#808080"
},


  });

export default styles;