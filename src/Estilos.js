import { StyleSheet } from "react-native";

const Estilos = StyleSheet.create({
    Formulario: {
        flex:0.2,
        flexDirection:"row",
        
        padding:10,
        width:'90%',
        justifyContent:'space-evenly',
    },
    Input: {
        maxHeight:50,
        minHeight:35,
        borderColor: "gray",
        borderWidth: 2,
        borderRadius: 15,
        padding: 10,
        color: 'white'
    },
    GeradorBox: {
        flex: 1,
        
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Display: {
        flex: 0.8,
        justifyContent: 'flex-end',
        alignItems:'center',
        marginBottom:15,
        width: '70%',
    },
    DisplayText:{
        color:'white',
        fontStyle:'italic',
        fontSize:24,
        fontWeight:400,
    },
    Botao: {
        flex:0.8,
        justifyContent: "flex-start",
        width: '50%',
        padding:15
    }
})

export default Estilos