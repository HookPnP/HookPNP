import { observer } from "mobx-react-lite"
import React, { FC, useEffect, useState } from "react"
import { TextStyle, View, ViewStyle, ImageStyle, Image, TouchableOpacity } from "react-native"
import { Button, Icon, Screen, Text } from "../components"
import { useStores } from "../models"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing, typography } from "../theme"
// import { Center } from "native-base"

const ModelImage = require("../../assets/images/StoryDetails.png")

interface StoryDetailsScreenProps extends AppStackScreenProps<"StoryDetails"> {}

export const StoryDetailsScreen: FC<StoryDetailsScreenProps> = observer(function StoryDetailsScreen(
  _props,
) {
  const { navigation } = _props

  // const [isSubmitted, setIsSubmitted] = useState(false)
  const [attemptsCount, setAttemptsCount] = useState(0)
  const {
    authenticationStore: { setAuthEmail },
  } = useStores()

  useEffect(() => {
    // Here is where you could fetch credentials from keychain or storage
    // and pre-fill the form fields.
    //   setAuthEmail("ignite@infinite.red")
    //   setAuthPassword("ign1teIsAwes0m3")

    // Return a "cleanup" function that React will run when the component unmounts
    return () => {
      //   setAuthEmail("")
    }
  }, [])

  function goBack() {
    navigation.goBack()
  }

  //   const error = isSubmitted ? validationError : ""

  function continueForward() {
    // setIsSubmitted(true)
    setAttemptsCount(attemptsCount + 1)

    // Make a request to your server to get an authentication token.
    // If successful, reset the fields and set the token.
    // setIsSubmitted(false)
    setAuthEmail("")

    navigation.navigate("StoryBook")

    // We'll mock this with a fake token.
    //   setAuthToken(String(Date.now()))
  }

  return (
    <Screen preset="scroll" contentContainerStyle={$containerStyle}>
      <Image source={ModelImage} alt="model-Image" style={$modelImageStyle} />
      <View style={[$screenContentContainer, $modelBorderBottomStyle]}>
        <Text text="We did it inside his car in day light" preset="subheading" />
        <View style={$modelDetailsViewStyle}>
          <View style={$profileNameLeftContainer}>
            <View style={$profileNameLeftAvatar}>
              <Text text="OM" preset="subheading" style={$textHeadingStyle} />
            </View>
            <Text text="Megan Fox" preset="subheading" style={$textHeadingStyle} />
          </View>
          <View style={$modelRightTextStyle}>
            <View style={$modelStarStyle}>
              <Icon icon="star" size={14} color={"#FCC01C"} style={$modelStarIcon} />

              <Text text={"4.6"} preset="default" style={$modelTextNameStyle} />
            </View>
          </View>
        </View>
      </View>

      <View style={[$screenContentContainer, $bookDetailsContainerStyle]}>
        <Text text="Overview" preset="subheading" />
        <Text
          text="Emily Johnson is a talented and driven marketing professional with a passion for creating impactful campaigns. With a bachelor's degree in Marketing and several years of experience in the industry, she has developed a strong understanding of market trends, consumer behavior, and effective crafting compelling content. "
          preset="default"
        />
        <Text
          text="Johnson is a talented and driven marketing professional with a passion for creating impactful campaigns. With a bachelor's degree in Marketing and several years of experience in the industry."
          preset="default"
        />
      </View>

      <View style={[$screenContentContainer, $modelDetailsHeaderIconsContainer]}>
        <TouchableOpacity onPress={goBack}>
          <Icon icon="caretLeft" containerStyle={$imageIconStyle} size={24} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon icon="externalLink" containerStyle={$imageIconStyle} size={24} />
        </TouchableOpacity>
      </View>

      <View style={[$buttonViewContainer, $screenContentContainer]}>
        <Button
          text="Start Reading"
          style={$tapButton}
          textStyle={{
            color: colors.palette.neutral100,
          }}
          preset="reversed"
          onPress={continueForward}
        />
      </View>
    </Screen>
  )
})

const $containerStyle: ViewStyle = {
  position: "relative",
  flex: 1,
}

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.md,
  paddingHorizontal: spacing.lg,
  //   backgroundColor: colors.palette.neutral100,
}

const $modelImageStyle: ImageStyle = {
  width: "100%",
  height: 300,
  resizeMode: "cover",
}

const $tapButton: ViewStyle = {
  marginTop: spacing.xs,
  backgroundColor: colors.palette.primary,
  width: "100%",
  alignSelf: "center",
  alignItems: "center",
  justifyContent: "center",
}

const $buttonViewContainer: ViewStyle = {
  flexDirection: "column",
  alignContent: "center",
  justifyContent: "center",
  alignItems: "center",
  gap: 12,
  position: "absolute",
  bottom: 30,
  width: "100%",
}

const $modelTextNameStyle: TextStyle = {
  fontSize: 16,
  lineHeight: 20,
  fontFamily: typography.fonts.workSans.medium,
}

const $modelBorderBottomStyle: ViewStyle = {
  borderBottomWidth: 1,
  borderBottomColor: "#E7E7E7",
}

const $modelStarStyle: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
}

const $modelStarIcon: ImageStyle = {
  marginRight: 4,
  marginTop: 0,
  flexShrink: 1,
  alignContent: "center",
  alignSelf: "center",
}

const $modelRightTextStyle: ViewStyle = { flexDirection: "column", alignItems: "flex-end" }

const $modelDetailsViewStyle: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}

const $imageIconStyle: ImageStyle = {
  width: 36,
  height: 36,
  borderRadius: 60,
  padding: 10,
  backgroundColor: colors.palette.neutral100,
  alignItems: "center",
  justifyContent: "center",
}

const $modelDetailsHeaderIconsContainer: ViewStyle = {
  position: "absolute",
  top: 40,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
}

const $bookDetailsContainerStyle: ViewStyle = {
  gap: 4,
}

const $profileNameLeftContainer: ViewStyle = {
  flexDirection: "row",
  gap: 16,
}

const $profileNameLeftAvatar: ViewStyle = {
  width: 40,
  height: 40,
  borderRadius: 64,
  backgroundColor: "#FFECE5",
  alignItems: "center",
  justifyContent: "center",
}

const $textHeadingStyle: TextStyle = {
  alignSelf: "center",
  fontSize: 16,
}
