import { observer } from "mobx-react-lite"
import React, { FC, useEffect, useState } from "react"
import { TextStyle, View, ViewStyle, ImageStyle } from "react-native"
import { Button, Icon, Screen, Text } from "../components"
import { useStores } from "../models"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
// import { Center } from "native-base"

interface BookingConfirmedScreenProps extends AppStackScreenProps<"BookingConfirmed"> {}

export const BookingConfirmedScreen: FC<BookingConfirmedScreenProps> = observer(
  function BookingConfirmedScreen(_props) {
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

      navigation.navigate("Wallet")

      // We'll mock this with a fake token.
      //   setAuthToken(String(Date.now()))
    }

    return (
      <Screen
        preset="fixed"
        contentContainerStyle={$screenContentContainer}
        safeAreaEdges={["top"]}
      >
        <View style={$screenViewContainer}>
          <View style={$confirmTextContainer}>
            <Icon
              color="#00A550"
              icon="check"
              onPress={goBack}
              containerStyle={$imageIconStyle}
              size={24}
            />

            <Text text="Booking Confirmed" preset="subheading" style={$confirmText} />
            <Text
              text={`You bookked Wesley Kim, details has been sent to your email`}
              preset="default"
              style={[$forgotTextStyle, $signIn, $confirmText]}
            />
          </View>

          <View style={$buttonViewContainer}>
            <Button
              text="Continue"
              style={$tapButton}
              textStyle={{
                color: colors.palette.primary,
              }}
              preset="reversed"
              onPress={continueForward}
            />
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
  backgroundColor: colors.palette.primary,
}

const $screenViewContainer: ViewStyle = {
  width: "100%",
  height: "100%",
  justifyContent: "space-between",
}

const $imageIconStyle: ImageStyle = {
  marginBottom: spacing.xl,
  height: 68,
  width: 68,
  borderRadius: 8,
  padding: 10,
  backgroundColor: colors.palette.neutral100,
  borderBottomWidth: 4,
  borderRightWidth: 4,
  borderColor: "#00A550",
  alignItems: "center",
  justifyContent: "center",
}

const $signIn: TextStyle = {
  marginBottom: spacing.md,
  // fontSize: 19,
}

const $confirmTextContainer: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: spacing.md,
  gap: 4,
}

const $confirmText: TextStyle = {
  color: colors.palette.neutral100,
}

const $forgotTextStyle: TextStyle = {
  fontSize: 14,
  lineHeight: 16,
}

const $tapButton: ViewStyle = {
  marginTop: spacing.xs,
  backgroundColor: colors.palette.neutral100,
}

const $buttonViewContainer: ViewStyle = {
  flexDirection: "column",
  gap: 12,
}
