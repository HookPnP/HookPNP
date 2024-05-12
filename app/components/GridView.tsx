import React from "react"
// import { View } from "native-base"
import { ViewStyle, View } from "react-native"

interface Props<T> {
  data: T[]
  renderItem(item: T): JSX.Element
  col?: number
  padding?: number
}

export const GridView = <T,>(props: Props<T>) => {
  const { data, renderItem, col = 2, padding = 5 } = props

  // styles
  const $gridViewContainerStyle: ViewStyle = {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
  }

  const $gridViewItemStyle: ViewStyle = {
    width: col ? `${100 / col}%` : "50%",
  }

  const $gridViewRenderStyle: ViewStyle = {
    padding,
  }

  return (
    <View style={$gridViewContainerStyle}>
      {data.map((item, index) => (
        <View key={index} style={$gridViewItemStyle}>
          <View style={$gridViewRenderStyle}>{renderItem(item)}</View>
        </View>
      ))}
    </View>
  )
}
