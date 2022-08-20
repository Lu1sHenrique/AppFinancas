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
    marginBottom: '7%'
},

  title:{
    fontSize: 35,
    fontWeight: 'bold',
    margin: 15
},

containerInput:{
    width: '90%',
    borderWidth: 1,
    borderRadius: 15,
    height: 50,
    marginStart: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
},

txtInputValue:{
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold'
},

inputValue:{
    width: '97%',
    fontSize: 25,
    fontWeight: 'bold'
},

butonContinuar:{
    width: '70%',
    alignSelf: 'center',
    height: 50,
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'space-around',
    flexDirection: 'row'
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