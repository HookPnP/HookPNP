import { AppStackScreenProps } from "app/navigators"
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import Onboarding from "react-native-onboarding-swiper"
import { saveString } from "app/utils/storage"
import {
  Dimensions,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  TextStyle,
  Image,
  ImageStyle,
  ImageSourcePropType,
} from "react-native"
import { colors, typography } from "app/theme"

const onboardingImage1 = require("../../assets/images/onboarding1.png")
const onboardingImage2 = require("../../assets/images/onboarding2.png")
const onboardingImage3 = require("../../assets/images/onboarding3.png")

const arrowIcon = require("../../assets/icons/back.png")

interface OnboardingProps extends AppStackScreenProps<"Onboarding"> {}

export const OnboardingScreen: FC<OnboardingProps> = observer(function OnboardingScreen(_props) {
  const { navigation } = _props

  const handleSkip = () => {
    navigation.navigate("Welcome")
    saveString("onboarded", "1")
  }

  const handleDone = () => {
    navigation.navigate("Welcome")
    saveString("onboarded", "1")
  }

  const { width } = Dimensions.get("window") // Get the window width

  const $container: ViewStyle = {
    flex: 1,
    backgroundColor: colors.background,
    overflow: "hidden",
    position: "relative",
  }

  const $onboardingContainerStyle: ViewStyle = {
    paddingHorizontal: 15,
    overflow: "hidden",
  }

  const $lottie: ViewStyle = {
    width: width * 0.9, // Use window width for dynamic calculation
    height: width,
  }

  //
  // Image Component
  const ImageComponent = ({ source }: { source: ImageSourcePropType }) => {
    const $imageContainerStyle: ViewStyle = {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    }

    const $imageComponentLeftStyle: ViewStyle = {
      height: 250,
      width: 50,
      backgroundColor: colors.background,
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
      opacity: 0.3,
    }

    const $imageStyle: ImageStyle = {
      width: "100%",
      height: 340,
    }

    const $imageComponentRightStyle: ViewStyle = {
      height: 250,
      width: 50,
      backgroundColor: colors.background,
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
      opacity: 0.3,
    }
    return (
      <View style={$lottie}>
        <View style={$imageContainerStyle}>
          <View style={$imageComponentLeftStyle}></View>
          <Image source={source} resizeMode="contain" style={$imageStyle} />
          <View style={$imageComponentRightStyle}></View>
        </View>
      </View>
    )
  }

  const $baseTextStyle: TextStyle = {
    fontSize: 28,
    lineHeight: 42,
    fontFamily: typography.primary.medium,
    color: colors.palette.neutral100,
    textAlign: "center",
    flexShrink: 1,
    flexGrow: 0,
    zIndex: 2,
  }

  const $nextButton: ViewStyle = {
    padding: 20,
    margin: 20,
    backgroundColor: colors.palette.neutral100,
    borderRadius: 84,
    height: 62,
    width: 62,
    transform: [{ rotate: "180deg" }],
  }

  const $doneButton: ViewStyle = {
    padding: 20,
  }

  const $skipButtonText: TextStyle = {
    color: colors.palette.neutral100,
    fontFamily: typography.primary.normal,
    fontSize: 16,
  }

  const nextButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={$nextButton} {...props}>
        <Image source={arrowIcon} alt="arrow-icon" />
      </TouchableOpacity>
    )
  }

  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={$doneButton} {...props}>
        <Text style={$skipButtonText}>Done</Text>
      </TouchableOpacity>
    )
  }

  const skipButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={$doneButton} {...props}>
        <Text style={$skipButtonText}>Skip</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={$container}>
      <Onboarding
        containerStyles={$onboardingContainerStyle}
        onSkip={handleSkip}
        onDone={handleDone}
        bottomBarColor="transparent"
        bottomBarHighlight={false}
        SkipButtonComponent={skipButton}
        DoneButtonComponent={doneButton}
        NextButtonComponent={nextButton}
        pages={[
          {
            backgroundColor: colors.palette.primary,
            image: <ImageComponent source={onboardingImage1} />,
            title: <Text style={$baseTextStyle}>Your destination for casual connections</Text>,
            subtitle: "",
          },
          {
            backgroundColor: colors.palette.blue,
            image: <ImageComponent source={onboardingImage2} />,
            title: <Text style={$baseTextStyle}>Make it a night to remember</Text>,
            subtitle: "",
          },
          {
            backgroundColor: colors.palette.orange,
            image: <ImageComponent source={onboardingImage3} />,
            title: <Text style={$baseTextStyle}>Discreetly arrange hookups with the best</Text>,
            subtitle: "",
          },
        ]}
      />
    </View>
  )
})
