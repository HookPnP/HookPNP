import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import {
  TextStyle,
  View,
  ViewStyle,
  ImageStyle,
  TouchableOpacity,
  ImageSourcePropType,
  Image,
} from "react-native"
import { Icon, ListView, ListViewRef, Screen, Text } from "../components"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"

const messageAvatar = require("../../assets/images/messageAvatar.png")

interface Message {
  id: string
  message: string
  time: string
  name: string
  image: ImageSourcePropType
  read: boolean
}

interface MessagesScreenProps extends AppStackScreenProps<"Messages"> {}

export const MessagesScreen: FC<MessagesScreenProps> = observer(function MessagesScreen(_props) {
  const { navigation } = _props

  const messageRef = React.useRef<ListViewRef<Message>>(null)

  const messages: Message[] = [
    {
      id: "1",
      message: "General Message from Hook PNP",
      time: "03:45PM",
      image: messageAvatar,
      name: "Wesley Kim",
      read: false,
    },
    {
      id: "2",
      message: "Megan Fox has started a new live show",
      time: "03:45PM",
      image: messageAvatar,
      name: "Wesley Kim",
      read: false,
    },
    {
      id: "3",
      message: "Megan Fox has started a new live show",
      time: "03:45PM",
      image: messageAvatar,
      name: "Wesley Kim",
      read: true,
    },
    {
      id: "4",
      message: "Megan Fox has started a new live show",
      time: "03:45PM",
      image: messageAvatar,
      name: "Wesley Kim",
      read: true,
    },
    {
      id: "5",
      message: "Megan Fox has started a new live show",
      time: "03:45PM",
      image: messageAvatar,
      name: "Wesley Kim",
      read: true,
    },
    {
      id: "6",
      message: "Megan Fox has started a new live show",
      time: "03:45PM",
      image: messageAvatar,
      name: "Wesley Kim",
      read: true,
    },
    {
      id: "7",
      message: "Megan Fox has started a new live show",
      time: "03:45PM",
      image: messageAvatar,
      name: "Wesley Kim",
      read: true,
    },
    {
      id: "8",
      message: "Megan Fox has started a new live show",
      time: "03:45PM",
      image: messageAvatar,
      name: "Wesley Kim",
      read: true,
    },
    {
      id: "9",
      message: "Megan Fox has started a new live show",
      time: "03:45PM",
      image: messageAvatar,
      name: "Wesley Kim",
      read: true,
    },
    {
      id: "10",
      message: "Megan Fox has started a new live show",
      time: "03:45PM",
      image: messageAvatar,
      name: "Wesley Kim",
      read: true,
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
          <Icon
            icon="caretLeft"
            onPress={() => goBack()}
            containerStyle={$imageIconStyle}
            size={24}
          />
          <View style={$headerTextContainer}>
            <Text
              text="Messages"
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
              <Image source={item.image} style={$messageItemImageStyle} />
              <View style={$messageItemTextContainer}>
                <Text text={item.name} preset="subheading" style={$messageItemTextHeaderStyle} />
                <Text
                  text={item.message}
                  preset="default"
                  style={
                    item.read === false
                      ? [$messageItemMessageStyle, $messageItemMessageActive]
                      : $messageItemMessageStyle
                  }
                />

                <View style={$messageItemTimeContainer}>
                  <Text text={item.time} preset="default" style={$messageItemTimeText} />

                  {item.read === false && <View style={$messageItemActiveStyle}></View>}
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          estimatedItemSize={119}
        />
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

const $imageIconStyle: ImageStyle = {
  width: 36,
  height: 36,
  borderRadius: 60,
  padding: 10,
  borderColor: colors.palette.neutral500,
  borderWidth: 1,
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  left: 0,
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
  fontSize: 18,
  marginTop: 0,
  paddingTop: 0,
}

const $messageItemMessageStyle: TextStyle = {
  color: "#828282",
  fontSize: 14,
}

const $messageItemMessageActive: TextStyle = {
  color: "#0C0B0A",
}

const $messageItemImageStyle: ImageStyle = { width: 56, height: 56, borderRadius: 50 }

const $messageItemTimeContainer: ViewStyle = {
  position: "absolute",
  right: 0,
  height: "100%",
  paddingVertical: 5,
  justifyContent: "space-between",
  alignItems: "flex-end",
}

const $messageItemActiveStyle: ViewStyle = {
  width: 6,
  height: 6,
  backgroundColor: colors.palette.primary,
  borderRadius: 50,
}

const $messageItemTimeText: TextStyle = {
  fontSize: 12,
  color: "#6F6E6D",
}
