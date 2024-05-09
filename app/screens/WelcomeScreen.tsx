import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import {
  Image,
  ImageStyle,
  TextStyle,
  View,
  ViewStyle,
  Text as ReactNativeText,
} from "react-native"
import { Button, Text } from "app/components"
// import { isRTL } from "../i18n"
// import { useStores } from "../models"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
// import { useHeader } from "../utils/useHeader"
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"

const welcomeLogo = require("../../assets/images/hook-logo.png")

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen(_props) {
  const { navigation } = _props
  // const {
  //   authenticationStore: { logout },
  // } = useStores()

  // function goNext() {
  //   navigation.navigate("Demo", { screen: "DemoShowroom", params: {} })
  // }

  function goLogin() {
    navigation.navigate("Login")
  }

  function goSignUp() {
    navigation.navigate("SignUp")
  }

  // useHeader(
  //   {
  //     rightTx: "common.logOut",
  //     onRightPress: logout,
  //   },
  //   [logout],
  // )

  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])

  return (
    <View style={$container}>
      <View style={$topContainer}>
        <Text
          text="Welcome to"
          size="xl"
          style={{
            color: colors.palette.neutral100,
          }}
        />
        <View style={$imageContainerStyle}>
          <Image style={$welcomeLogo} source={welcomeLogo} resizeMode="cover" />
        </View>
      </View>

      <View style={[$bottomContainer, $bottomContainerInsets]}>
        <ReactNativeText></ReactNativeText>
        <View style={$buttonContainerStyle}>
          <Button
            testID="next-screen-button"
            preset="reversed"
            text="Get started"
            onPress={goSignUp}
            style={{
              backgroundColor: colors.button,
            }}
          />
          <Button
            testID="next-screen-button"
            preset="default"
            text="Log in"
            onPress={goLogin}
            style={{
              borderColor: colors.button,
            }}
          />
        </View>

        <ReactNativeText style={$textBoxStyle}>
          By continuing you accept our{" "}
          <ReactNativeText style={$innerTextBoxStyle}>Terms of service</ReactNativeText> and{" "}
          <ReactNativeText style={$innerTextBoxStyle}>Privacy policy</ReactNativeText>
        </ReactNativeText>
      </View>
    </View>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.primary,
}

const $topContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: "45%",
  justifyContent: "center",
  alignItems: "center",
  // paddingHorizontal: spacing.lg,
}

const $bottomContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 0,
  flexBasis: "55%",
  backgroundColor: colors.palette.neutral100,
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  paddingHorizontal: spacing.lg,
  justifyContent: "space-around",
}
const $welcomeLogo: ImageStyle = {
  height: "100%",
  width: "100%",
  maxWidth: 250,
  alignSelf: "center",
  marginHorizontal: "auto",
}

const $imageContainerStyle: ViewStyle = {
  position: "relative",
  width: "100%",
  height: 50,
  overflow: "hidden",
}

const $buttonContainerStyle: ViewStyle = {
  flexDirection: "column",
  gap: spacing.md,
  marginBottom: spacing.xxl,
  // paddingHorizontal: spacing.lg,
}

const $textBoxStyle: TextStyle = {
  color: colors.palette.neutral500,
  textAlign: "center",
  width: "70%",
  alignSelf: "center",
  fontSize: 14,
  lineHeight: 20,
  marginBottom: spacing.sm,
}

const $innerTextBoxStyle: TextStyle = {
  color: colors.button,
}
