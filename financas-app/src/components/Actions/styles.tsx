import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      maxHeight: 110,
      marginTop: 18,
      marginStart: 50,
    },

    actionButton:{
        alignItems: 'center',
        marginRight: 20
    },

    areaButton:{
        backgroundColor: '#ecf0f1',
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    labelButton:{
        marginTop: 4,
        textAlign: 'center',
        fontWeight: 'bold'
    }
});

export default styles;