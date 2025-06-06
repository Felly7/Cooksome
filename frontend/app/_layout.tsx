import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { UserProvider } from './UserContext';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
      <UserProvider>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack>
            <Stack.Screen name="home" options={{ headerShown: false }} />
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="register" options={{ headerShown: false }} />
            <Stack.Screen name="details" options={{ headerShown: false }} />
            <Stack.Screen name="bookmark" options={{ headerShown: false }} />
            <Stack.Screen name="Local_Dishes" options={{ headerShown: false }} />
            <Stack.Screen name="profile" options={{ headerShown: false }} />
            <Stack.Screen name="add" options={{ headerShown: false }} />
            <Stack.Screen name="HelpSupport" options={{ headerShown: false }} />
            <Stack.Screen name="LogoutScreen" options={{ headerShown: false }} />
            <Stack.Screen name="UserProfile" options={{ headerShown: false }} />
            <Stack.Screen name="SecurityScreen" options={{ headerShown: false }} />
            <Stack.Screen name="TwoFactorAuthScreen" options={{ headerShown: false }} />
            <Stack.Screen name="ChangePasscode" options={{ headerShown: false }} />
            <Stack.Screen name="recipeList" options={{ headerShown: false }} />

            <Stack.Screen name="+not-found" />
          </Stack>
        </ThemeProvider>
      </UserProvider>
  );
}
