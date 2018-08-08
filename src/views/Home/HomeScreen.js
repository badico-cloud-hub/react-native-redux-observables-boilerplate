import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    Text,
    View,
} from 'react-native'

import {
    Input
} from '../../components'
// a vantagem de se usar uma constante ao invés da function keyword
// é que com a constante garantimos que essa entidade não sofrerá alterações
// Costumamos deixar esse export para ser mais fácil testar unitariamente esse component

export const HomeScreenRaw = ({
    dispatch,
    example
}) => (
    <View>
        <Text>Essa é a nossa home.</Text>
        <Text>
            Como a responsabilidade da lógica recai sobre o redux,
            as nossas telas podem ser compentes funcionais, ou seja funções como este aqui
        </Text>
        <Text>
            Haverão poucos casos onde os funcionais não nos atenderam,
            mas dai é a mesma filosofia que usamos com as variaveis,
            comecamos com o padrao, const, se precisarmos vamos lá
            e usamos o let quando a variavel precisa mudar durante a aplicação
        </Text>
        <Text> Mude o texto abaixo que mudará esse aqui em frente: {example.text}</Text>
        <Input
            value={example.text}
            placeholder='this will be updated'
            onChangeText={
                text => dispatch({ type: 'CHANGE_TEXT', text })
            }
        />
    </View>
)


/*
* IMPORTANTE | MUITO IMPORTANTE!!!
* todos os componentes que recebem props,
* como o caso desse em que o redux está injetando 2 props,
* é de suma importancia add esse prop type
*/
HomeScreenRaw.propTypes = {
    dispatch: PropTypes.func,
    example: PropTypes.object,
}
  
export const HomeScreen = connect(
    ({ example }) => ({ example }),
    (dispatch) => ({ dispatch })
)(HomeScreenRaw)
