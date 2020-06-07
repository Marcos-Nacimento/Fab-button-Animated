import React from 'react'

import { StyleSheet, View } from 'react-native'

import FabButton from './src'

export default () => {
  return(
    <View style={styles.container}>
      <FabButton />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
