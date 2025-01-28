import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';

// Define your navigation route parameters
type RootStackParamList = {
  chat1: 'chat1'; // Define routes and their parameters (undefined if no parameters are passed)
  chat2: undefined; // Example for other chat screens
};

// Declare NavigationProp for your screen
type TabChatScreenNavigationProp = NavigationProp<RootStackParamList>;

export default function TabChatScreen() {
  const navigation = useNavigation<TabChatScreenNavigationProp>();
  const router = useRouter();

  // Function to truncate text
  const truncateText = (text: string, limit: number): string => {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="px-4 gap-4 bg-white">
        {/* First Chat Touchable */}
        <TouchableOpacity
          className="flex flex-row justify-between items-center rounded-lg p-4 shadow-2xl shadow-blue-500/50 bg-white"
          onPress={() => navigation.navigate('chat1')} // Use the typed navigation
        >
          <View className="flex flex-row items-center">
            <Image
              source={require('../../../assets/images/coll-img.jpg')}
              className="w-14 h-14 rounded-full mr-4"
            />
            <View>
              <Text className="text-lg font-bold text-black">Chat User 1</Text>
              <Text className="text-gray-500">
                {truncateText("Hello! How are you doing today? Let's catch up soon.", 20)}
              </Text>
            </View>
          </View>
          <Text className="text-sm text-gray-400">10:30 AM</Text>
        </TouchableOpacity>

        {/* Second Chat Touchable */}
        <TouchableOpacity
          className="flex flex-row justify-between items-center rounded-lg p-4 shadow-2xl shadow-green-500/50 bg-white"
          onPress={() => console.log('Chat 2 pressed')}
        >
          <View className="flex flex-row items-center">
            <Image
              source={require('../../../assets/images/coll-img.jpg')}
              className="w-14 h-14 rounded-full mr-4"
            />
            <View>
              <Text className="text-lg font-bold text-black">Chat User 2</Text>
              <Text className="text-gray-500">
                {truncateText("Are we meeting tomorrow at the usual spot?", 20)}
              </Text>
            </View>
          </View>
          <Text className="text-sm text-gray-400">Yesterday</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
