import { ScrollView, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabInfoScreen() {
  return (
    <ImageBackground
      source={require('../../../assets/images/spec/etb.jpg')} // Replace with your background image path
      style={{ flex: 1 }}
    >
      <SafeAreaView className='flex-1'>

          <Text className='mt-4 text-white text-base text-center font-bold'>
          «Түркістан Ахмет Ясауи» кәсіби колледжі
          </Text>

      <ScrollView className='px-4 py-6'>

          <TouchableOpacity className="flex flex-row items-center justify-between rounded-lg px-6 py-2 shadow-2xl shadow-blue-500/50 bg-white/90 mb-4">
            <Text className="text-base font-bold text-dark-blue">Колледж тарихы</Text>
            <Ionicons name="chevron-forward" size={24} color="#1E3A8A" />
          </TouchableOpacity>

          <TouchableOpacity className="flex flex-row items-center justify-between rounded-lg px-6 py-2 shadow-2xl shadow-blue-500/50 bg-white/90 mb-4">
            <Text className="text-base font-bold text-dark-blue">Колледж қауіпсіздігі</Text>
            <Ionicons name="chevron-forward" size={24} color="#1E3A8A" />
          </TouchableOpacity>

          <TouchableOpacity className="flex flex-row items-center justify-between rounded-lg px-6 py-2 shadow-2xl shadow-blue-500/50 bg-white/90 mb-4">
            <Text className="text-base font-bold text-dark-blue">Кітапхана</Text>
            <Ionicons name="chevron-forward" size={24} color="#1E3A8A" />
          </TouchableOpacity>

          <TouchableOpacity className="flex flex-row items-center justify-between rounded-lg px-6 py-2 shadow-2xl shadow-blue-500/50 bg-white/90 mb-4">
            <Text className="text-base font-bold text-dark-blue">Жатақхана</Text>
            <Ionicons name="chevron-forward" size={24} color="#1E3A8A" />
          </TouchableOpacity>

          <TouchableOpacity className="flex flex-row items-center justify-between rounded-lg px-6 py-2 shadow-2xl shadow-blue-500/50 bg-white/90 mb-4">
            <Text className="text-base font-bold text-dark-blue">Асхана</Text>
            <Ionicons name="chevron-forward" size={24} color="#1E3A8A" />
          </TouchableOpacity>

          <TouchableOpacity className="flex flex-row items-center justify-between rounded-lg px-6 py-2 shadow-2xl shadow-blue-500/50 bg-white/90 mb-4">
            <Text className="text-base font-bold text-dark-blue">Спорт және спорттық инфрақұрылым</Text>
            <Ionicons name="chevron-forward" size={24} color="#1E3A8A" />
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
