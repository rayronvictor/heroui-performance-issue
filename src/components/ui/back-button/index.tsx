import { NativeStackHeaderBackProps } from '@react-navigation/native-stack'
import { TouchableOpacity } from 'react-native'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'

export default function BackButton(props: NativeStackHeaderBackProps) {
  if (!props.canGoBack) {
    return null
  }

  return (
    <TouchableOpacity onPress={router.back}>
      <Ionicons name="arrow-back-outline" size={24} color={props.tintColor} />
    </TouchableOpacity>
  )
}
