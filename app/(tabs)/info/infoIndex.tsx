import { ScrollView, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabInfoScreen() {
  const navigation = useNavigation();


  return (
    <ImageBackground
      source={require('../../../assets/images/fon.png')} // Replace with your background image path
      style={{ flex: 1 }}
    >
      <SafeAreaView className='flex-1'>
      <ScrollView className='px-4 py-6'>

          <TouchableOpacity className="flex flex-row items-center justify-between rounded-lg px-6 py-2 shadow-2xl shadow-blue-500/50 bg-white/90 mb-4">
            <Text className="text-base font-bold text-dark-blue">Сабақтар туралы ақпарат (Интерактивті пән тізімі)</Text>
            <Ionicons name="chevron-forward" size={24} color="#1E3A8A" />
          </TouchableOpacity>

          <TouchableOpacity className="flex flex-row items-center justify-between rounded-lg px-6 py-2 shadow-2xl shadow-blue-500/50 bg-white/90 mb-4">
            <Text className="text-base font-bold text-dark-blue">Жиі қойылатын сұрақтар (FAQ)</Text>
            <Ionicons name="chevron-forward" size={24} color="#1E3A8A" />
          </TouchableOpacity>

          <TouchableOpacity className="flex flex-row items-center justify-between rounded-lg px-6 py-2 shadow-2xl shadow-blue-500/50 bg-white/90 mb-4">
            <Text className="text-base font-bold text-dark-blue">Пайдалы сілтемелер</Text>
            <Ionicons name="chevron-forward" size={24} color="#1E3A8A" />
          </TouchableOpacity>

          <TouchableOpacity className="flex flex-row items-center justify-between rounded-lg px-6 py-2 shadow-2xl shadow-blue-500/50 bg-white/90 mb-4">
            <Text className="text-base font-bold text-dark-blue">Мамандық таңдауға көмек (Интерактивті бағдарлау)</Text>
            <Ionicons name="chevron-forward" size={24} color="#1E3A8A" />
          </TouchableOpacity>

          <TouchableOpacity className="flex flex-row items-center justify-between rounded-lg px-6 py-2 shadow-2xl shadow-blue-500/50 bg-white/90 mb-4">
            <Text className="text-base font-bold text-dark-blue">Стипендия және әлеуметтік көмек туралы ақпарат</Text>
            <Ionicons name="chevron-forward" size={24} color="#1E3A8A" />
          </TouchableOpacity>

          <TouchableOpacity className="flex flex-row items-center justify-between rounded-lg px-6 py-2 shadow-2xl shadow-blue-500/50 bg-white/90 mb-4">
            <Text className="text-base font-bold text-dark-blue">WorldSkills байқауларына дайындық</Text>
            <Ionicons name="chevron-forward" size={24} color="#1E3A8A" />
          </TouchableOpacity>

        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
