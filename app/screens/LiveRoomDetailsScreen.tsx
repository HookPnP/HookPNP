import { observer } from "mobx-react-lite"
import React, { FC, useEffect, useState } from "react"
import { TextStyle, View, ViewStyle, ImageStyle, Image, TouchableOpacity } from "react-native"
import { Icon, IconTypes, Screen, Text, TextField } from "../components"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
// import { Center } from "native-base"

const ModelImage = require("../../assets/images/LiveRoomDetailsPic.png")
const messageAvatar = require("../../assets/images/messageAvatar.png")

interface Gift {
  value: number
  icon: IconTypes
}

interface LiveRoomDetailsScreenProps extends AppStackScreenProps<"LiveRoomDetails"> {}

export const LiveRoomDetailsScreen: FC<LiveRoomDetailsScreenProps> = observer(
  function LiveRoomDetailsScreen(_props) {
    const { navigation } = _props

    const [showGifts, setShowGifts] = useState(false)
    const gifts: Gift[] = [
      { value: 5, icon: "flower" },
      { value: 10, icon: "layer" },
      { value: 20, icon: "lightning" },
      { value: 50, icon: "graduatingCap" },
      { value: 100, icon: "gamePad" },
      { value: 500, icon: "fork" },
      { value: 1000, icon: "gem" },
    ]

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

    return (
      <Screen preset="scroll" contentContainerStyle={$containerStyle}>
        <Image source={ModelImage} alt="model-Image" style={$modelImageStyle} />
        {/* <View style={[$screenContentContainer, $modelBorderBottomStyle]}>
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
        </View> */}

        <View style={[$screenContentContainer, $modelDetailsHeaderIconsContainer]}>
          <TouchableOpacity onPress={goBack}>
            <Icon icon="caretLeft" containerStyle={$imageIconStyle} size={24} />
          </TouchableOpacity>

          <View style={$modelStatusStyle}>
            <TouchableOpacity style={$modelRightBtn}>
              <Text text={`Live`} style={$modelRightBtnText} />
            </TouchableOpacity>
            <Icon icon="videoIcon" size={18} color={"#fff"} style={$modelVideoIconStyle} />
            <Text text={"2,300"} preset="default" style={$modelTextStatusStyle} />
          </View>
        </View>

        <View style={[$buttonViewContainer, $screenContentContainer]}>
          <View>
            <TouchableOpacity style={$messageItemStyle}>
              <Image source={messageAvatar} style={$messageItemImageStyle} />
              <View style={$messageItemTextContainer}>
                <Text text={"John Lekan"} preset="default" style={$messageItemTextHeaderStyle} />
                <Text
                  text={"Talented and driven marketing professional"}
                  preset="default"
                  style={$messageItemMessageStyle}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={$messageItemStyle}>
              <Image source={messageAvatar} style={$messageItemImageStyle} />
              <View style={$messageItemTextContainer}>
                <Text text={"John Lekan"} preset="default" style={$messageItemTextHeaderStyle} />
                <Text
                  text={"Talented and driven marketing professional"}
                  preset="default"
                  style={$messageItemMessageStyle}
                />
              </View>
            </TouchableOpacity>

            <View style={[$liveRoomInputContainer, $liveRoomRelativeStyle]}>
              <TextField
                inputWrapperStyle={$textFieldStyle}
                style={$textFieldTextStyle}
                placeholder="Comments"
                placeholderTextColor={colors.palette.neutral600}
                containerStyle={$liveRoomTextFieldStyle}
              />

              <Icon
                icon="addMoney"
                size={18}
                containerStyle={$LiveRoomIconStyle}
                color="#fff"
                style={{ marginHorizontal: spacing.md }}
              />
              <TouchableOpacity onPress={() => setShowGifts((prev) => !prev)}>
                <Icon icon="gift" size={30} color="#fff" style={{ marginLeft: spacing.md }} />
              </TouchableOpacity>

              {showGifts && (
                <View style={$showGiftContainerStyle}>
                  {gifts.map((gift, index) => (
                    <View
                      style={
                        gifts.length - 1 === index
                          ? $showGiftItemStyle
                          : [$showGiftItemStyle, $showGiftItemSpecialStyle]
                      }
                      key={index}
                    >
                      <Icon icon={gift.icon} size={16} />
                      <Text text={`£${gift.value.toString()}`} />
                    </View>
                  ))}
                </View>
              )}
            </View>
          </View>
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
  height: "100%",
  resizeMode: "cover",
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

const $modelTextStatusStyle: TextStyle = {
  fontSize: 16,
  lineHeight: 18,
  color: colors.palette.neutral100,
}

const $modelStatusStyle: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 4,
}

const $liveRoomRelativeStyle: ViewStyle = {
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

const $modelVideoIconStyle: ImageStyle = {
  marginRight: 4,
}

const $modelDetailsHeaderIconsContainer: ViewStyle = {
  position: "absolute",
  top: 40,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
}

const $modelRightBtn: ViewStyle = {
  paddingHorizontal: 8,
  paddingVertical: 6,
  borderRadius: 6,
  backgroundColor: colors.palette.primary,
  marginRight: 8,
}

const $modelRightBtnText: TextStyle = {
  color: colors.palette.neutral100,
  fontSize: 14,
  lineHeight: 16,
}

const $textFieldStyle: ViewStyle = {
  height: 48,
  //   borderRadius: 8,
  borderTopLeftRadius: 8,
  borderBottomLeftRadius: 8,

  width: "100%",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  backgroundColor: colors.palette.neutral100,
  borderWidth: 1,
  borderColor: "#E7E7E7",
  shadowColor: "#0000001A",
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 1,
  shadowRadius: 10,
  flex: 1,
}

const $textFieldTextStyle: TextStyle = {
  alignSelf: "center",
  fontSize: 14,
  lineHeight: 18,
  flex: 1,
  width: "100%",
}

const $messageItemStyle: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  gap: 16,
  marginBottom: 16,
}

const $messageItemTextContainer: ViewStyle = {
  position: "relative",
  flex: 1,
}

const $messageItemTextHeaderStyle: TextStyle = {
  fontSize: 16,
  marginTop: 0,
  paddingTop: 0,
  color: colors.palette.neutral100,
}

const $messageItemMessageStyle: TextStyle = {
  color: colors.palette.neutral100,
  fontSize: 14,
}

const $messageItemImageStyle: ImageStyle = { width: 56, height: 56, borderRadius: 50 }

const $LiveRoomIconStyle: ImageStyle = {
  backgroundColor: colors.palette.primary,
  paddingTop: 0,
  height: 48,
  alignItems: "center",
  justifyContent: "center",
}

const $liveRoomInputContainer: ViewStyle = {
  flexDirection: "row",
  width: "100%",
  flex: 1,
  alignItems: "center",
}

const $liveRoomTextFieldStyle: TextStyle = {
  flex: 1,
}

const $showGiftContainerStyle: ViewStyle = {
  position: "absolute",
  right: 0,
  bottom: 50,
  backgroundColor: colors.palette.neutral100,
  borderRadius: 4,
}

const $showGiftItemStyle: ViewStyle = {
  paddingHorizontal: 8,
  paddingVertical: 4,
  flexDirection: "row",
  gap: 8,
  alignItems: "center",
}

const $showGiftItemSpecialStyle: ViewStyle = {
  borderBottomWidth: 1,
  borderColor: "#E7E7E7",
}
