import { View, Text, SafeAreaView, Button } from 'react-native'
import React, { useState } from 'react'
import Display from './Display'
import Formulario from './Formulario'
import Estilos from './Estilos'

const Gerador = () => {
    const [menorNumero, setMenorNumero] = useState('0')
    const [maiorNumero, setMaiorNumero] = useState('0')
    const [numAleatorio, setNumAleatorio] = useState(0)

    function gerarNumeroAleatorio() {
        let menor = menorNumero.includes('.') ? parseFloat(menorNumero) : parseInt(menorNumero)
        let maior = maiorNumero.includes('.') ? parseFloat(maiorNumero) : parseInt(maiorNumero)
        const numero = Math.random() * (maior - menor) + menor
        if (Number.isInteger(menor) && Number.isInteger(maior))
            setNumAleatorio(Math.floor(numero))
        else
            setNumAleatorio(numero.toFixed(2))

    }

    return (
        <SafeAreaView style={Estilos.GeradorBox}>
            <Display numero={numAleatorio} />
            <Formulario maior={maiorNumero} setMaior={setMaiorNumero} menor={menorNumero} setMenor={setMenorNumero} />
            <View style={Estilos.Botao}>
                <Button color='gray' title='Gerar!' onPress={gerarNumeroAleatorio} />
            </View>
        </SafeAreaView>
    )
}

export default Gerador