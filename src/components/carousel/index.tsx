import { FlatList, View } from 'react-native'
import { AppText } from '@/components/ui/app-text'
import TitleItem from '@/components/title-item'

type TitleItemType = {
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

export type CarouselType = {
  title: string
  data: TitleItemType[]
}

export function Carousel({ title, data = [] }: CarouselType) {
  const renderTitle = ({
    item,
    index,
  }: {
    item: TitleItemType
    index: number
  }) => {
    return (
      <View key={index} className="flex-row items-end">
        <TitleItem
          image={item.image}
          id={item.id}
          name={item.name}
          description={item.description}
          onPress={() => alert(`Title ${item.id}`)}
        >
          <TitleItem.Image />
          <TitleItem.Progress value={item.progress} />
          <TitleItem.Menu />
        </TitleItem>
      </View>
    )
  }

  return (
    <View className="gap-2.5 mb-8">
      <View className="flex-row justify-between mb-1">
        <AppText className="text-lg font-bold text-white pl-5">{title}</AppText>
      </View>

      <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="px-5 gap-2.5"
        data={data}
        horizontal
        renderItem={renderTitle}
        keyExtractor={(item: TitleItemType) => String(item.id)}
      />
    </View>
  )
}
