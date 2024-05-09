import { observer } from "mobx-react-lite"
import React, { FC, useEffect, useState } from "react"
import { TextStyle, View, ViewStyle, ImageStyle } from "react-native"
import { Button, Icon, Screen, Text, TextField } from "../components"
import { useStores } from "../models"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
// import { Center } from "native-base"

interface ResetPasswordScreenProps extends AppStackScreenProps<"ResetPassword"> {}

export const ResetPasswordScreen: FC<ResetPasswordScreenProps> = observer(
  function ResetPasswordScreen(_props) {
    const { navigation } = _props

    const [isSubmitted, setIsSubmitted] = useState(false)
    const [attemptsCount, setAttemptsCount] = useState(0)
    const {
      authenticationStore: { authEmail, setAuthEmail, validationError },
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

    const error = isSubmitted ? validationError : ""

    function resetPassword() {
      setIsSubmitted(true)
      setAttemptsCount(attemptsCount + 1)

      if (validationError) return

      // Make a request to your server to get an authentication token.
      // If successful, reset the fields and set the token.
      setIsSubmitted(false)

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

            <Text text="Reset Password" preset="subheading" />
            <Text
              text="Enter your email address to get a link to reset your password"
              preset="default"
              style={[$forgotTextStyle, $signIn]}
            />
            <TextField
              value={authEmail}
              onChangeText={setAuthEmail}
              containerStyle={$textField}
              style={$inputFieldStyle}
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect={false}
              keyboardType="email-address"
              labelTx="loginScreen.emailFieldLabel"
              placeholder="Enter your email address"
              placeholderTextColor={colors.palette.neutral400}
              helper={error}
              status={error ? "error" : undefined}
              onSubmitEditing={resetPassword}
            />
          </View>

          <View style={$buttonViewContainer}>
            <Button text="Send Link" style={$tapButton} preset="reversed" onPress={resetPassword} />
          </View>
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

const $inputFieldStyle: TextStyle = {
  height: 36,
}

const $textField: ViewStyle = {
  marginBottom: spacing.lg,
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
