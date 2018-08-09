import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    View,
    Modal,

} from 'react-native'

import {
    Input,
    Button,
    Paragraph,
    Title,
    Fetch,
} from '../../components'

import { styles } from './styles'


// a vantagem de se usar uma constante ao invés da function keyword
// é que com a constante garantimos que essa entidade não sofrerá alterações
// Costumamos deixar esse export para ser mais fácil testar unitariamente esse component

export const HomeScreenRaw = ({
    dispatch,
    buttler,
    example
}) => (
    <View style={styles.view}>
        <Modal
            animationType='slide'
            transparent={false}
            visible={buttler.forms.list}
            onRequestClose={() => {
                alert('Modal has been closed.');
            }}
        >
            <View style={{ ...styles.view, marginTop: 22}}>
                <Title primary={true}>Async List</Title>
                {
                 buttler.list[0] ?
                 buttler.list[0].data.map(account => <Paragraph>{account.name}</Paragraph>):
                 <Paragraph>Carregando lista... aguarde.</Paragraph>
                } 
                <Button
                    onPress={() => dispatch({
                        type: 'CLOSE_FORM',
                        form: 'list'
                    })
                    }
                    text='Hide Modal'
                />
            </View>
          
        </Modal>

        <Title primary={true}>Essa é a nossa home.</Title>
        <Paragraph>
            Como a responsabilidade da lógica recai sobre o redux,
            as nossas telas podem ser completamentes funcionais, ou seja funções como este aqui
        </Paragraph>
            {/* Haverão poucos casos onde os funcionais não nos atenderam,
            mas dai é a mesma filosofia que usamos com as variaveis,
            comecamos com o padrao, const, se precisarmos vamos lá
            e usamos o let quando a variavel precisa mudar durante a aplicação */}
        <View>
            <Title> Sync Interation</Title>
            <Input
                value={example.text}
                placeholder='Edite esse Input'
                onChangeText={
                    text => dispatch({
                        type: 'CHANGE_TEXT', text })
                }
            />
            <Paragraph> {example.text} </Paragraph>
        </View>
        
        <View>
            <Title>Async Interation</Title>
            <Paragraph>
                Requisite uma lista de usuarios
            </Paragraph>
            <Button
                text='Perform Async'
                onPress={
                () => dispatch({
                    type: 'WILL_LOAD_LIST',
                })
            }/>
        </View>
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
    buttler: PropTypes.object,
}

export const HomeScreen = connect(
    ({ example, buttler }) => ({ example, buttler }),
    (dispatch) => ({ dispatch })
)(HomeScreenRaw)
