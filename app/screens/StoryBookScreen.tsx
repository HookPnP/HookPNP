import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { View, ViewStyle, ImageStyle, TouchableOpacity } from "react-native"
import { Icon, Screen, Text } from "../components"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"

interface StoryBookScreenProps extends AppStackScreenProps<"StoryBook"> {}

export const StoryBookScreen: FC<StoryBookScreenProps> = observer(function StoryBookScreen(_props) {
  const { navigation } = _props

  function goBack() {
    navigation.goBack()
  }

  return (
    <Screen
      preset="auto"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
    >
      <View style={$screenViewContainer}>
        <View style={$headerStyle}>
          <TouchableOpacity onPress={goBack} style={$imageIconButton}>
            <Icon icon="caretLeft" containerStyle={$imageIconStyle} size={24} />
          </TouchableOpacity>
          <View style={$headerTextContainer}>
            <Text text="Chapter 1" preset="subheading" />
          </View>
        </View>
        <View style={$modelBorderBottomStyle}>
          <Text text="We did it inside his car in day light" preset="subheading" />
        </View>

        <View style={$bookDetailsContainerStyle}>
          <Text
            text="Emily Johnson is a talented and driven marketing professional with a passion for creating impactful campaigns. With a bachelor's degree in Marketing and several years of experience in the industry, she has developed a strong understanding of market trends, consumer behavior, and effective crafting compelling content. "
            preset="default"
          />
          <Text
            text="Johnson is a talented and driven marketing professional with a passion for creating impactful campaigns. With a bachelor's degree in Marketing and several years of experience in the industry."
            preset="default"
          />
          <Text
            text="Emily Johnson is a talented and driven marketing professional with a passion for creating impactful campaigns. With a bachelor's degree in Marketing and several years of experience in the industry, she has developed a strong understanding of market trends, consumer behavior, and effective crafting compelling content. "
            preset="default"
          />
          <Text
            text="Johnson is a talented and driven marketing professional with a passion for creating impactful campaigns. With a bachelor's degree in Marketing and several years of experience in the industry."
            preset="default"
          />
          <Text
            text="Emily Johnson is a talented and driven marketing professional with a passion for creating impactful campaigns. With a bachelor's degree in Marketing and several years of experience in the industry, she has developed a strong understanding of market trends, consumer behavior, and effective crafting compelling content. "
            preset="default"
          />
          <Text
            text="Johnson is a talented and driven marketing professional with a passion for creating impactful campaigns. With a bachelor's degree in Marketing and several years of experience in the industry."
            preset="default"
          />
        </View>
      </View>
    </Screen>
  )
})

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.md,
  paddingHorizontal: spacing.lg,
  //   backgroundColor: colors.palette.neutral100,
}

const $screenViewContainer: ViewStyle = {
  width: "100%",
  height: "100%",
  justifyContent: "space-between",
}

const $headerStyle: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  position: "relative",
  marginBottom: 20,
}

const $headerTextContainer: ViewStyle = {
  flex: 1,
  alignItems: "center",
}

const $modelBorderBottomStyle: ViewStyle = {
  marginBottom: 20,
}

const $imageIconButton: ViewStyle = {
  position: "absolute",
  left: 0,
  zIndex: 50,
}

const $imageIconStyle: ImageStyle = {
  width: 36,
  height: 36,
  borderRadius: 60,
  padding: 10,
  borderColor: colors.palette.neutral500,
  borderWidth: 1,
  alignItems: "center",
  justifyContent: "center",
}

const $bookDetailsContainerStyle: ViewStyle = {
  gap: 4,
}
