import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { TextStyle, View, ViewStyle, ImageStyle, TouchableOpacity, Image } from "react-native"
import { Button, Icon, ListView, ListViewRef, Screen, Text } from "../components"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"

const BalanceCircle = require("../../assets/images/BalanceCircle.png")

interface Transaction {
  id: string
  description: string
  time: string
  type: "credit" | "debit"
  amount: number
}

interface WalletScreenProps extends AppStackScreenProps<"Wallet"> {}

export const WalletScreen: FC<WalletScreenProps> = observer(function WalletScreen(_props) {
  const { navigation } = _props

  const transactionRef = React.useRef<ListViewRef<Transaction>>(null)

  const transactions: Transaction[] = [
    {
      id: "1",
      description: "Wallet Loaded",
      time: "29 April 2023 11:34 am",
      type: "credit",
      amount: 200,
    },
    {
      id: "2",
      description: "Wallet Loaded",
      time: "29 April 2023 11:34 am",
      type: "credit",
      amount: 200,
    },
    {
      id: "3",
      description: "Withdrawal",
      time: "29 April 2023 11:34 am",
      type: "debit",
      amount: 200,
    },
    {
      id: "4",
      description: "Wallet Loaded",
      time: "29 April 2023 11:34 am",
      type: "credit",
      amount: 200,
    },
    {
      id: "5",
      description: "Withdrawal",
      time: "29 April 2023 11:34 am",
      type: "debit",
      amount: 200,
    },
    {
      id: "6",
      description: "Withdrawal",
      time: "29 April 2023 11:34 am",
      type: "debit",
      amount: 200,
    },
    {
      id: "7",
      description: "Wallet Loaded",
      time: "29 April 2023 11:34 am",
      type: "credit",
      amount: 200,
    },
    {
      id: "8",
      description: "Withdrawal",
      time: "29 April 2023 11:34 am",
      type: "debit",
      amount: 200,
    },
    {
      id: "9",
      description: "Wallet Loaded",
      time: "29 April 2023 11:34 am",
      type: "credit",
      amount: 200,
    },
    {
      id: "10",
      description: "Withdrawal",
      time: "29 April 2023 11:34 am",
      type: "debit",
      amount: 200,
    },
  ]

  function goBack() {
    navigation.goBack()
  }

  return (
    <Screen
      preset="auto"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
    >
      <View style={$screenViewContainer}>
        <View style={$headerStyle}>
          <TouchableOpacity onPress={() => goBack()} style={$buttonIconStyle}>
            <Icon icon="caretLeft" containerStyle={$imageIconStyle} size={24} />
          </TouchableOpacity>
          <View style={$headerTextContainer}>
            <Text
              text="Wallet"
              preset="subheading"
              style={$textHeadingStyle}
              onPress={() => {
                // navigation.navigate("BookingConfirmed")
              }}
            />
          </View>
        </View>

        {/* Balance section */}
        <View style={$walletBalanceContainer}>
          <Image source={BalanceCircle} alt="balance-box" style={$walletBalanceCircleStyle} />

          <View style={$walletBalanceLeftTextContainerStyle}>
            <Text text="Wallet Balance" preset="default" style={$walletBalanceLeftText} />
            <Text text="N 20,000" preset="subheading" style={$walletBalanceLeftText} />
          </View>

          <View style={$walletBalanceRightContainerStyle}>
            <Button
              LeftAccessory={() => (
                <Icon icon="addMoney" size={20} style={$walletBtnAccesoryStyle} />
              )}
              text="Add Money"
              style={$walletBtnStyle}
              textStyle={$walletBtnTextStyle}
              //   onPress={() => {}}
            />

            <Button
              LeftAccessory={() => (
                <Icon icon="receiveMoney" size={20} style={$walletBtnAccesoryStyle} />
              )}
              text="Withdraw"
              style={$walletBtnStyle}
              textStyle={$walletBtnTextStyle}
              //   onPress={() => {}}
            />
          </View>
        </View>

        <ListView<Transaction>
          ref={transactionRef}
          data={transactions}
          renderItem={({ item }) => (
            <TouchableOpacity style={$messageItemStyle}>
              <View style={$transactionLeftTextStyle}>
                <Icon
                  icon={item.type}
                  size={20}
                  containerStyle={
                    item.type === "credit"
                      ? [$transactionIconStyle, $transactionIconCreditStyle]
                      : [$transactionIconStyle, $transactionIconDebitStyle]
                  }
                />
                <View style={$messageItemTextContainer}>
                  <Text
                    text={item.description}
                    preset="subheading"
                    style={$messageItemTextHeaderStyle}
                  />
                  <Text text={item.time} preset="default" style={$messageItemMessageStyle} />
                </View>
              </View>
              <Text
                text={`${item.type === "credit" ? "$" : "-$"}` + item.amount.toString()}
                preset="default"
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          estimatedItemSize={119}
        />
      </View>
    </Screen>
  )
})

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.xxl,
  paddingHorizontal: spacing.lg,
  flex: 1,
}

const $screenViewContainer: ViewStyle = {
  width: "100%",
  height: "100%",
  justifyContent: "space-between",
}

const $headerStyle: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  position: "relative",
  marginBottom: 20,
}

const $headerTextContainer: ViewStyle = {
  flex: 1,
  alignItems: "center",
}

const $textHeadingStyle: TextStyle = {
  //   flex: 1,
}

const $imageIconStyle: ImageStyle = {
  width: 36,
  height: 36,
  borderRadius: 60,
  padding: 10,
  borderColor: colors.palette.neutral500,
  borderWidth: 1,
  alignItems: "center",
  justifyContent: "center",
}

const $buttonIconStyle: ViewStyle = {
  position: "absolute",
  left: 0,
}

const $messageItemStyle: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 16,
  marginBottom: 16,
}

const $messageItemTextContainer: ViewStyle = {
  position: "relative",
  flex: 1,
}

const $messageItemTextHeaderStyle: TextStyle = {
  fontSize: 18,
  marginTop: 0,
  paddingTop: 0,
}

const $messageItemMessageStyle: TextStyle = {
  color: "#828282",
  fontSize: 14,
}

const $walletBalanceContainer: ViewStyle = {
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  height: 100,
  backgroundColor: colors.palette.primary,
  borderRadius: 15,
  marginBottom: 20,
  position: "relative",
}

const $walletBalanceCircleStyle: ImageStyle = {
  width: "100%",
  height: "100%",
}

const $walletBalanceLeftTextContainerStyle: ViewStyle = { position: "absolute", left: 20 }

const $walletBalanceLeftText: TextStyle = { color: "#fff" }

const $walletBalanceRightContainerStyle: ViewStyle = { position: "absolute", right: 20, gap: 8 }

const $walletBtnAccesoryStyle: ImageStyle = {
  marginRight: 8,
}

const $walletBtnStyle: ViewStyle = {
  backgroundColor: colors.palette.neutral100,
  paddingHorizontal: 14,
  paddingVertical: 6,
  borderRadius: 30,
  minHeight: 24,
  borderWidth: 0,
}

const $walletBtnTextStyle: TextStyle = {
  color: colors.palette.primary,
  fontSize: 12,
  lineHeight: 14,
}

const $transactionLeftTextStyle: ViewStyle = {
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  gap: 16,
}

const $transactionIconStyle: ImageStyle = {
  borderRadius: 50,
  height: 40,
  width: 40,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

const $transactionIconCreditStyle: ImageStyle = {
  backgroundColor: "rgba(38,183,101,0.1)",
}

const $transactionIconDebitStyle: ImageStyle = {
  backgroundColor: "rgba(180,19,19,0.1)",
}
