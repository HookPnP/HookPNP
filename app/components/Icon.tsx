import * as React from "react"
import { ComponentType } from "react"
import {
  Image,
  ImageStyle,
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
  ViewStyle,
} from "react-native"

export type IconTypes = keyof typeof iconRegistry

interface IconProps extends TouchableOpacityProps {
  /**
   * The name of the icon
   */
  icon: IconTypes

  /**
   * An optional tint color for the icon
   */
  color?: string

  /**
   * An optional size for the icon. If not provided, the icon will be sized to the icon's resolution.
   */
  size?: number

  /**
   * Style overrides for the icon image
   */
  style?: StyleProp<ImageStyle>

  /**
   * Style overrides for the icon container
   */
  containerStyle?: StyleProp<ViewStyle>

  /**
   * An optional function to be called when the icon is pressed
   */
  onPress?: TouchableOpacityProps["onPress"]
}

/**
 * A component to render a registered icon.
 * It is wrapped in a <TouchableOpacity /> if `onPress` is provided, otherwise a <View />.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Components-Icon.md)
 */
export function Icon(props: IconProps) {
  const {
    icon,
    color,
    size,
    style: $imageStyleOverride,
    containerStyle: $containerStyleOverride,
    ...WrapperProps
  } = props

  const isPressable = !!WrapperProps.onPress
  const Wrapper = (WrapperProps?.onPress ? TouchableOpacity : View) as ComponentType<
    TouchableOpacityProps | ViewProps
  >

  const $imageStyle: StyleProp<ImageStyle> = [
    $imageStyleBase,
    color !== undefined && { tintColor: color },
    size !== undefined && { width: size, height: size },
    $imageStyleOverride,
  ]

  return (
    <Wrapper
      accessibilityRole={isPressable ? "imagebutton" : undefined}
      {...WrapperProps}
      style={$containerStyleOverride}
    >
      <Image style={$imageStyle} source={iconRegistry[icon]} />
    </Wrapper>
  )
}

export const iconRegistry = {
  back: require("../../assets/icons/back.png"),
  bell: require("../../assets/icons/bell.png"),
  caretLeft: require("../../assets/icons/caretLeft.png"),
  caretRight: require("../../assets/icons/caretRight.png"),
  check: require("../../assets/icons/check.png"),
  clap: require("../../assets/icons/demo/clap.png"),
  community: require("../../assets/icons/demo/community.png"),
  components: require("../../assets/icons/demo/components.png"),
  debug: require("../../assets/icons/demo/debug.png"),
  github: require("../../assets/icons/demo/github.png"),
  heart: require("../../assets/icons/demo/heart.png"),
  hidden: require("../../assets/icons/hidden.png"),
  ladybug: require("../../assets/icons/ladybug.png"),
  lock: require("../../assets/icons/lock.png"),
  menu: require("../../assets/icons/menu.png"),
  more: require("../../assets/icons/more.png"),
  pin: require("../../assets/icons/demo/pin.png"),
  podcast: require("../../assets/icons/demo/podcast.png"),
  settings: require("../../assets/icons/settings.png"),
  slack: require("../../assets/icons/demo/slack.png"),
  view: require("../../assets/icons/view.png"),
  x: require("../../assets/icons/x.png"),
  user: require("../../assets/icons/usericon.png"),
  users: require("../../assets/icons/usersicon.png"),
  home: require("../../assets/icons/home.png"),
  liveRoom: require("../../assets/icons/LiveRoom.png"),
  story: require("../../assets/icons/Story.png"),
  Bookings: require("../../assets/icons/Bookings.png"),
  search: require("../../assets/icons/search.png"),
  star: require("../../assets/icons/star.png"),
  videoIcon: require("../../assets/icons/VideoIcon.png"),
  chat: require("../../assets/icons/chatNew.png"),
  notification: require("../../assets/icons/notification.png"),
  setting: require("../../assets/icons/setting.png"),
  support: require("../../assets/icons/support.png"),
  aboutUs: require("../../assets/icons/AboutUs.png"),
  terms: require("../../assets/icons/Terms.png"),
  privacy: require("../../assets/icons/Privacy.png"),
  wallet: require("../../assets/icons/wallet.png"),
  creditCard: require("../../assets/icons/creditCard.png"),
  logOut: require("../../assets/icons/out.png"),
  addMoney: require("../../assets/icons/addMoney.png"),
  receiveMoney: require("../../assets/icons/receiveMoney.png"),
  credit: require("../../assets/icons/money-receive.png"),
  debit: require("../../assets/icons/money-send.png"),
  externalLink: require("../../assets/icons/externalLink.png"),
  time: require("../../assets/icons/time.png"),
  calendar: require("../../assets/icons/calendar.png"),
  gift: require("../../assets/icons/gift.png"),
  flower: require("../../assets/icons/flower.png"),
  layer: require("../../assets/icons/layer.png"),
  lightning: require("../../assets/icons/lightning.png"),
  graduatingCap: require("../../assets/icons/graduatingCap.png"),
  gamePad: require("../../assets/icons/game-pad.png"),
  fork: require("../../assets/icons/fork.png"),
  gem: require("../../assets/icons/gem.png"),
  photo: require("../../assets/icons/photo.png"),
  copy: require("../../assets/icons/copyN.png"),
}

const $imageStyleBase: ImageStyle = {
  resizeMode: "contain",
}
