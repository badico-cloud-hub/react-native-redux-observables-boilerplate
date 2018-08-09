import React from 'react'
import PropTypes from 'prop-types'

import {
    Text,
} from 'react-native'
import { styles } from './styles'

export const Paragraph = ({ children, primary, ...props }) => (
    <Text style={styles(primary).text}>{children}</Text>
)

Paragraph.defaultTypes = {
    primary: false,
}

Paragraph.propTypes = {
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
}