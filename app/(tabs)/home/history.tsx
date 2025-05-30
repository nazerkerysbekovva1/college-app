import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp, useRoute, useNavigation  } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { Video } from 'expo-av';


// type RootStackParamList = {
//   Page: {
//     title: string;
//     date: string;
//     description: string;
//     image: any; 
//   };
// };

// type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Page'>;

export default function History() {
  const navigation = useNavigation();

  // const route = useRoute<DetailScreenRouteProp>(); // Используем useRoute для получения параметров
  // const { title, date, description, image } = route.params;

  return (
    <SafeAreaView className='flex-1 bg-white pb-20'>
      <ScrollView className='px-4'>
        
        {/* Тақырып */}
        <Text className='text-2xl font-bold text-blue-900 mb-2 text-center'>
          Түркістан Ахмет Ясауи кәсіби колледжі
        </Text>

        {/* Негізгі ақпарат */}
        <Text className='text-base text-gray-800 mb-4 text-justify'>
          Түркістан қаласының жүрегінде орналасқан «Түркістан Ахмет Ясауи» кәсіби колледжі — білім мен руханияттың тоғысқан ордасы. 
          Ол 2006 жылы Қожа Ахмет Ясауи атындағы Халықаралық қазақ-түрік университетінің филиалы ретінде ашылған. Колледж — ХҚТУ-нің 
          бұрынғы «Түркістан» колледжі мен жаңа колледждің құқықтық жалғастырушысы.
        </Text>

        {/* Суреттер бөлімі */}
        <ScrollView horizontal className="mb-6">
          {[
            require('../../../assets/images/1.jpg'),
            require('../../../assets/images/1.jpg'),
            require('../../../assets/images/1.jpg'),
          ].map((img, index) => (
            <Image
              key={index}
              source={img}
              style={{ width: 220, height: 140, borderRadius: 10, marginRight: 10 }}
            />
          ))}
        </ScrollView>

        {/* Сапалы білім туралы */}
        <Text className='text-base text-gray-800 text-justify'>
          2011 жылы колледж Turkish Standards Institution сапа менеджменті сертификатын алды. Колледж университеттің мемлекеттік 
          лицензиясына сүйене отырып, техникалық және кәсіптік білім берудің 9 мамандығы бойынша мамандар даярлайды.
        </Text>

        {/* Мамандықтар тізімі */}
        <View className="mb-4 px-3 py-2 bg-blue-50 rounded-md border border-blue-300">
          <Text className='font-semibold text-blue-800 mb-2'>Мамандықтар:</Text>
          <Text className='text-sm text-gray-700'>
            • 06120100 – Есептеу техникасы және ақпараттық желілер{"\n"}
            • 06130100 – Бағдарламалық қамтамасыз ету{"\n"}
            • 04210100 – Құқықтану{"\n"}
            • 04110100 – Есеп және аудит{"\n"}
            • 02120200 – Киім дизайн{"\n"}
            • 08410100 – Ветеринария{"\n"}
            • 01140500 – Дене тәрбиесі және спорт{"\n"}
            • 10130300 – Тамақтандыру ұйымдастыру{"\n"}
            • 07211300 – Тағам өндірісінің технологиясы
          </Text>
        </View>

        {/* Видео бөлімі */}
        <View className="bg-gray-200 rounded-lg h-48 justify-center items-center mb-10">
          <Video
            source={require('../../../assets/videos/v1.mp4')}
            style={{ width: '100%', height: 200 }}
            resizeMode="cover"
            useNativeControls // басқару панелі
            shouldPlay       // автоматты ойнату
            isLooping        // қайталап ойнау
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
