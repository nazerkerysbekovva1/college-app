import { Stack } from 'expo-router';

export default function InfoLayout() {
  return (
    <Stack>
      <Stack.Screen name="infoIndex" options={{ headerShown: false }} />
    </Stack>
  );
}
