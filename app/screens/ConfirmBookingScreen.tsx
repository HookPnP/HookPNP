import { observer } from "mobx-react-lite"
import React, { FC, useEffect, useState } from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { Button, Icon, Screen, Text } from "../components"
import { useStores } from "../models"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
// import { Center } from "native-base"

interface ConfirmBookingScreenProps extends AppStackScreenProps<"ConfirmBooking"> {}

export const ConfirmBookingScreen: FC<ConfirmBookingScreenProps> = observer(
  function ConfirmBookingScreen(_props) {
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

    //   const error = isSubmitted ? validationError : ""

    function continueForward() {
      // setIsSubmitted(true)
      setAttemptsCount(attemptsCount + 1)

      // Make a request to your server to get an authentication token.
      // If successful, reset the fields and set the token.
      // setIsSubmitted(false)
      setAuthEmail("")

      navigation.navigate("GetStarted")

      // We'll mock this with a fake token.
      //   setAuthToken(String(Date.now()))
    }

    return (
      <Screen preset="auto" contentContainerStyle={$screenContentContainer} safeAreaEdges={["top"]}>
        <View style={$screenViewContainer}>
          <View style={$stepsContainerStyle}>
            {["Result", "Profile", "Payment"].map((step, index) => (
              <View
                key={index}
                style={index < 2 ? [$stepsContainer, $addingFlex] : $stepsContainer}
              >
                <View style={$stepTextContainer}>
                  <View style={$stepTextCircle}></View>
                  <Text text={step} style={$stepTextStyle} />
                </View>

                {index < 2 && <View style={$stepsLineBreakStyle}></View>}
              </View>
            ))}
          </View>

          <View style={$bookContainerStyle}>
            <View style={$bookHeadingContainerStyle}>
              <Text text="Book Kim" preset="heading" style={$bookHeadingHeaderStyle} />
              <Text text="Order Summary" preset="default" style={$bookHeadingHeaderSubTextStyle} />
            </View>
            <View style={$bookDetailsContainerStyle}>
              {[
                { title: "Type", value: "Overnight" },
                { title: "Date", value: "12/02/24" },
                { title: "Time", value: "01:00 PM" },
                { title: "Price", value: "N50,000" },
                { title: "Location", value: "Lagos" },
              ].map((item, index) => (
                <View style={$bookDetailsTextContainerStyle} key={index}>
                  <Text text={item.title} preset="default" style={$bookDetailsTextStyle} />
                  {item.title === "Price" || item.title === "Location" ? (
                    <Text text={item.value} />
                  ) : (
                    <View style={$bookDetailsBoxContainerStyle}>
                      <Text
                        text={item.value}
                        preset="default"
                        style={$bookDetailsBoxContainerTextStyle}
                      />

                      <Icon
                        icon={
                          item.title === "Type"
                            ? "caretRight"
                            : item.title === "Date"
                            ? "calendar"
                            : item.title === "Time"
                            ? "time"
                            : "caretRight"
                        }
                        size={16}
                        style={{
                          transform: (item.title === "Type" && [{ rotate: "90deg" }]) || [
                            { rotate: "0deg" },
                          ],
                        }}
                      />
                    </View>
                  )}
                </View>
              ))}
            </View>
          </View>
          <View style={$bookNotificationContainerStyle}>
            <Text
              text="We are in no way associated with the courtesan, we only serve as a medium of meetup. Users are liable for the interaction between both parties"
              preset="default"
              style={$bookNoficationTextStyle}
            />
          </View>

          <View style={$buttonViewContainer}>
            <Button
              text="Make Payments"
              style={$tapButton}
              textStyle={{
                color: colors.palette.neutral100,
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
  backgroundColor: colors.palette.neutral100,
}

const $screenViewContainer: ViewStyle = {
  width: "100%",
  height: "100%",
  justifyContent: "space-between",
}

const $tapButton: ViewStyle = {
  marginTop: spacing.xs,
  backgroundColor: colors.palette.primary,
}

const $buttonViewContainer: ViewStyle = {
  flexDirection: "column",
  gap: 12,
}

const $stepsContainer: ViewStyle = {
  flexDirection: "row",
}

const $addingFlex: ViewStyle = {
  flex: 1,
}

const $stepsContainerStyle: ViewStyle = {
  flexDirection: "row",
  width: "100%",
}

const $stepTextContainer: ViewStyle = {
  alignItems: "center",
  justifyContent: "center",
}

const $stepTextCircle: ViewStyle = {
  height: 16,
  width: 16,
  borderRadius: 40,
  backgroundColor: colors.palette.primary,
}

const $stepTextStyle: TextStyle = {
  color: colors.palette.primary,
  fontSize: 14,
  lineHeight: 16,
  marginTop: 4,
}

const $stepsLineBreakStyle: ViewStyle = {
  height: 1,
  flex: 1,
  backgroundColor: colors.palette.primary,
  marginTop: 10,
}

const $bookContainerStyle: ViewStyle = {
  gap: 24,
}

const $bookHeadingContainerStyle: ViewStyle = {
  alignItems: "center",
  justifyContent: "center",
}

const $bookHeadingHeaderStyle: TextStyle = {
  fontSize: 30,
  lineHeight: 32,
}

const $bookHeadingHeaderSubTextStyle: TextStyle = {
  fontSize: 14,
  lineHeight: 16,
}

const $bookNotificationContainerStyle: ViewStyle = {
  padding: 10,
  borderRadius: 16,
  backgroundColor: colors.palette.primary100,
}

const $bookNoficationTextStyle: TextStyle = {
  fontSize: 12,
  lineHeight: 16,
}

const $bookDetailsContainerStyle: ViewStyle = {
  gap: 16,
}

const $bookDetailsTextContainerStyle: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}

const $bookDetailsTextStyle: TextStyle = {
  fontSize: 14,
  lineHeight: 16,
  color: "#4F4F4F",
}

const $bookDetailsBoxContainerStyle: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  gap: 8,
  borderWidth: 1,
  borderColor: "#E7E7E7",
  borderRadius: 8,
  padding: 8,
  minWidth: 121,
}

const $bookDetailsBoxContainerTextStyle: TextStyle = {
  fontSize: 14,
  lineHeight: 16,
  color: "#4F4F4F",
  marginRight: 16,
}
