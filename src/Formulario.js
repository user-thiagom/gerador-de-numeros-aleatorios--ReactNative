import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import Estilos from './Estilos'

const Formulario = ({menor,maior,setMenor,setMaior}) => {

    function validarOTexto(texto) {
        const novoTexto = texto.replace(/[^.-\d]/g, '')
        return novoTexto
    }

    return (
        <View style={Estilos.Formulario}>
            <TextInput
                style={Estilos.Input}
                inputMode='decimal'
                keyboardType='decimal-pad'
                placeholder='menor número'
                placeholderTextColor='white'
                textAlign='center'
                value={menor}
                onChangeText={text => {
                    setMenor(validarOTexto(text))
                }}
            />
            <TextInput
                style={Estilos.Input}
                inputMode='decimal'
                keyboardType='decimal-pad'
                placeholder='maior número'
                placeholderTextColor='white'
                textAlign='center'
                value={maior}
                onChangeText={text => {
                    setMaior(validarOTexto(text))
                }}
            />
        </View>
    )
}

export default Formulario