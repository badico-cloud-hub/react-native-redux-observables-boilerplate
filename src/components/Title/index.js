import React from 'react'
import PropTypes from 'prop-types'

import {
    Text,
} from 'react-native'
import { styles } from './styles'

export const Title = ({ children, primary, text, ...props }) => (
    <Text style={styles(primary).text}>{children}</Text>
)
