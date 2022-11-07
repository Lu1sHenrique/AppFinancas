import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: '100%',
        padding: 25
    },
    date: {
        color: colors.grayBlack,
        fontWeight: "bold",
        fontSize: 15
    },

    day: {
        color: colors.black,
        fontWeight: "bold",
        fontSize: 18
    }
});

export default styles;