import { observer } from "mobx-react-lite"
import React, { FC, useEffect, useState } from "react"
import { TextStyle, View, ViewStyle, ImageStyle, Image, TouchableOpacity } from "react-native"
import { Button, Icon, Screen, Text } from "../components"
import { useStores } from "../models"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing, typography } from "../theme"
// import { Center } from "native-base"

const ModelImage = require("../../assets/images/modelImage.png")

interface BookingDetailsScreenProps extends AppStackScreenProps<"BookingDetails"> {}

export const BookingDetailsScreen: FC<BookingDetailsScreenProps> = observer(
  function BookingDetailsScreen(_props) {
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

      navigation.navigate("ConfirmBooking")

      // We'll mock this with a fake token.
      //   setAuthToken(String(Date.now()))
    }

    return (
      <Screen preset="scroll" contentContainerStyle={$containerStyle}>
        <Image source={ModelImage} alt="model-Image" style={$modelImageStyle} />
        <View style={[$screenContentContainer, $modelBorderBottomStyle]}>
          <View style={$modelDetailsViewStyle}>
            <View style={$modelDetailsRelativeStyle}>
              <Text
                text={"Kim Wesley"}
                preset="default"
                style={[$modelTextNameStyle, $modelDetailsNewNameStyle]}
              />
              <View style={$modelStatusIconStyle}></View>
              <View style={$modelStatusStyle}>
                <Text text={"Lagos, Nigeria"} preset="default" style={$modelTextStatusStyle} />
              </View>
            </View>
            <View style={$modelRightTextStyle}>
              <View style={$modelStarStyle}>
                <Icon icon="star" size={14} color={"#FCC01C"} style={$modelStarIcon} />

                <Text text={"4.6"} preset="default" style={$modelTextNameStyle} />
              </View>
              <Text text={`(${23} Reviews)`} preset="default" style={$modelTextStatusStyle} />
            </View>
          </View>
        </View>

        <View style={[$screenContentContainer, $bookDetailsContainerStyle]}>
          {[
            { title: "Type", value: "Overnight" },
            { title: "Date", value: "12th Feb 2024" },
            { title: "Time", value: "01:00 PM" },
            { title: "Price", value: "N50,000" },
            { title: "Location", value: "Lagos" },
            { title: "Phone Number", value: "+2348123456789" },
          ].map((item, index) => (
            <View style={$bookDetailsTextContainerStyle} key={index}>
              <Text text={item.title} preset="default" style={$bookDetailsTextStyle} />

              <Text text={item.value} />
            </View>
          ))}
        </View>

        <View style={[$screenContentContainer, $bookingButtonsContainerStyle]}>
          {["See Profile", "Didn't show up"].map((item, index) => (
            <TouchableOpacity key={index} style={$bookingButtonStyle}>
              <Text text={item} preset="default" style={$bookingButtonTextStyle} />
            </TouchableOpacity>
          ))}
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
            text="Send a Message"
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
  },
)

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

const $modelDetailsNewNameStyle: TextStyle = {
  fontSize: 30,
  lineHeight: 33,
  fontFamily: typography.fonts.workSans.semiBold,
}

const $modelTextStatusStyle: TextStyle = {
  fontSize: 12,
  lineHeight: 14,
}

const $modelBorderBottomStyle: ViewStyle = {
  borderBottomWidth: 1,
  borderBottomColor: "#E7E7E7",
}

const $modelStatusStyle: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 4,
}

const $modelStarStyle: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
}

const $modelStatusIconStyle: ViewStyle = {
  height: 7,
  width: 7,
  backgroundColor: "#00E484",
  borderRadius: 5,
  marginRight: 4,
  position: "absolute",
  top: 0,
  right: -16,
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

const $modelDetailsRelativeStyle: ViewStyle = {
  position: "relative",
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

const $bookingButtonsContainerStyle: ViewStyle = {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: 16,
}

const $bookingButtonStyle: ViewStyle = {
  backgroundColor: "#BDBDBD",
  // width: 160,
  // height: 40,
  borderRadius: 6,
  paddingHorizontal: 16,
  paddingVertical: 8,
}

const $bookingButtonTextStyle: TextStyle = {
  fontSize: 14,
  lineHeight: 20,
  // color: "#fff",
}
