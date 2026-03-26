import { View, TextLayoutEvent, TextStyle } from 'react-native'
import { useCallback, useState } from 'react'
import { BottomSheet, LinkButton, Separator } from 'heroui-native'
import { AppText } from '@/components/ui/app-text'
import { BottomSheetBlurOverlay } from '@/components/overlay/bottom-sheet-blur-overlay'

interface SynopsisModalProps {
  synopsis: string
  numberOfLines?: number
  style?: TextStyle
  className?: string
}

export function Synopsis({
  synopsis,
  numberOfLines = 4,
  className,
}: SynopsisModalProps) {
  const [modalVisible, setModalVisible] = useState(false)
  const [isTruncated, setIsTruncated] = useState(false)

  const handleTextLayout = useCallback(
    (e: TextLayoutEvent) => {
      if (e.nativeEvent.lines.length > numberOfLines) {
        setIsTruncated(true)
      }
    },
    [numberOfLines],
  )

  return (
    <>
      <View className={className}>
        <AppText
          className="text-sm"
          numberOfLines={isTruncated ? numberOfLines : undefined}
          onTextLayout={handleTextLayout}
        >
          {synopsis}
        </AppText>
        {isTruncated && (
          <LinkButton
            className="self-start"
            size="sm"
            onPress={() => setModalVisible(true)}
          >
            <LinkButton.Label className="text-accent">
              Leia mais
            </LinkButton.Label>
          </LinkButton>
        )}
      </View>

      <BottomSheet isOpen={modalVisible} onOpenChange={setModalVisible}>
        <BottomSheet.Portal disableFullWindowOverlay>
          <BottomSheetBlurOverlay />
          <BottomSheet.Content
            handleComponent={() => null}
            containerClassName="mx-0 md:mx-40"
          >
            <View className="flex-row items-center justify-between pb-3">
              <BottomSheet.Title className="text-xl font-bold">
                Sinopse
              </BottomSheet.Title>
              <BottomSheet.Close />
            </View>
            <Separator className="-mx-5" />
            <View className="mt-3">
              <AppText className="text-base">{synopsis}</AppText>
            </View>
          </BottomSheet.Content>
        </BottomSheet.Portal>
      </BottomSheet>
    </>
  )
}
