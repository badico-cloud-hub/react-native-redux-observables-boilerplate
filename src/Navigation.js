import React from 'react'
import { createStackNavigator } from 'react-navigation'
import * as Views from './views'

export class Routes extends React.Component {
    // esse componente poderia ser uma funcção, mas pensando em ciclo de criacao e recriação,
    // ele so vai precisar montar esse stack uma unica vez, e quando precisar rerenderizar ele reutiliza
    // Como eu disse, algumas vezes vamos querer que seja uma classe,
    // mas o instinto tem de ser de começar como função
    StackNavigator = createStackNavigator({ ...Views })
    render() {
        const { StackNavigator } = this
        return <StackNavigator />
    }
}