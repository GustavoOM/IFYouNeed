import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        padding: 30,
        paddingBottom: 20,
        backgroundColor: "#575A89",
    },
    topBar:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title:{
        fontFamily: "Archivo_700Bold",
        color: "#E3E2E1",
        fontSize: 24,
        lineHeight: 32,
        maxWidth: 160,
        marginVertical: 40,
    },
    header:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    }
})

export default styles