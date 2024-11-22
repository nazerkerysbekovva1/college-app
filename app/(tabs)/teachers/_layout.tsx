import { Stack } from 'expo-router';

export default function TeachersLayout() {
  return (
    <Stack>
      <Stack.Screen name="teachersIndex" options={{ headerShown: false }} />
      <Stack.Screen name="page" options={{ headerShown: false }} />
    </Stack>
  );
}
