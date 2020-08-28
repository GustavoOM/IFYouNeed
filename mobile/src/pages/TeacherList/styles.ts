import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#f0f0f7"
    },
    teacherList:{
        marginTop: -35,
    },
    searchForm:{
        marginBottom: 24,
    },
    label:{
        color: "#d4c2ff",
        fontFamily: "Poppins_400Regular"
    },
    inputGroup: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    inputBlock:{
        width: "48%",
    },
    input:{
        height: "100%",
        borderRadius: 40,
        justifyContent: "center",
        paddingHorizontal: 16, 
        
    },
    submitButton:{
        backgroundColor: "#04d361",
        height: 56,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    submitButtonText:{
        color: "#FFF",
        fontFamily: "Archivo_700Bold",
        fontSize: 16,
        marginLeft: 16,
    },
    pickerContainer:{
        height: 54,
        borderWidth:2,
        borderColor:'#c2c2c1',
        borderRadius:5,
        backgroundColor: "#FFF",
        marginTop: 4,
        marginBottom: 16,
    }

})

export default styles