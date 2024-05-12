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
import { Text, Screen, ListView, ListViewRef } from "app/components"
// import { AppStackScreenProps } from "../navigators"
import { colors, spacing, typography } from "../theme"
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"
import { HomeTabScreenProps } from "app/navigators/HomeNavigator"
import { ContentStyle } from "@shopify/flash-list"

const ModelImage = require("../../assets/images/modelImage.png")

interface ModelListItem {
  name: string
  id: number
  image: ImageSourcePropType
  location: string
  rating: number
  reviews: number
  status: "in-progress" | "completed"
  price?: number
  date?: string
  booked: boolean
}

export const BookingsScreen: FC<HomeTabScreenProps<"BookingsScreen">> = observer(
  function BookingsScreen(_props) {
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
        reviews: 200,
        status: "in-progress",
        booked: true,
        date: "15th Feb, 2024",
      },
      {
        name: "Water Clark",
        id: 2,
        image: ModelImage,
        location: "Los Angeles, CA",
        rating: 4.5,
        reviews: 200,
        status: "completed",
        booked: false,
        date: "15th Feb, 2024",
      },
      {
        name: "fire Fox",
        id: 3,
        image: ModelImage,
        location: "Los Angeles, CA",
        rating: 4.5,
        reviews: 200,
        status: "completed",
        booked: false,
        date: "15th Feb, 2024",
      },
      {
        name: "Black Fox",
        id: 4,
        image: ModelImage,
        location: "Los Angeles, CA",
        rating: 4.5,
        reviews: 200,
        status: "in-progress",
        booked: true,
        date: "15th Feb, 2024",
      },
    ]

    const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])

    function viewModel() {
      navigation.navigate("ModelDetailsScreen")
    }

    return (
      <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$screenContainer}>
        <View style={$topContainer}>
          <Text text="Bookings" preset="subheading" style={$textHeadingStyle} />
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
                <View style={$modelTextContainer}>
                  <View>
                    <Text text={item.name} preset="default" style={$modelTextNameStyle} />
                    <View style={$modelStatusStyle}>
                      <Text text={item.date} preset="default" style={$modelTextStatusStyle} />
                    </View>
                  </View>
                  <View style={$modelRightTextStyle}>
                    <TouchableOpacity style={$modelRightBtn}>
                      <Text
                        text={item.booked ? "Booked" : "Not Booked"}
                        style={$modelRightBtnText}
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Location button */}
                <View style={$modelLocationContainerStyle}>
                  <View style={$modelLocationTextContainerStyle}>
                    <Text text={item.status} preset="default" style={$modelLocationText} />
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
  height: 227,
  borderTopLeftRadius: 15,
  borderTopRightRadius: 15,
  // marginRi: 16,
}

const $modelTextContainer: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  borderWidth: 1,
  borderBottomLeftRadius: 15,
  borderBottomRightRadius: 15,
  borderColor: "#E7E7E7",
  paddingHorizontal: 20,
  paddingVertical: 12,
}

const $modelTextNameStyle: TextStyle = {
  fontSize: 16,
  lineHeight: 20,
  fontFamily: typography.fonts.workSans.medium,
  alignSelf: "center",
  alignContent: "center",
  alignItems: "center",
  justifyContent: "center",
}

const $modelTextStatusStyle: TextStyle = {
  fontSize: 12,
  lineHeight: 14,
  alignSelf: "center",
  alignContent: "center",
}

const $modelStatusStyle: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  marginTop: 4,
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

const $modelLocationTextContainerStyle: ViewStyle = {
  height: 23,
  paddingHorizontal: 13,
  paddingVertical: 4,
  backgroundColor: colors.palette.neutral100,
  borderRadius: 30,
}

const $modelLocationText: TextStyle = { fontSize: 12, lineHeight: 14, color: colors.text }
