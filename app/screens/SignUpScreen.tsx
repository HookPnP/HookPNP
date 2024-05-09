import { observer } from "mobx-react-lite"
import React, { ComponentType, FC, useEffect, useMemo, useRef, useState } from "react"
import { TouchableOpacity, TextInput, TextStyle, View, ViewStyle, ImageStyle } from "react-native"
import { Button, Icon, Screen, Text, TextField, TextFieldAccessoryProps } from "../components"
import { useStores } from "../models"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
// import { Center } from "native-base"

interface SignUpScreenProps extends AppStackScreenProps<"SignUp"> {}

export const SignUpScreen: FC<SignUpScreenProps> = observer(function SignUpScreen(_props) {
  const { navigation } = _props
  const authPasswordInput = useRef<TextInput>(null)

  const [authPassword, setAuthPassword] = useState("")
  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [attemptsCount, setAttemptsCount] = useState(0)
  const {
    authenticationStore: {
      authEmail,
      setAuthEmail,
      validationError,
      fullName,
      setFullName,
      phoneNumber,
      setPhoneNumber,
      referral,
      setReferral,
    },
  } = useStores()

  useEffect(() => {
    // Return a "cleanup" function that React will run when the component unmounts
    return () => {
      // setAuthPassword("")
      // setAuthEmail("")
      // setFullName("")
      // setPhoneNumber("")
      // setReferral("")
    }
  }, [])

  function goBack() {
    navigation.goBack()
  }

  const error = isSubmitted ? validationError : ""

  function signUp() {
    setIsSubmitted(true)
    setAttemptsCount(attemptsCount + 1)

    if (validationError) return

    // Make a request to your server to get an authentication token.
    // If successful, reset the fields and set the token.
    setIsSubmitted(false)

    // We'll mock this with a fake token.
    // setAuthToken(String(Date.now()))
    navigation.navigate("ConfirmOTP")
  }

  function goLogin() {
    navigation.navigate("Login")
  }

  const PasswordRightAccessory: ComponentType<TextFieldAccessoryProps> = useMemo(
    () =>
      function PasswordRightAccessory(props: TextFieldAccessoryProps) {
        return (
          <Icon
            icon={isAuthPasswordHidden ? "view" : "hidden"}
            color={colors.palette.neutral800}
            containerStyle={props.style}
            size={20}
            onPress={() => setIsAuthPasswordHidden(!isAuthPasswordHidden)}
          />
        )
      },
    [isAuthPasswordHidden],
  )

  return (
    <Screen
      preset="scroll"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
    >
      <View style={$screenViewContainer}>
        <View>
          <Icon icon="caretLeft" onPress={goBack} containerStyle={$imageIconStyle} size={24} />
          <Text text="Create an account" preset="subheading" style={$signIn} />
          <View style={$formFieldsContainer}>
            <TextField
              value={fullName}
              onChangeText={setFullName}
              style={$inputFieldStyle}
              autoCapitalize="none"
              autoComplete="name"
              autoCorrect={false}
              keyboardType="default"
              label="Full Name"
              placeholder="Enter full name"
              placeholderTextColor={colors.palette.neutral400}
              helper={error}
              status={error ? "error" : undefined}
              onSubmitEditing={() => authPasswordInput.current?.focus()}
            />

            <TextField
              value={authEmail}
              onChangeText={setAuthEmail}
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
              onSubmitEditing={() => authPasswordInput.current?.focus()}
            />

            <TextField
              ref={authPasswordInput}
              value={authPassword}
              onChangeText={setAuthPassword}
              style={$inputFieldStyle}
              inputWrapperStyle={$inputWrapperStyle}
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect={false}
              secureTextEntry={isAuthPasswordHidden}
              labelTx="loginScreen.passwordFieldLabel"
              placeholder="Choose a password"
              placeholderTextColor={colors.palette.neutral400}
              // onSubmitEditing={signUp}
              RightAccessory={PasswordRightAccessory}
            />

            <TextField
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              style={$inputFieldStyle}
              autoCapitalize="none"
              autoComplete="name"
              autoCorrect={false}
              keyboardType="default"
              label="Phone Number"
              placeholder="Enter phone number"
              placeholderTextColor={colors.palette.neutral400}
              helper={error}
              status={error ? "error" : undefined}
              onSubmitEditing={() => authPasswordInput.current?.focus()}
            />

            <TextField
              value={referral}
              onChangeText={setReferral}
              style={$inputFieldStyle}
              autoCapitalize="none"
              autoComplete="name"
              autoCorrect={false}
              keyboardType="default"
              label="Referral"
              placeholder="Enter referral"
              placeholderTextColor={colors.palette.neutral400}
              helper={error}
              status={error ? "error" : undefined}
              onSubmitEditing={() => authPasswordInput.current?.focus()}
            />
          </View>
        </View>

        <View style={$buttonViewContainer}>
          <Button text="Create Account" style={$tapButton} preset="reversed" onPress={signUp} />
          <View style={$buttonTextContainer}>
            <Text style={$buttonTextStyle}>Have an Account?</Text>
            <TouchableOpacity onPress={goLogin}>
              <Text style={[$buttonTextStyle, $buttonTextPressableStyle]}>Login</Text>
            </TouchableOpacity>
          </View>
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

const $formFieldsContainer: ViewStyle = {
  flexDirection: "column",
  gap: 16,
}

const $inputFieldStyle: TextStyle = {
  height: 36,
}

const $inputWrapperStyle: TextStyle = {
  alignItems: "center",
}

const $tapButton: ViewStyle = {
  marginTop: spacing.xs,
  backgroundColor: colors.palette.primary,
}

const $buttonViewContainer: ViewStyle = {
  flexDirection: "column",
  gap: 12,
}

const $buttonTextContainer: ViewStyle = {
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: 4,
}

const $buttonTextStyle: TextStyle = {
  fontSize: 15,
  lineHeight: 17,
}

const $buttonTextPressableStyle: TextStyle = {
  color: "#4F4F4F",
}
