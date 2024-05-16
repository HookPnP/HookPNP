import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { TextStyle, View, ViewStyle, ImageStyle, TouchableOpacity, Image } from "react-native"
import { Icon, ListView, ListViewRef, Screen, Text, TextField } from "../components"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"

const messageAvatar = require("../../assets/images/messageAvatar.png")

interface Message {
  id: string
  message: string
  time: string
  author: "Sender" | "Receiver"
}

interface MessageDetailsScreenProps extends AppStackScreenProps<"MessageDetails"> {}

export const MessageDetailsScreen: FC<MessageDetailsScreenProps> = observer(
  function MessageDetailsScreen(_props) {
    const { navigation } = _props

    const messageRef = React.useRef<ListViewRef<Message>>(null)

    const messages: Message[] = [
      {
        id: "1",
        message:
          "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
        time: "16 Oct, 2023 , 04:30 PM",
        author: "Sender",
      },
      {
        id: "2",
        message:
          "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
        time: "16 Oct, 2023 , 04:30 PM",
        author: "Receiver",
      },
      {
        id: "3",
        message:
          "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
        time: "16 Oct, 2023 , 04:30 PM",
        author: "Sender",
      },
      {
        id: "4",
        message:
          "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
        time: "16 Oct, 2023 , 04:30 PM",
        author: "Receiver",
      },
      {
        id: "5",
        message:
          "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
        time: "16 Oct, 2023 , 04:30 PM",
        author: "Sender",
      },
      {
        id: "6",
        message:
          "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
        time: "16 Oct, 2023 , 04:30 PM",
        author: "Receiver",
      },
    ]

    function goBack() {
      navigation.goBack()
    }

    return (
      <Screen
        preset="auto"
        contentContainerStyle={$screenContentContainer}
        safeAreaEdges={["top", "bottom"]}
      >
        <View style={$screenViewContainer}>
          <View style={$headerStyle}>
            <TouchableOpacity onPress={goBack} style={$imageIconButton}>
              <Icon icon="caretLeft" containerStyle={$imageIconStyle} size={24} />
            </TouchableOpacity>
            <View style={$headerTextContainer}>
              <Text
                text="Titilayo John"
                preset="subheading"
                style={$textHeadingStyle}
                onPress={() => {
                  navigation.navigate("BookingConfirmed")
                }}
              />
            </View>
          </View>

          <ListView<Message>
            ref={messageRef}
            data={messages}
            renderItem={({ item }) => (
              <TouchableOpacity style={$messageItemStyle}>
                {item.author === "Sender" && (
                  <Image source={messageAvatar} style={$messageItemImageStyle} />
                )}
                <View
                  style={
                    item.author === "Sender"
                      ? $messageItemTextContainer
                      : [$messageItemTextContainer, $messageItemTimeReceiverContainer]
                  }
                >
                  <Text
                    text={item.message}
                    preset="default"
                    style={
                      item.author === "Receiver"
                        ? [$messageItemMessageStyle, $messageItemMessageActive]
                        : $messageItemMessageStyle
                    }
                  />

                  <View style={$messageItemTimeContainer}>
                    <Text
                      text={item.time}
                      preset="default"
                      style={
                        item.author === "Sender"
                          ? $messageItemTimeText
                          : [$messageItemTimeText, $messageItemTimeActiveText]
                      }
                    />
                  </View>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
            estimatedItemSize={119}
          />

          <View style={$messageDetailsTextContainer}>
            <TextField
              inputWrapperStyle={$textFieldStyle}
              style={$textFieldTextStyle}
              placeholder="Comments"
              placeholderTextColor={colors.palette.neutral600}
              containerStyle={$liveRoomTextFieldStyle}
            />

            <Icon icon="copy" size={16} style={$messageDetailsIconStyle} />
            <Icon icon="photo" size={16} style={$messageDetailsIconStyle} />

            <Icon
              icon="addMoney"
              size={18}
              containerStyle={$LiveRoomIconStyle}
              color="#fff"
              style={{ marginHorizontal: spacing.md }}
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
}

const $screenViewContainer: ViewStyle = {
  width: "100%",
  height: "100%",
  justifyContent: "space-between",
}

const $headerStyle: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  position: "relative",
  marginBottom: 20,
}

const $headerTextContainer: ViewStyle = {
  flex: 1,
  alignItems: "center",
}

const $textHeadingStyle: TextStyle = {
  //   flex: 1,
}

const $imageIconButton: ViewStyle = {
  position: "absolute",
  left: 0,
  zIndex: 50,
}

const $imageIconStyle: ImageStyle = {
  width: 36,
  height: 36,
  borderRadius: 60,
  padding: 10,
  borderColor: colors.palette.neutral500,
  borderWidth: 1,
  alignItems: "center",
  justifyContent: "center",
}

const $messageItemStyle: ViewStyle = {
  flexDirection: "row",
  gap: 8,
  marginBottom: 16,
}

const $messageItemTextContainer: ViewStyle = {
  position: "relative",
  flex: 1,
  padding: 8,
  backgroundColor: colors.palette.primary0,
}

const $messageItemMessageStyle: TextStyle = {
  color: "#3F3E3D",
  fontSize: 14,
  textAlign: "left",
}

const $messageItemMessageActive: TextStyle = {
  color: "#0C0B0A",
  textAlign: "right",
}

const $messageItemImageStyle: ImageStyle = { width: 32, height: 32, borderRadius: 50 }

const $messageItemTimeContainer: ViewStyle = {
  paddingVertical: 5,
  justifyContent: "space-between",
}

const $messageItemTimeReceiverContainer: ViewStyle = {
  alignItems: "flex-end",
  backgroundColor: colors.palette.primary100,
}

const $messageItemTimeText: TextStyle = {
  fontSize: 12,
  color: "#6F6E6D",
}

const $messageItemTimeActiveText: TextStyle = {
  color: colors.palette.primary,
}

const $textFieldStyle: ViewStyle = {
  //   height: 48,
  //   borderRadius: 8,

  width: "100%",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  backgroundColor: colors.palette.neutral100,
  borderWidth: 1,
  borderColor: colors.palette.neutral100,
  shadowColor: "#0000001A",
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 1,
  shadowRadius: 10,
}

const $textFieldTextStyle: TextStyle = {
  alignSelf: "center",
  fontSize: 14,
  lineHeight: 18,
  flex: 1,
  width: "100%",
}

const $liveRoomTextFieldStyle: TextStyle = {
  flex: 1,
}

const $LiveRoomIconStyle: ImageStyle = {
  backgroundColor: colors.palette.primary,
  paddingTop: 0,
  height: 48,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 3,
}

const $messageDetailsTextContainer: ViewStyle = {
  borderWidth: 1,
  borderColor: "#6F6E6D",
  padding: 6,
  flexDirection: "row",
  borderRadius: 6,
  alignItems: "center",
  width: "100%",
}

const $messageDetailsIconStyle: ImageStyle = {
  marginRight: 8,
}
