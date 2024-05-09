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
import { Text, Screen, TextField, Icon, ListView, ListViewRef } from "app/components"
// import { AppStackScreenProps } from "../navigators"
import { colors, spacing, typography } from "../theme"
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"
import { HomeTabScreenProps } from "app/navigators/HomeNavigator"
import { ContentStyle } from "@shopify/flash-list"

const ModelImage = require("../../assets/images/modelImage.png")

interface NavListItem {
  title: string
  id: number
}

interface ModelListItem {
  name: string
  id: number
  image: ImageSourcePropType
  location: string
  rating: number
  reviews: number
  status: "Online" | "Offline"
}

export const HomeScreen: FC<HomeTabScreenProps<"HomeScreen">> = observer(function HomeScreen(
  _props,
) {
  const { navigation } = _props

  const navRef = useRef<ListViewRef<NavListItem>>(null)
  const modelRef = useRef<ListViewRef<ModelListItem>>(null)
  const [selected, setSelected] = React.useState<number>(1)

  // function goNext() {
  //   navigation.navigate("Demo", { screen: "DemoShowroom", params: {} })
  // }

  const navListData = [
    { title: "Tob Babes", id: 1 },
    { title: "Trending", id: 2 },
    { title: "New Corner", id: 3 },
    { title: "Premium", id: 4 },
  ]

  const modelListData: ModelListItem[] = [
    {
      name: "Megan Fox",
      id: 1,
      image: ModelImage,
      location: "Los Angeles, CA",
      rating: 4.5,
      reviews: 200,
      status: "Online",
    },
    {
      name: "Water Clark",
      id: 2,
      image: ModelImage,
      location: "Los Angeles, CA",
      rating: 4.5,
      reviews: 200,
      status: "Online",
    },
    {
      name: "fire Fox",
      id: 3,
      image: ModelImage,
      location: "Los Angeles, CA",
      rating: 4.5,
      reviews: 200,
      status: "Online",
    },
    {
      name: "Black Fox",
      id: 4,
      image: ModelImage,
      location: "Los Angeles, CA",
      rating: 4.5,
      reviews: 200,
      status: "Online",
    },
  ]

  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])

  function viewModel() {
    navigation.navigate("ModelDetailsScreen")
  }

  return (
    <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$screenContainer}>
      <View style={$topContainer}>
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

        <ListView<NavListItem>
          ref={navRef}
          horizontal
          data={navListData}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={selected === item.id ? [$navItemStyle, $navItemActiveStyle] : $navItemStyle}
              onPress={() => setSelected(item.id)}
            >
              <Text
                text={item.title}
                preset="default"
                style={
                  selected === item.id
                    ? [$navItemTextStyle, $navItemTextActiveStyle]
                    : $navItemTextStyle
                }
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.title}
          estimatedItemSize={119}
        />
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
                    <View style={$modelStatusIconStyle}></View>
                    <Text text={item.status} preset="default" style={$modelTextStatusStyle} />
                  </View>
                </View>
                <View style={$modelRightTextStyle}>
                  <View style={$modelStarStyle}>
                    <Icon icon="star" size={14} color={"#FCC01C"} style={$modelStarIcon} />

                    <Text
                      text={item.rating.toString()}
                      preset="default"
                      style={$modelTextNameStyle}
                    />
                  </View>
                  <Text
                    text={`(${item.reviews} Reviews)`}
                    preset="default"
                    style={$modelTextStatusStyle}
                  />
                </View>
              </View>

              {/* Location button */}
              <View style={$modelLocationContainerStyle}>
                <View style={$modelLocationTextContainerStyle}>
                  <Text text={item.location} preset="default" style={$modelLocationText} />
                </View>

                <Icon icon="heart" size={20} color="#fff" />
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
})

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
  marginBottom: 24,
}

const $textFieldTextStyle: TextStyle = {
  alignSelf: "center",
  fontSize: 14,
  lineHeight: 18,
}

const $navItemStyle: ViewStyle = {
  paddingHorizontal: 13.81,
  paddingVertical: 7.67,
  borderWidth: 1,
  borderColor: "#CFCFCE",
  borderRadius: 30,
  marginRight: 10,
  alignItems: "center",
}

const $navItemActiveStyle: ViewStyle = {
  backgroundColor: colors.palette.primary,
  borderColor: colors.palette.primary,
}

const $navItemTextStyle: TextStyle = {
  fontSize: 14,
  lineHeight: 18,
  fontFamily: typography.fonts.workSans.medium,
}

const $navItemTextActiveStyle: TextStyle = {
  color: colors.palette.neutral100,
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
}

const $modelStarIcon: ImageStyle = {
  marginRight: 4,
  marginTop: 0,
  flexShrink: 1,
  alignContent: "center",
  alignSelf: "center",
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
