import { Dimensions } from 'react-native'
const {
    width,
    height,
} = Dimensions.get('window')

export const styles = {
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
        paddingLeft: 20
    },
    view: {
        flex: 5,
        width,
        height,
        paddingLeft: 20,
        paddingRight: 20
    },
    touchableOpacity: {
        backgroundColor: '#2D787D',
        padding: 10,
        borderColor: '#1d8eb8',
        borderWidth: 1,
        borderRadius: 35,
        shadowColor: '#000000',
        shadowOpacity: 0.4,
        marginTop: 50,
    }
}