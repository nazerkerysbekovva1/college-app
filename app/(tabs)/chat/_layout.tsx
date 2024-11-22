import { Stack } from 'expo-router';

export default function ChatLayout() {
  return (
    <Stack>
      <Stack.Screen name="chatIndex" options={{ headerShown: false }} />
      {/* <Stack.Screen name="screen2" options={{ title: 'Экран 2' }} /> */}
    </Stack>
  );
}
