import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#342C2C",
        justifyContent: "center",
        padding: 10,
        paddingBottom: 0,
    },
    banner:{
        width: "100%",
        resizeMode:"contain",
    },
    title:{
        fontFamily: "Poppins_400Regular",
        color: "#FFF",
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80,
    },
    titleBold:{
        fontFamily: "Poppins_600SemiBold",
    },
    buttonsContainer:{
        flexDirection: "row",
        marginTop:40,
        justifyContent: "space-between",
        display: "flex",
    },
    button:{
        height: 150,
        width: "48%",
        backgroundColor: "#333",
        borderRadius: 8,
        padding:24,
        justifyContent: "space-between"
    },
    buttonPrimary:{
        backgroundColor: "#9871f5"
    },
    buttonSecondary:{
        backgroundColor: "#04d361"
    },
    buttonText:{
        fontFamily: "Archivo_700Bold",
        color: "#FFF",
        fontSize: 20,
    },
    totalConnections:{
        fontFamily: "Poppins_400Regular",
        color: "#D4C2FF",
        alignSelf: "center",
        marginTop: 40,
        fontSize: 12,
        lineHeight: 20,
    },
    card:{
        resizeMode: "contain",
        marginBottom: 10,
        alignSelf: "center",
    },
    cardList:{
        marginTop: -40,
    }
})

export default styles