import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { TextStyle, View, ViewStyle, ImageStyle, TouchableOpacity } from "react-native"
import { Icon, ListView, ListViewRef, Screen, Text } from "../components"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
// import { Center } from "native-base"

interface Notification {
  id: string
  message: string
  time: string
}

interface NotificationsScreenProps extends AppStackScreenProps<"Notifications"> {}

export const NotificationsScreen: FC<NotificationsScreenProps> = observer(
  function NotificationsScreen(_props) {
    const { navigation } = _props

    const notificationRef = React.useRef<ListViewRef<Notification>>(null)

    const notifications: Notification[] = [
      {
        id: "1",
        message: "General Message from Hook PNP",
        time: "today, 3:45PM",
      },
      {
        id: "2",
        message: "Megan Fox has started a new live show",
        time: "today, 3:45PM",
      },
      {
        id: "3",
        message: "Megan Fox has started a new live show",
        time: "today, 3:45PM",
      },
      {
        id: "4",
        message: "Megan Fox has started a new live show",
        time: "today, 3:45PM",
      },
      {
        id: "5",
        message: "Megan Fox has started a new live show",
        time: "2 hours ago",
      },
      {
        id: "6",
        message: "Megan Fox has started a new live show",
        time: "2 hours ago",
      },
      {
        id: "7",
        message: "Megan Fox has started a new live show",
        time: "2 hours ago",
      },
      {
        id: "8",
        message: "Megan Fox has started a new live show",
        time: "2 hours ago",
      },
      {
        id: "9",
        message: "Megan Fox has started a new live show",
        time: "2 hours ago",
      },
      {
        id: "10",
        message: "Megan Fox has started a new live show",
        time: "2 hours ago",
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
            <Icon icon="caretLeft" onPress={goBack} containerStyle={$imageIconStyle} size={24} />
            <View style={$headerTextContainer}>
              <Text
                text="Notifications"
                preset="subheading"
                style={$textHeadingStyle}
                onPress={() => navigation.navigate("Messages")}
              />
            </View>
          </View>

          <ListView<Notification>
            ref={notificationRef}
            data={notifications}
            renderItem={({ item }) => (
              <TouchableOpacity style={$notificationItemStyle}>
                <View>
                  <Text
                    text={item.message}
                    preset="subheading"
                    style={$notificationItemTextHeaderStyle}
                  />
                  <Text text={item.time} preset="default" style={$notificationItemTimeStyle} />
                </View>
                <Icon icon="caretRight" size={24} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
            estimatedItemSize={119}
          />
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

const $notificationItemStyle: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 12,
  borderWidth: 1,
  borderColor: "#E7E7E7",
  borderRadius: 6,
  marginBottom: 10,
}

const $notificationItemTextHeaderStyle: TextStyle = {
  fontSize: 16,
  marginTop: 0,
  paddingTop: 0,
}

const $notificationItemTimeStyle: TextStyle = {
  color: colors.palette.neutral600,
  fontSize: 14,
}
