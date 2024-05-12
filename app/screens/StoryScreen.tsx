import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native"
import { Text, Screen, GridView, TextField, Icon } from "app/components"
// import { AppStackScreenProps } from "../navigators"
import { colors, spacing, typography } from "../theme"
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"
import { HomeTabScreenProps } from "app/navigators/HomeNavigator"

const StoryImage = require("../../assets/images/StoryPic1.png")
const StoryImage2 = require("../../assets/images/StoryPic2.png")
const StoryImage3 = require("../../assets/images/StoryPic3.png")

interface StoryListItem {
  name: string
  id: number
  image: ImageSourcePropType
}

export const StoryScreen: FC<HomeTabScreenProps<"StoryScreen">> = observer(function StoryScreen(
  _props,
) {
  const { navigation } = _props

  const storyListData: StoryListItem[] = [
    {
      name: "We did it inside his car in day light",
      id: 1,
      image: StoryImage,
    },
    {
      name: "We did it inside his car in day light",
      id: 1,
      image: StoryImage2,
    },
    {
      name: "We did it inside his car in day light",
      id: 2,
      image: StoryImage3,
    },
    {
      name: "We did it inside his car in day light",
      id: 3,
      image: StoryImage,
    },
    {
      name: "We did it inside his car in day light",
      id: 4,
      image: StoryImage2,
    },
    {
      name: "We did it inside his car in day light",
      id: 5,
      image: StoryImage3,
    },
    {
      name: "We did it inside his car in day light",
      id: 6,
      image: StoryImage2,
    },
    {
      name: "We did it inside his car in day light",
      id: 7,
      image: StoryImage,
    },
    {
      name: "We did it inside his car in day light",
      id: 8,
      image: StoryImage3,
    },
    {
      name: "We did it inside his car in day light",
      id: 9,
      image: StoryImage2,
    },
    {
      name: "We did it inside his car in day light",
      id: 10,
      image: StoryImage3,
    },
    {
      name: "We did it inside his car in day light",
      id: 11,
      image: StoryImage,
    },
  ]

  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])

  function viewStory() {
    // navigation.navigate("ModelDetailsScreen")
  }

  return (
    <Screen preset="auto" safeAreaEdges={["top"]} contentContainerStyle={$screenContainer}>
      <View style={$topContainer}>
        <Text text="Story" preset="subheading" style={$textHeadingStyle} />

        <TextField
          LeftAccessory={(props) => (
            <Icon
              icon="search"
              size={18}
              containerStyle={[
                props.style,
                {
                  marginLeft: spacing.lg,
                },
              ]}
              style={{ marginLeft: spacing.xs }}
            />
          )}
          inputWrapperStyle={$textFieldStyle}
          style={$textFieldTextStyle}
          placeholder="Search by Name, Location"
          placeholderTextColor={colors.palette.gray400}
        />
      </View>

      <View style={$bottomContainerInsets}>
        <GridView
          data={storyListData}
          renderItem={(item) => (
            <TouchableOpacity style={$modelItemContainerStyle} onPress={viewStory}>
              <View style={$modelImageContainer}>
                <Image source={item.image} style={$modelImageStyle} />
              </View>

              {/* Location button */}
              <View style={$modelLocationContainerStyle}>
                <TouchableOpacity style={$modelRightBtn}>
                  <Text text={`Hot`} style={$modelRightBtnText} />
                </TouchableOpacity>
              </View>

              <View style={$modelBottomContainerStyle}>
                <Text text={item.name} preset="default" style={$modelTextNameStyle} />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* </View> */}
    </Screen>
  )
})

const $screenContainer: ViewStyle = {
  // flex: 1,
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

const $textFieldStyle: ViewStyle = {
  height: 48,
  borderRadius: 30,
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
  marginTop: 16,
}

const $textFieldTextStyle: TextStyle = {
  alignSelf: "center",
  fontSize: 14,
  lineHeight: 18,
}

const $modelItemContainerStyle: ViewStyle = {
  position: "relative",
}

const $modelImageContainer: ViewStyle = {
  flexDirection: "column",
  alignItems: "center",
}

const $modelImageStyle: ImageStyle = {
  width: "100%",
  height: 156,
  borderRadius: 19,
  borderWidth: 2.9,
  borderColor: colors.palette.primary,
  // marginRi: 16,
}

const $modelRightBtn: ViewStyle = {
  paddingHorizontal: 12,
  paddingVertical: 8,
  borderRadius: 6,
  backgroundColor: "#00E484",
}

const $modelRightBtnText: TextStyle = {
  color: colors.palette.neutral100,
  fontSize: 12,
  lineHeight: 14,
}

const $modelLocationContainerStyle: ViewStyle = {
  position: "absolute",
  top: 16,
  left: 16,
  right: 16,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}

const $modelTextNameStyle: TextStyle = {
  fontSize: 16,
  lineHeight: 20,
  fontFamily: typography.fonts.workSans.medium,
  alignSelf: "center",
  alignContent: "center",
  alignItems: "center",
  justifyContent: "center",
  color: colors.palette.neutral100,
  zIndex: 50,
}

const $modelBottomContainerStyle: ViewStyle = {
  position: "absolute",
  bottom: 24,
  left: 16,
  right: 16,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  zIndex: 50,
}
