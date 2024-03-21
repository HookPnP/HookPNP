import {AppStackScreenProps} from "app/navigators";
import {observer} from "mobx-react-lite";
import React, {FC} from "react";
import Onboarding from "react-native-onboarding-swiper";
import {saveString} from "app/utils/storage";
import {Dimensions, Text, TouchableOpacity, View, ViewStyle} from "react-native";
import {colors} from "app/theme";

interface OnboardingProps extends AppStackScreenProps<"Onboarding"> {}

export const OnboardingScreen: FC<OnboardingProps> = observer(function OnboardingScreen(_props) {
    const { navigation } = _props;

    const handleSkip = () => {
        navigation.navigate("Welcome");
        saveString("onboarded", "1");
    };

    const handleDone = () => {
        navigation.navigate("Welcome");
        saveString("onboarded", "1");
    };

    const { width } = Dimensions.get("window"); // Get the window width

    const $container: ViewStyle = {
        flex: 1,
        backgroundColor: colors.background,
    };

    const $lottie: ViewStyle = {
        width: width * 0.9, // Use window width for dynamic calculation
        height: width,
    };

    const $doneButton: ViewStyle = {
        padding: 20,
    };

    const doneButton = ({ ...props }) => {
        return (
            <TouchableOpacity style={$doneButton} {...props}>
                <Text>Done</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={$container}>
            <Onboarding
                containerStyles={{ paddingHorizontal: 15 }}
                onSkip={handleSkip}
                onDone={handleDone}
                DoneButtonComponent={doneButton}
                pages={[
                    {
                        backgroundColor: colors.background,
                        image: (
                            <View style={$lottie}>
                               {/* <Lottie
                                    source={require("../assets/animations/boost.json")}
                                    autoPlay
                                    loop
                                /> */}
                            </View>
                        ),
                        title: "Your destination for casual connections",
                        subtitle: "",
                    },
                    {
                        backgroundColor: colors.background,
                        image: (
                            <View style={$lottie}>
                               {/* <Lottie
                                    source={require("../assets/animations/work.json")}
                                    autoPlay
                                    loop
                                /> */}
                            </View>
                        ),
                        title: "Make it a night to remember",
                        subtitle: "",
                    },
                    {
                        backgroundColor: colors.background,
                        image: (
                            <View style={$lottie}>
                                {/* <Lottie
                                    source={require("../assets/animations/achieve.json")}
                                    autoPlay
                                    loop
                                /> */}
                            </View>
                        ),
                        title: "Discreetly arrange hookups with the best",
                        subtitle: "",
                    },
                ]}
            />
        </View>
    );
});
