import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fafafa'
},

containerHeader:{
    width: '80%',
    marginTop: '12%'
},

buttonBack:{
    marginStart: 15,
    width: 40
},
  
containerTitle: { 
    marginTop: 70,
      marginBottom: 60,
      marginHorizontal: 15
},

  title:{
    fontSize: 24,
    fontWeight: 'bold',
    margin: 15
},

containerInput:{
    width: '85%',
    borderBottomWidth: 1,
    borderBottomColor: '#808080',
    borderRadius: 15,
    height: 50,
    marginStart: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignSelf: 'center'
},

txtInputValue:{
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#808080'
},

inputValue:{
    width: '97%',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#808080'
},

butonContinuar:{
    alignSelf: 'flex-end',
    borderRadius: 50,
    marginEnd: 40,
    backgroundColor: '#17B978'
},

txtButtonContinuar:{
    fontSize: 20,
    alignSelf: 'center'
},

iconButtonContinuar:{
    alignSelf: 'center'

}
});

export default styles;