import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';


const styles = StyleSheet.create({
    buttonContact:{
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray,
        width: '75%',
        alignSelf: 'center',
        marginVertical: 8,
        height: 60,
        flexDirection: 'row'
    },

    txtIniciaisCliente:{
      fontSize: 20,
      color: colors.white
    },

    containerIconCliente:{ 
      width: '18%', 
      height: '90%', 
      borderRadius: 30, 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: colors.green
    },

    containerTxtNomeCliente:{
      justifyContent: 'center'
    },

    txtNomeCliente:{
      fontSize: 18,
      fontWeight: '600',
      marginHorizontal: 20
    }
})

export default styles;