import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"
import React from "react"
import { TextStyle, ViewStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Icon } from "../components"
import { translate } from "../i18n"
import { HomeScreen, LiveRoomScreen, StoryScreen, BookingsScreen, ProfileScreen } from "../screens"
import { colors, spacing, typography } from "../theme"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"

export type HomeTabParamList = {
  HomeScreen: undefined
  LiveRoomScreen: undefined
  StoryScreen: undefined
  BookingsScreen: undefined
  ProfileScreen: undefined
}

/**
 * Helper for automatically generating navigation prop types for each route.
 *
 * More info: https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type HomeTabScreenProps<T extends keyof HomeTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<HomeTabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Tab = createBottomTabNavigator<HomeTabParamList>()

export function HomeNavigator() {
  const { bottom } = useSafeAreaInsets()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [
          $tabBar,
          { height: bottom + 70, borderTopWidth: 1, borderTopColor: "#E7E7E7" },
        ],
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.palette.gray300,
        tabBarLabelStyle: $tabBarLabel,
        tabBarItemStyle: $tabBarItem,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <Icon
              icon="home"
              color={focused ? colors.palette.primary : colors.palette.gray300}
              size={30}
            />
          ),
        }}
      />

      <Tab.Screen
        name="LiveRoomScreen"
        component={LiveRoomScreen}
        options={{
          tabBarLabel: "Live Room",
          tabBarIcon: ({ focused }) => (
            <Icon
              icon="liveRoom"
              color={focused ? colors.palette.primary : colors.palette.gray300}
              size={30}
            />
          ),
        }}
      />

      <Tab.Screen
        name="StoryScreen"
        component={StoryScreen}
        options={{
          tabBarLabel: "Story",
          tabBarIcon: ({ focused }) => (
            <Icon
              icon="story"
              color={focused ? colors.palette.primary : colors.palette.gray300}
              size={30}
            />
          ),
        }}
      />

      <Tab.Screen
        name="BookingsScreen"
        component={BookingsScreen}
        options={{
          tabBarAccessibilityLabel: translate("demoNavigator.podcastListTab"),
          tabBarLabel: "Bookings",
          tabBarIcon: ({ focused }) => (
            <Icon
              icon="Bookings"
              color={focused ? colors.palette.primary : colors.palette.gray300}
              size={30}
            />
          ),
        }}
      />

      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused }) => (
            <Icon
              icon="user"
              color={focused ? colors.palette.primary : colors.palette.gray300}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const $tabBar: ViewStyle = {
  backgroundColor: colors.background,
  borderTopColor: colors.transparent,
}

const $tabBarItem: ViewStyle = {
  paddingTop: spacing.md,
}

const $tabBarLabel: TextStyle = {
  fontSize: 12,
  fontFamily: typography.primary.medium,
  lineHeight: 16,
}
