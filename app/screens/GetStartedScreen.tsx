import { observer } from "mobx-react-lite"
import React, { FC, useEffect, useState } from "react"
import { TextStyle, View, ViewStyle, ImageStyle } from "react-native"
import { Button, Icon, Screen, Text } from "../components"
import { useStores } from "../models"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing, typography } from "../theme"
import { TouchableOpacity } from "react-native-gesture-handler"
// import { Center } from "native-base"

interface GetStartedScreenProps extends AppStackScreenProps<"GetStarted"> {}

export const GetStartedScreen: FC<GetStartedScreenProps> = observer(function GetStartedScreen(
  _props,
) {
  const { navigation } = _props

  const [selected, setSelected] = useState(0)

  //   const [isSubmitted, setIsSubmitted] = useState(false)
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
      setAuthEmail("")
    }
  }, [])

  function continueForward() {
    navigation.navigate("EnableLocation")
  }

  return (
    <Screen
      preset="auto"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
    >
      <View style={$screenViewContainer}>
        <View>
          <Text text="Get Started" preset="subheading" />
          <Text
            text="What are you joining us as?"
            preset="default"
            style={[$forgotTextStyle, $signIn]}
          />
        </View>
        <View style={$selectPickContainer}>
          {["USER", "Courtesan"].map((item, index) => (
            <TouchableOpacity
              key={index}
              style={
                selected === index
                  ? [$selectedPickItem, $selectedPickActiveItem]
                  : $selectedPickItem
              }
              onPress={() => setSelected(index)}
            >
              <Icon
                icon={item === "USER" ? "users" : "user"}
                size={14}
                containerStyle={$imageContainerStyle}
              />
              <Text text={"Joining as a"} style={$pickTextStyle} />
              <Text text={item} preset="default" style={[$pickTextBoldStyle, $pickTextStyle]} />
            </TouchableOpacity>
          ))}
        </View>

        <View style={$buttonViewContainer}>
          <Button text="Continue" style={$tapButton} preset="reversed" onPress={continueForward} />
        </View>
      </View>
    </Screen>
  )
})

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.xxl,
  paddingHorizontal: spacing.lg,
  flex: 1,
  backgroundColor: colors.palette.neutral100,
}

const $screenViewContainer: ViewStyle = {
  width: "100%",
  height: "100%",
  justifyContent: "space-between",
}

const $signIn: TextStyle = {
  marginBottom: spacing.md,
  // fontSize: 19,
}

const $forgotTextStyle: TextStyle = {
  fontSize: 14,
  lineHeight: 16,
}

const $imageContainerStyle: ImageStyle = {
  marginBottom: spacing.xs,
  height: 24,
  width: 24,
  borderRadius: 30,
  padding: 10,
  backgroundColor: colors.palette.primary100,
  alignItems: "center",
  justifyContent: "center",
}

const $selectPickContainer: ViewStyle = {
  alignItems: "center",
  marginVertical: spacing.xxl,
  gap: 16,
}

const $selectedPickItem: ViewStyle = {
  width: 150,
  height: 100,
  borderRadius: 16,
  borderWidth: 1,
  backgroundColor: colors.palette.primary0,
  borderColor: "#E0E0E0",
  paddingVertical: spacing.md,
  alignItems: "center",
}

const $selectedPickActiveItem: ViewStyle = {
  borderColor: colors.palette.primary,
  borderWidth: 3,
}

const $pickTextStyle: TextStyle = {
  fontSize: 12,
  lineHeight: 14,
  fontWeight: "400",
}

const $pickTextBoldStyle: TextStyle = {
  fontFamily: typography.fonts.workSans.bold,
  marginTop: spacing.xxs,
}

const $tapButton: ViewStyle = {
  marginTop: spacing.xs,
  backgroundColor: colors.palette.primary,
}

const $buttonViewContainer: ViewStyle = {
  flexDirection: "column",
  gap: 12,
}
