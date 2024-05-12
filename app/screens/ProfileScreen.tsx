import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { ImageStyle, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { Text, Screen, Icon, IconTypes, Button } from "app/components"
// import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"
import { HomeTabScreenProps } from "app/navigators/HomeNavigator"
import { useStores } from "app/models"

interface NavListItem {
  name: string
  id: number
  icon: IconTypes
  hasSubGroup?: boolean
  navigation?: string
}

export const ProfileScreen: FC<HomeTabScreenProps<"ProfileScreen">> = observer(
  function ProfileScreen(_props) {
    const { navigation } = _props

    const {
      authenticationStore: { logout },
    } = useStores()

    // function goNext() {
    //   navigation.navigate("Demo", { screen: "DemoShowroom", params: {} })
    // }

    const navListItems: NavListItem[] = [
      {
        name: "Messages",
        id: 1,
        icon: "chat",
        hasSubGroup: false,
        navigation: "Messages",
      },
      {
        name: "Notifications",
        id: 2,
        icon: "notification",
        hasSubGroup: false,
        navigation: "Notifications",
      },
      {
        name: "Wallet",
        id: 3,
        icon: "wallet",
        hasSubGroup: false,
        navigation: "Wallet",
      },
      {
        name: "Payment",
        id: 4,
        icon: "creditCard",
        hasSubGroup: true,
      },
      {
        name: "Account Settings",
        id: 5,
        icon: "setting",
        hasSubGroup: true,
      },
      {
        name: "Support",
        id: 6,
        icon: "support",
        hasSubGroup: true,
      },
      {
        name: "About us",
        id: 7,
        icon: "aboutUs",
        hasSubGroup: false,
      },
      {
        name: "Terms & conditions",
        id: 8,
        icon: "terms",
        hasSubGroup: false,
      },
      {
        name: "Privacy policy",
        id: 9,
        icon: "privacy",
        hasSubGroup: false,
      },
    ]

    const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])

    return (
      <Screen preset="auto" safeAreaEdges={["top"]} contentContainerStyle={$screenContainer}>
        <View style={$topContainer}>
          <Text text="Profile" preset="subheading" style={$textHeadingStyle} />
        </View>

        <View style={[$bottomContainerInsets, $bottomContainer]}>
          {/* Name Details Section */}
          <View style={$profileNameDetailsContainerStyle}>
            <View style={$profileNameLeftContainer}>
              <View style={$profileNameLeftAvatar}>
                <Text text="OM" preset="subheading" />
              </View>
              <Text text="Megan Fox" preset="subheading" style={$textHeadingStyle} />
            </View>
            <View style={$profileNameRightContainer}>
              <TouchableOpacity style={$profileNameRightBtn}>
                <Text text="Edit" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Navigation Items */}
          <View style={$profileNavItemsContainerStyle}>
            {navListItems.map((item) => (
              <View key={item.id}>
                <TouchableOpacity
                  style={[$profileNavItemStyle, $profileNavItemExtraStyle]}
                  onPress={() => {
                    item.navigation && navigation.navigate(item.navigation as any)
                  }}
                >
                  <View style={$profileNavItemStyle}>
                    <Icon icon={item.icon} size={24} style={$profileNavItemIconStyle} />
                    <Text text={item.name} style={$profileNavItemTextStyle} />
                  </View>

                  {item.hasSubGroup && (
                    <View>
                      <Icon icon="caretRight" size={24} color={colors.palette.primary} />
                    </View>
                  )}
                </TouchableOpacity>
              </View>
            ))}
          </View>

          <View style={$profileBtnContainer}>
            <Button
              LeftAccessory={() => (
                <Icon icon="logOut" size={20} style={$profileBtnAccesoryStyle} />
              )}
              text="Logout"
              style={$profileBtnStyle}
              textStyle={$profileBtnTextStyle}
              onPress={logout}
            />
          </View>
        </View>
        {/* </View> */}
      </Screen>
    )
  },
)

const $screenContainer: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
}

const $topContainer: ViewStyle = {
  // flexShrink: 1,
  // flexGrow: 1,
  // justifyContent: "center",
  // borderWidth: 1,
  paddingHorizontal: spacing.lg,
  marginTop: spacing.xl,
  marginBottom: spacing.md,
}

const $textHeadingStyle: TextStyle = {
  alignSelf: "center",
}

const $bottomContainer: ViewStyle = {
  height: "100%",
  width: "100%",
  paddingHorizontal: spacing.lg,
}

const $profileNameDetailsContainerStyle: ViewStyle = {
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
}

const $profileNameLeftContainer: ViewStyle = {
  flexDirection: "row",
  gap: 26,
}

const $profileNameLeftAvatar: ViewStyle = {
  width: 64,
  height: 64,
  borderRadius: 64,
  backgroundColor: "#FFECE5",
  alignItems: "center",
  justifyContent: "center",
}

const $profileNameRightContainer: ViewStyle = {
  alignItems: "center",
  justifyContent: "center",
}

const $profileNameRightBtn: ViewStyle = {
  borderWidth: 1,
  paddingHorizontal: 14,
  paddingVertical: 8,
  borderColor: "#CFCFCE",
  borderRadius: 8,
}

const $profileNavItemsContainerStyle: ViewStyle = {
  marginTop: 30,
  gap: 24,
  width: "100%",
}

const $profileNavItemStyle: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
}

const $profileNavItemExtraStyle: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  justifyContent: "space-between",
}

const $profileNavItemIconStyle: ImageStyle = {
  marginRight: 12,
}

const $profileNavItemTextStyle: TextStyle = {
  fontSize: 16,
  lineHeight: 22,
}

const $profileBtnContainer: ViewStyle = {
  alignItems: "center",
  justifyContent: "center",
  marginTop: 30,
}

const $profileBtnAccesoryStyle: ImageStyle = {
  marginRight: 8,
}

const $profileBtnStyle: ViewStyle = {
  backgroundColor: colors.error,
  paddingHorizontal: 14,
  paddingVertical: 8,
  borderRadius: 8,
  width: 134,
  minHeight: 36,
  borderWidth: 0,
}

const $profileBtnTextStyle: TextStyle = {
  color: colors.palette.neutral100,
  fontSize: 16,
  lineHeight: 22,
}
