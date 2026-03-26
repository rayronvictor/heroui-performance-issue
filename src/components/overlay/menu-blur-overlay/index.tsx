import { useMenu, useMenuAnimation } from 'heroui-native'
import { Pressable, StyleSheet } from 'react-native'
import Animated, { interpolate, useDerivedValue } from 'react-native-reanimated'
import { AnimatedBlurView } from '@/components/ui/animated-blur-view'

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

export const MenuBlurOverlay = () => {
  const { isOpen, onOpenChange } = useMenu()
  const { progress } = useMenuAnimation()

  const blurIntensity = useDerivedValue(() => {
    return interpolate(progress.get(), [0, 1, 2], [0, 40, 0])
  })

  if (!isOpen) {
    return null
  }

  return (
    <AnimatedPressable
      style={StyleSheet.absoluteFill}
      onPress={() => onOpenChange(false)}
    >
      <AnimatedBlurView
        blurIntensity={blurIntensity}
        tint="dark"
        style={StyleSheet.absoluteFill}
      />
    </AnimatedPressable>
  )
}
