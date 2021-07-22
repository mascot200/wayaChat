import React from 'react';
import styles from './styles'
import { View, Text } from 'react-native'
import {Status} from '../../types'

export type statusListPros = {
    status:Status
}

const StatusList = (props: statusListPros) => {
  const { status } = props

  return(
      <View>
          <Text>{status.content}</Text>
      </View>
  )
}

export default StatusList