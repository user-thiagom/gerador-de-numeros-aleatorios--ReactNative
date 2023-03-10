import { View, Text } from 'react-native'
import React from 'react'
import Estilos from './Estilos'

const Display = ({numero}) => {
    return (
        <View style={Estilos.Display}>
            <Text style={Estilos.DisplayText}>O número aleatório é:</Text>
            <Text style={Estilos.DisplayText}>{numero}</Text>
        </View>
    )
}

export default Display