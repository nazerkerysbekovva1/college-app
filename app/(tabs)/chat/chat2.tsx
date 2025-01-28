import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Chat1() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-white px-4">

        <View className='py-2 items-center flex-row gap-4'>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome name="arrow-left" size={15} color="black" />
            </TouchableOpacity> 
          <Text className='text-sm text-black'>Назад</Text>
        </View>

    {/* Avatar and Greeting */}
    <View className="items-center mt-4">
      <View className="w-24 h-24 bg-gray-200 rounded-full items-center justify-center">
        <FontAwesome name="user-circle" size={50} color="gray" />
      </View>
      <Text className="mt-4 text-lg font-semibold text-gray-800">Добро пожаловать, администратор</Text>
    </View>

    {/* Buttons */}
    <ScrollView className='pt-3'>
      <View className="space-y-4">
        <TouchableOpacity className="border border-blue-500 p-1 rounded-lg shadow">
          <Text className="text-blue-500 text-center">Добавить расписание</Text>
        </TouchableOpacity>
        <TouchableOpacity className="border border-blue-500 p-1 rounded-lg shadow">
          <Text className="text-blue-500 text-center">Изменить существующее расписание</Text>
        </TouchableOpacity>
        <TouchableOpacity className="border border-blue-500 p-1 rounded-lg shadow">
          <Text className="text-blue-500 text-center">Выходные или праздничные дни</Text>
        </TouchableOpacity>
        <TouchableOpacity className="border border-blue-500 p-1 rounded-lg shadow">
          <Text className="text-blue-500 text-center">Изменить предмет</Text>
        </TouchableOpacity>
        <TouchableOpacity className="border border-blue-500 p-1 rounded-lg shadow">
          <Text className="text-blue-500 text-center">Тест чат-бота</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>

    {/* Input Field */}
    <View className="flex-row items-center pb-2 bg-white">
        <TextInput
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-base"
          placeholder="Сообщение..."
        />
        <TouchableOpacity className="ml-2 p-3 bg-blue-900 rounded-full">
          <FontAwesome name="send" size={20} color="white" />
        </TouchableOpacity>
      </View>
  </SafeAreaView>
  );
}
