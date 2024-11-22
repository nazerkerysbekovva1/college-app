import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="homeIndex"  options={{ headerShown: false }} />
      <Stack.Screen name="page" options={{ headerShown: false }} />
    </Stack>
  );
}
