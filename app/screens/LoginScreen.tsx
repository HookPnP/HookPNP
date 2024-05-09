import { observer } from "mobx-react-lite"
import React, { ComponentType, FC, useEffect, useMemo, useRef, useState } from "react"
import { TouchableOpacity, TextInput, TextStyle, View, ViewStyle, ImageStyle } from "react-native"
import { Button, Icon, Screen, Text, TextField, TextFieldAccessoryProps } from "../components"
import { useStores } from "../models"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
// import { Center } from "native-base"

interface LoginScreenProps extends AppStackScreenProps<"Login"> {}

export const LoginScreen: FC<LoginScreenProps> = observer(function LoginScreen(_props) {
  const { navigation } = _props
  const authPasswordInput = useRef<TextInput>(null)

  const [authPassword, setAuthPassword] = useState("")
  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [attemptsCount, setAttemptsCount] = useState(0)
  const {
    authenticationStore: { authEmail, setAuthEmail, setAuthToken, validationError },
  } = useStores()

  useEffect(() => {
    // Here is where you could fetch credentials from keychain or storage
    // and pre-fill the form fields.
    // setAuthEmail("ignite@infinite.red")
    // setAuthPassword("ign1teIsAwes0m3")

    // Return a "cleanup" function that React will run when the component unmounts
    return () => {
      setAuthPassword("")
      setAuthEmail("")
    }
  }, [])

  function goBack() {
    navigation.goBack()
  }

  const error = isSubmitted ? validationError : ""

  function login() {
    setIsSubmitted(true)
    setAttemptsCount(attemptsCount + 1)

    if (validationError) return

    // Make a request to your server to get an authentication token.
    // If successful, reset the fields and set the token.
    setIsSubmitted(false)
    setAuthPassword("")
    setAuthEmail("")

    // We'll mock this with a fake token.
    setAuthToken(String(Date.now()))
  }

  function goCreateAccount() {
    navigation.navigate("SignUp")
  }

  function goForgotPassword() {
    navigation.navigate("ResetPassword")
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
      preset="auto"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
    >
      <View style={$screenViewContainer}>
        <View>
          <Icon icon="caretLeft" onPress={goBack} containerStyle={$imageIconStyle} size={24} />
          <Text text="Login to your account" preset="subheading" style={$signIn} />
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
            placeholder="Email or Phone"
            placeholderTextColor={colors.palette.neutral400}
            helper={error}
            status={error ? "error" : undefined}
            onSubmitEditing={() => authPasswordInput.current?.focus()}
          />

          <TextField
            ref={authPasswordInput}
            value={authPassword}
            onChangeText={setAuthPassword}
            containerStyle={$textField}
            style={$inputFieldStyle}
            inputWrapperStyle={$inputWrapperStyle}
            autoCapitalize="none"
            autoComplete="password"
            autoCorrect={false}
            secureTextEntry={isAuthPasswordHidden}
            labelTx="loginScreen.passwordFieldLabel"
            placeholder="Password"
            placeholderTextColor={colors.palette.neutral400}
            onSubmitEditing={login}
            RightAccessory={PasswordRightAccessory}
          />
          <TouchableOpacity onPress={goForgotPassword}>
            <Text style={[$forgotTextStyle, $textField]}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={$buttonViewContainer}>
          <Button text="Log In" style={$tapButton} preset="reversed" onPress={login} />
          <View style={$buttonTextContainer}>
            <Text style={$buttonTextStyle}>Don’t have an Account?</Text>
            <TouchableOpacity onPress={goCreateAccount}>
              <Text style={[$buttonTextStyle, $buttonTextPressableStyle]}>Create account</Text>
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
  marginBottom: spacing.xl,
  // fontSize: 19,
}

const $inputFieldStyle: TextStyle = {
  height: 36,
}

const $inputWrapperStyle: TextStyle = {
  alignItems: "center",
}

const $textField: ViewStyle = {
  marginBottom: spacing.lg,
}

const $forgotTextStyle: TextStyle = {
  fontSize: 15,
  lineHeight: 17,
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
