import { LegacyNativeModules } from "lib/NativeModules/LegacyNativeModules"
import { getNotificationPermissionsStatus, PushAuthorizationStatus } from "lib/utils/PushNotification"
import { bullet } from "palette"
import { Alert, AlertButton, Linking, Platform } from "react-native"
import { SavedSearchPill } from "./SavedSearchAlertModel"

export const getNamePlaceholder = (artistName: string, pills: SavedSearchPill[]) => {
  const filtersCountLabel = pills.length > 1 ? "filters" : "filter"
  return `${artistName} ${bullet} ${pills.length} ${filtersCountLabel}`
}

export const requestNotificationPermissions = () => {
  // permissions not determined: Android should never need this
  if (Platform.OS === "ios") {
    Alert.alert(
      "Artsy would like to send you notifications",
      "We need your permission to send notifications on alerts you have created.",
      [
        {
          text: "Proceed",
          onPress: () => LegacyNativeModules.ARTemporaryAPIModule.requestDirectNotificationPermissions(),
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ]
    )
  }
}

export const showHowToEnableNotificationInstructionAlert = () => {
  const deviceText = Platform.select({
    ios: "iOS",
    android: "android",
    default: "device",
  })
  const instruction = Platform.select({
    ios: `Tap 'Artsy' and enable "Allow Notifications" for Artsy.`,
    default: "",
  })

  const buttons: AlertButton[] = [
    {
      text: "Settings",
      onPress: () => {
        if (Platform.OS === "android") {
          Linking.openSettings()
        } else {
          Linking.openURL("App-prefs:NOTIFICATIONS_ID")
        }
      },
    },
    {
      text: "Cancel",
      style: "cancel",
    },
  ]

  Alert.alert(
    "Artsy would like to send you notifications",
    `To receive notifications for your alerts, you will need to enable them in your ${deviceText} Settings. ${instruction}`,
    Platform.OS === "ios" ? buttons : buttons.reverse()
  )
}

export const checkOrRequestPushPermissions = async () => {
  const notificationStatus = await getNotificationPermissionsStatus()

  if (notificationStatus === PushAuthorizationStatus.Denied) {
    showHowToEnableNotificationInstructionAlert()
  }

  if (notificationStatus === PushAuthorizationStatus.NotDetermined) {
    requestNotificationPermissions()
  }

  return notificationStatus === PushAuthorizationStatus.Authorized
}
