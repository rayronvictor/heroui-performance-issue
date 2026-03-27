import { createContext, useContext, useState } from 'react'
import { PressableFeedback, cn, MenuRootProps } from 'heroui-native'
import { View } from 'react-native'
import { Image } from 'expo-image'
import { withUniwind } from 'uniwind'
import { AppText } from '@/components/ui/app-text'
import { useTitleMenu } from '@/components/title-menu/provider'

const StyledImage = withUniwind(Image)

export type TitleItemProps = {
  id: number
  name: string
  description: string
  image: string
  children?: React.ReactNode
  className?: string
  onPress?: () => void
  onLongPress?: () => void
  aspectRatio?: number
  height?: number
  width?: number
  isDisabled?: boolean
  progress?: number
}

type TitleItemContextType = {
  id: number
  name: string
  description: string
  image: string
  aspectRatio: number
  height: number
  width: number
}

const TitleItemContext = createContext<TitleItemContextType | null>(null)

function useTitleItem() {
  const context = useContext(TitleItemContext)
  if (!context) {
    throw new Error('useTitleItem must be used within TitleItem')
  }
  return context
}

const TitleItem = ({
  id,
  name,
  description,
  image,
  children,
  className,
  onPress,
  onLongPress,
  aspectRatio = 0.9,
  height = 160,
  width = 144,
  isDisabled,
}: TitleItemProps) => {
  const { open } = useTitleMenu()

  const handleLongPress = () => {
    open({
      id,
      title: name,
      description,
    })
    onLongPress?.()
  }

  return (
    <TitleItemContext.Provider
      value={{
        id,
        name,
        description,
        image,
        aspectRatio,
        height,
        width,
      }}
    >
      <PressableFeedback
        className={cn('items-center', className)}
        onPress={onPress}
        onLongPress={handleLongPress}
        isDisabled={isDisabled}
      >
        <View className="relative items-center">{children}</View>
      </PressableFeedback>
    </TitleItemContext.Provider>
  )
}

const TitleItemImage = ({ className }: { className?: string }) => {
  const { image, name, aspectRatio, height, width } = useTitleItem()
  const [imageError, setImageError] = useState(false)

  const containerStyle = {
    aspectRatio,
    height,
    width: width || (height ? height * aspectRatio : undefined),
  }

  if (imageError || !image) {
    return (
      <View
        style={containerStyle}
        className={cn(
          'justify-center items-center rounded-lg bg-muted',
          className,
        )}
      >
        <AppText className="text-center text-base">{name}</AppText>
      </View>
    )
  }

  return (
    <StyledImage
      source={image}
      style={containerStyle}
      className={cn('rounded-lg bg-muted', className)}
      contentFit="cover"
      onError={() => setImageError(true)}
    />
  )
}

const TitleItemProgress = ({
  value,
  className,
}: {
  value?: number
  className?: string
}) => {
  if (value === undefined) return null

  return (
    <View
      className={cn(
        'h-1.25 self-stretch mx-2 mt-1 rounded-sm overflow-hidden bg-muted',
        className,
      )}
    >
      <View
        style={{
          width: value ? `${100 * value}%` : '0%',
        }}
        className="h-full bg-accent"
      />
    </View>
  )
}

TitleItem.Image = TitleItemImage
TitleItem.Progress = TitleItemProgress

export default TitleItem
