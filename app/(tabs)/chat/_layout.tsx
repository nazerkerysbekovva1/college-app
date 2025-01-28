import { Stack } from 'expo-router';

export default function ChatLayout() {
  return (
    <Stack>
      <Stack.Screen name="chatIndex" options={{ headerShown: false }} />
      <Stack.Screen name="chat1" options={{ title: 'chat 1' }} />
    </Stack>
  );
}
