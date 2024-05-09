import { observer } from "mobx-react-lite"
import React, { FC, useEffect, useState } from "react"
import { TextStyle, View, ViewStyle, ImageStyle, TouchableOpacity } from "react-native"
import { Button, Icon, Screen, Text } from "../components"
import { useStores } from "../models"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
import { OtpInput } from "react-native-otp-entry"
// import { Center } from "native-base"

interface ConfirmOTPScreenProps extends AppStackScreenProps<"ConfirmOTP"> {}

export const ConfirmOTPScreen: FC<ConfirmOTPScreenProps> = observer(function ConfirmOTPScreen(
  _props,
) {
  const { navigation } = _props

  // const [isSubmitted, setIsSubmitted] = useState(false)
  const [attemptsCount, setAttemptsCount] = useState(0)
  const {
    authenticationStore: { authEmail },
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

  function confirmOTP() {
    // setIsSubmitted(true)
    setAttemptsCount(attemptsCount + 1)

    // Make a request to your server to get an authentication token.
    // If successful, reset the fields and set the token.
    // setIsSubmitted(false)
    // setAuthEmail("")
    navigation.navigate("EmailConfirmed")

    // We'll mock this with a fake token.
    //   setAuthToken(String(Date.now()))
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

          <Text text="Confirm your email address" preset="subheading" />
          <Text
            text={`We sent a 6 digit code to ${authEmail}. Please enter the code to confirm your email address.`}
            preset="default"
            style={[$forgotTextStyle, $signIn]}
          />
          <OtpInput
            numberOfDigits={6}
            focusColor={colors.palette.primary}
            focusStickBlinkingDuration={500}
            onTextChange={(text) => console.log(text)}
            onFilled={(text) => console.log(`OTP is ${text}`)}
            textInputProps={{
              accessibilityLabel: "One-Time Password",
            }}
            theme={{
              containerStyle: $container,
              pinCodeContainerStyle: $pinCodeContainer,
              pinCodeTextStyle: $pinCodeText,
              focusStickStyle: $focusStick,
              focusedPinCodeContainerStyle: $activePinCodeContainer,
              filledPinCodeContainerStyle: $filledPinCodeContainer,
            }}
          />
          <View style={$resendTextContainer}>
            <Text text="Didn't receive the code?" preset="default" style={$resendText} />
            <TouchableOpacity>
              <Text text="Resend" preset="default" style={$resendTouchableText} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={$buttonViewContainer}>
          <Button text="Confirm" style={$tapButton} preset="reversed" onPress={confirmOTP} />
        </View>
      </View>
    </Screen>
  )
})

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

const $container: ViewStyle = {
  width: "100%",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: 4,
  paddingTop: 70,
}

const $pinCodeContainer: TextStyle = {
  width: "14%",
  height: 50,
  borderRadius: 10,
  borderColor: colors.palette.neutral500,
  borderWidth: 1,
  alignSelf: "center",
  alignItems: "center",
  justifyContent: "center",
}

const $pinCodeText: TextStyle = {
  fontSize: 24,
  lineHeight: 28,
  color: colors.palette.primary,
}

const $focusStick: TextStyle = {}

const $activePinCodeContainer: TextStyle = {}

const $filledPinCodeContainer: TextStyle = {
  borderColor: colors.palette.primary,
}

const $resendTextContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "center",
  marginTop: spacing.md,
  gap: 4,
}

const $resendText: TextStyle = {
  fontSize: 14,
  lineHeight: 16,
  color: colors.palette.neutral400,
}

const $resendTouchableText: TextStyle = {
  fontSize: 14,
  lineHeight: 16,
  color: colors.palette.neutral600,
}

const $forgotTextStyle: TextStyle = {
  fontSize: 14,
  lineHeight: 16,
}

const $tapButton: ViewStyle = {
  marginTop: spacing.xs,
  backgroundColor: colors.palette.primary,
}

const $buttonViewContainer: ViewStyle = {
  flexDirection: "column",
  gap: 12,
}
