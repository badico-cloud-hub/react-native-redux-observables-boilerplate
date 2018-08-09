import { Dimensions } from 'react-native'
const {
    width,
    height,
} = Dimensions.get('window')

export const styles = {
    view: {
        flex: 5,
        width,
        height,
        paddingLeft: 20,
        paddingRight: 20
    },
}