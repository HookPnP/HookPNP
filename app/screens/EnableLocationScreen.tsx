import { observer } from "mobx-react-lite"
import React, { FC, useEffect } from "react"
import { TextStyle, View, ViewStyle, ImageStyle, Text as ReactNativeText } from "react-native"
import { Button, Icon, Screen, Text } from "../components"
import { useStores } from "../models"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing, typography } from "../theme"
// import { Center } from "native-base"

interface EnableLocationScreenProps extends AppStackScreenProps<"EnableLocation"> {}

export const EnableLocationScreen: FC<EnableLocationScreenProps> = observer(
  function EnableLocationScreen(_props) {
    const { navigation } = _props
    const {
      authenticationStore: { setAuthEmail, setAuthToken },
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

    function goBack() {
      navigation.goBack()
    }

    function enableLocation() {
      setAuthToken("1")
      navigation.navigate("Home", { screen: "HomeScreen" })
    }

    return (
      <Screen
        preset="auto"
        contentContainerStyle={$screenContentContainer}
        safeAreaEdges={["top", "bottom"]}
      >
        <View style={$screenViewContainer}>
          <View>
            <Icon icon="caretLeft" onPress={goBack} containerStyle={$imageIconStyle} size={24} />
          </View>

          <View style={$textContainerStyle}>
            <Icon
              icon="pin"
              size={39}
              color={colors.palette.primary}
              containerStyle={$iconContainerStyle}
            />
            <Text text="Enable Location" preset="heading" style={$headingTextStyle} />
            <Text
              text="Your location is needed to personalize your feed"
              preset="default"
              style={[$forgotTextStyle, $signIn]}
            />
          </View>

          <View style={$buttonViewContainer}>
            <Button
              text="Enable Location"
              style={$tapButton}
              preset="reversed"
              onPress={enableLocation}
            />
          </View>

          <ReactNativeText style={$textBoxStyle}>
            You can change location settings later in your{" "}
            <ReactNativeText style={$innerTextBoxStyle}>phone's settings.</ReactNativeText>
          </ReactNativeText>
        </View>
      </Screen>
    )
  },
)

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.xxl,
  paddingHorizontal: spacing.lg,
  flex: 1,
}

const $screenViewContainer: ViewStyle = {
  width: "100%",
  height: "100%",
  justifyContent: "space-between",
}

const $imageIconStyle: ImageStyle = {
  marginBottom: spacing.xl,
  height: 36,
  width: 36,
  borderRadius: 30,
  padding: 10,
  borderColor: colors.palette.neutral500,
  borderWidth: 1,
  alignItems: "center",
  justifyContent: "center",
}

const $signIn: TextStyle = {
  marginBottom: spacing.md,
  // fontSize: 19,
}

const $textContainerStyle: ViewStyle = {
  alignItems: "center",
}

const $iconContainerStyle: ViewStyle = {
  marginBottom: spacing.xs,
  padding: 10,
}

const $headingTextStyle: TextStyle = {
  fontSize: 19,
  lineHeight: 22,
  marginBottom: spacing.xs,
}

const $forgotTextStyle: TextStyle = {
  fontSize: 14,
  lineHeight: 16,
  color: "#7c7c7c",
}

const $tapButton: ViewStyle = {
  marginTop: spacing.xs,
  backgroundColor: colors.palette.primary,
}

const $buttonViewContainer: ViewStyle = {
  flexDirection: "column",
  gap: 12,
}

const $textBoxStyle: TextStyle = {
  color: colors.palette.neutral500,
  textAlign: "center",
  width: "75%",
  alignSelf: "center",
  fontSize: 14,
  lineHeight: 20,
  marginBottom: spacing.sm,
  fontFamily: typography.fonts.workSans.normal,
}

const $innerTextBoxStyle: TextStyle = {
  color: colors.button,
}
