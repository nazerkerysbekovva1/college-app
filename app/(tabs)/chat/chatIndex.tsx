import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

// Define your navigation route parameters
type RootStackParamList = {
  chat1: 'chat1'; // Define routes and their parameters (undefined if no parameters are passed)
  chat2: 'chat2'; // Example for other chat screens
};

// Declare NavigationProp for your screen
type TabChatScreenNavigationProp = NavigationProp<RootStackParamList>;

export default function TabChatScreen() {
  const navigation = useNavigation<TabChatScreenNavigationProp>();
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">

       <View className='py-2 items-center mb-3'>
          <Text className="text-xl font-bold text-dark-blue">Чаттар</Text>
        </View>

      <ScrollView className="px-4 gap-4 bg-white">
        {/* First Chat Touchable */}
        <TouchableOpacity
          className="flex flex-row justify-between items-center rounded-lg p-4 shadow-2xl shadow-blue-500/50 bg-white"
          onPress={() => navigation.navigate('chat1')} // Use the typed navigation
        >
          <View className="flex flex-row items-center">
            {/* Replace Image with FontAwesome Icon */}
            <View className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center mr-4">
              <Image
                source={require('../../../assets/images/Chatbot.jpg')}
                style={{ width: 56, height: 56 }}
              />
            </View>
            <View>
              <Text className="text-base font-bold text-dark-blue">CollegeChatBot</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Second Chat Touchable */}
        <TouchableOpacity
          className="flex flex-row justify-between items-center rounded-lg p-4 shadow-2xl shadow-green-500/50 bg-white"
          onPress={() => navigation.navigate('chat2')}
        >
          <View className="flex flex-row items-center">
            {/* Replace Image with FontAwesome Icon */}
            <View className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center mr-4">
              <FontAwesome name="question-circle" size={40} color="gray" />
            </View>
            <View>
              <Text className="text-base font-bold text-dark-blue">HelpChatBot</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
