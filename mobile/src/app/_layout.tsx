
import {
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
    useFonts,
} from "@expo-google-fonts/rubik"

import { Stack } from "expo-router"
import { Loading } from "@/components/loading"


export default function Layout() {
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold,
    Rubik_600SemiBold,
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  )
}