import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  containerHeader: {
    width: '80%',
    marginTop: '10%'
  },

  buttonBack: {
    marginStart: 15,
    width: 40
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

  avatar: {
    flex: 1,
    borderBottomColor: colors.gray,
    width: '75%',
    alignSelf: 'center',
    marginVertical: 2,
    alignItems: 'center'

  },
  IconAvatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.green
  },

  dateBank: {
    alignSelf: 'center',
    alignItems: 'center'
  },

  txtNomeCliente: {
    fontSize: 18,
    fontWeight: '600',
  },

  bank1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 1,
  },
  bank: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.grayBlack
  },

  txtIniciaisCliente: {
    fontSize: 20,
    color: colors.white
  },

  editVal: {
    flex: 1,
    width: '45%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    position: "absolute",
    marginTop: '72%'
  },

  valor: {
    fontSize: 35,
    fontWeight: '500',
    color: colors.green
  }
});

export default styles;