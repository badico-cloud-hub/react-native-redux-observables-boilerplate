import React from 'react'
import PropTypes from 'prop-types'

import {
    TextInput
} from 'react-native'

import { styles } from './styles'

export const Input = ({ ...props }) => (<TextInput style={styles.input} {...props} />)
