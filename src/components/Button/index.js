import React from 'react'
import PropTypes from 'prop-types'

import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native'
import { styles } from './styles'

export const Button = ({ text, ...props }) => (
    <TouchableOpacity style={styles.touchableOpacity} {...props}>
        <Text style={styles.text}>{text} </Text>
    </TouchableOpacity>
)

Button.propTypes = {
    text: PropTypes.string.isRequired,
}