import React from 'react'

import {
    Text,
    View,
    TextInput,
} from 'react-native'

// a vantagem de se usar uma constante ao invés da function keyword
// é que com a constante garantimos que essa entidade não sofrerá alterações
export const HomeScreen = () => (
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
    </View>
)

