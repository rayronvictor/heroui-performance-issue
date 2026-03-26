import { View } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'
import { Menu, MenuRootProps, Separator } from 'heroui-native'
import { MenuBlurOverlay } from '@/components/overlay/menu-blur-overlay'
import { AppText } from '@/components/ui/app-text'
import { Synopsis } from '@/components/synopsis'
import { withUniwind } from 'uniwind'

type TitleMenuProps = Omit<MenuRootProps, 'id'> & {
  id: number
  title: string
  description?: string
}

const StyleMaterialIcons = withUniwind(MaterialIcons)

export function TitleMenu({
  id,
  title,
  description,
  ...restProps
}: TitleMenuProps) {
  return (
    <Menu presentation="bottom-sheet" {...restProps}>
      <Menu.Portal disableFullWindowOverlay>
        <MenuBlurOverlay />
        <Menu.Content presentation="bottom-sheet" handleComponent={null}>
          <View className="w-full flex-row items-center justify-between pb-3 px-2">
            <AppText className="text-xl font-bold shrink line-clamp-1">
              {title}
            </AppText>
            <Menu.Close />
          </View>
          {description && <Synopsis synopsis={description} />}
          <Separator className="my-2 -mx-5" />
          <View className="gap-2">
            <Menu.Item className="items-start" onPress={() => alert('play')}>
              <View className="mt-1">
                <StyleMaterialIcons
                  name="play-arrow"
                  size={16}
                  colorClassName="accent-muted"
                />
              </View>
              <View className="flex-1">
                <Menu.ItemTitle>Play</Menu.ItemTitle>
              </View>
            </Menu.Item>
            <Menu.Item
              className="items-start"
              onPress={() => alert('Play the trailer')}
            >
              <View className="mt-1">
                <StyleMaterialIcons
                  name="local-movies"
                  size={16}
                  colorClassName="accent-muted"
                />
              </View>
              <View className="flex-1">
                <Menu.ItemTitle>Play the trailer</Menu.ItemTitle>
              </View>
            </Menu.Item>
            <Menu.Item
              className="items-start"
              onPress={() => alert('more info')}
            >
              <View className="mt-1">
                <StyleMaterialIcons
                  name="info-outline"
                  size={16}
                  colorClassName="accent-muted"
                />
              </View>
              <View className="flex-1">
                <Menu.ItemTitle>More info</Menu.ItemTitle>
              </View>
            </Menu.Item>
            <Menu.Item className="items-start" onPress={() => alert('share')}>
              <View className="mt-1">
                <StyleMaterialIcons
                  name="share"
                  size={16}
                  colorClassName="accent-muted"
                />
              </View>
              <View className="flex-1">
                <Menu.ItemTitle>Share</Menu.ItemTitle>
              </View>
            </Menu.Item>
          </View>
        </Menu.Content>
      </Menu.Portal>
    </Menu>
  )
}
