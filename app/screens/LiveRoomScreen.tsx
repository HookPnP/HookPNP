import { observer } from "mobx-react-lite"
import React, { FC, useRef } from "react"
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native"
import { Text, Screen, ListView, ListViewRef, Icon } from "app/components"
// import { AppStackScreenProps } from "../navigators"
import { colors, spacing, typography } from "../theme"
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"
import { HomeTabScreenProps } from "app/navigators/HomeNavigator"
import { ContentStyle } from "@shopify/flash-list"

const ModelImage = require("../../assets/images/LiveRoomModel.png")
const ModelImage2 = require("../../assets/images/LiveRoomModel2.png")

interface ModelListItem {
  name: string
  id: number
  image: ImageSourcePropType
  location: string
  rating: number
  views: number
  status: "online" | "offline"
  amount: number
}

export const LiveRoomScreen: FC<HomeTabScreenProps<"LiveRoomScreen">> = observer(
  function LiveRoomScreen(_props) {
    const { navigation } = _props
    const modelRef = useRef<ListViewRef<ModelListItem>>(null)

    // function goNext() {
    //   navigation.navigate("Demo", { screen: "DemoShowroom", params: {} })
    // }

    const modelListData: ModelListItem[] = [
      {
        name: "Megan Fox",
        id: 1,
        image: ModelImage,
        location: "Los Angeles, CA",
        rating: 4.5,
        views: 2300,
        status: "online",
        amount: 2000,
      },
      {
        name: "Water Clark",
        id: 2,
        image: ModelImage2,
        location: "Los Angeles, CA",
        rating: 4.5,
        views: 2300,
        status: "online",
        amount: 2000,
      },
      {
        name: "fire Fox",
        id: 3,
        image: ModelImage,
        location: "Los Angeles, CA",
        rating: 4.5,
        views: 2300,
        status: "online",
        amount: 2000,
      },
      {
        name: "Black Fox",
        id: 4,
        image: ModelImage2,
        location: "Los Angeles, CA",
        rating: 4.5,
        views: 2300,
        status: "online",
        amount: 2000,
      },
    ]

    const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])

    function viewModel() {
      navigation.navigate("LiveRoomDetails")
    }

    return (
      <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$screenContainer}>
        <View style={$topContainer}>
          <Text text="Live Room" preset="subheading" style={$textHeadingStyle} />
        </View>

        <View style={[$bottomContainerInsets, $bottomContainer]}>
          <ListView<ModelListItem>
            ref={modelRef}
            horizontal={false}
            data={modelListData}
            renderItem={({ item }) => (
              <TouchableOpacity style={$modelItemContainerStyle} onPress={viewModel}>
                <View style={$modelImageContainer}>
                  <Image source={item.image} style={$modelImageStyle} />
                </View>

                {/* Location button */}
                <View style={$modelLocationContainerStyle}>
                  <View style={$modelStatusStyle}>
                    <View style={$modelStatusIconStyle}></View>
                    <Text text={item.status} preset="default" style={$modelTextStatusStyle} />
                  </View>

                  <View style={$modelStatusStyle}>
                    <Icon icon="videoIcon" size={18} color={"#fff"} style={$modelVideoIconStyle} />
                    <Text
                      text={item.views.toString()}
                      preset="default"
                      style={$modelTextStatusStyle}
                    />
                  </View>
                </View>

                <View style={$modelBottomContainerStyle}>
                  <Text text={item.name} preset="default" style={$modelTextNameStyle} />

                  <View style={$modelRightTextStyle}>
                    <TouchableOpacity style={$modelRightBtn}>
                      <Text text={`N${item.amount} to join`} style={$modelRightBtnText} />
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
            estimatedItemSize={500}
            // style={[$bottomContainer, $bottomContainerInsets]}
            contentContainerStyle={$modelListContainerStyle}
          />
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

const $modelItemContainerStyle: ViewStyle = {
  flexDirection: "column",
  marginBottom: 20,
  height: "100%",
  position: "relative",
}

const $modelImageContainer: ViewStyle = {
  flexDirection: "column",
  alignItems: "center",
}

const $modelImageStyle: ImageStyle = {
  width: "100%",
  height: 277,
  borderRadius: 19,
  borderWidth: 2.9,
  borderColor: colors.palette.primary,
  // marginRi: 16,
}

const $modelRightBtn: ViewStyle = {
  paddingHorizontal: 12,
  paddingVertical: 8,
  borderRadius: 6,
  backgroundColor: colors.palette.primary,
}

const $modelRightBtnText: TextStyle = {
  color: colors.palette.neutral100,
  fontSize: 12,
  lineHeight: 14,
}

const $modelRightTextStyle: ViewStyle = { flexDirection: "column", alignItems: "flex-end" }

const $modelVideoIconStyle: ImageStyle = {
  marginRight: 4,
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

const $modelTextStatusStyle: TextStyle = {
  fontSize: 14,
  lineHeight: 18,
  alignSelf: "center",
  alignContent: "center",
  color: "#fff",
}

const $modelStatusStyle: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  alignSelf: "center",
  marginTop: 4,
}

const $modelStatusIconStyle: ViewStyle = {
  height: 10,
  width: 10,
  backgroundColor: "#00E484",
  borderRadius: 5,
  marginRight: 4,
  alignSelf: "center",
}

const $modelListContainerStyle: ContentStyle = {
  paddingBottom: 120,
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

const $modelBottomContainerStyle: ViewStyle = {
  position: "absolute",
  bottom: 56,
  left: 16,
  right: 16,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  zIndex: 50,
}
