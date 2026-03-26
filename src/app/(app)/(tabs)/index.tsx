import { FlatList, View } from 'react-native'
import { Carousel, type CarouselType } from '@/components/carousel'

const CAROUSELS: CarouselType[] = genRndArray(10, 15).map((carousel) => ({
  title: `Carousel ${carousel + 1}`,
  data: genRndArray(3, 10).map((title) => ({
    id: (carousel + 1) * (title + 1),
    name: `Title ${carousel + 1} / ${title + 1}`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at interdum sapien. Vestibulum cursus sit amet nulla ac faucibus. Nunc viverra nulla ut lacinia viverra. Nulla porttitor blandit gravida. Integer quis nibh sapien. Quisque cursus lorem eu dui bibendum, quis bibendum mi ultrices. Praesent dapibus ante bibendum augue laoreet commodo.',
    image: `https://picsum.photos/144/160?t=${Math.random()}`,
    progress: Math.random(),
  })),
}))

export default function Index() {
  return (
    <View className="flex-1 bg-background">
      <FlatList
        contentContainerClassName="py-2"
        data={CAROUSELS}
        renderItem={({ item }) => (
          <Carousel key={item.title} title={item.title} data={item.data} />
        )}
      />
    </View>
  )
}

function genRndArray(min = 1, max = 10) {
  if (min > max) {
    ;[min, max] = [max, min]
  }

  const size = Math.floor(Math.random() * (max - min + 1)) + min

  return [...Array(size).keys()]
}
