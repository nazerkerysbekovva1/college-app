import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp, useRoute, useNavigation  } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

// type RootStackParamList = {
//   Page: {
//     title: string;
//     date: string;
//     description: string;
//     image: any; 
//   };
// };

// type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Page'>;

export default function Page() {
  const navigation = useNavigation();

  // const route = useRoute<DetailScreenRouteProp>(); // Используем useRoute для получения параметров
  // const { title, date, description, image } = route.params;

  return (
    <SafeAreaView className='flex-1 bg-white pb-6'>

        <TouchableOpacity onPress={() => navigation.goBack()} className='p-4 items-center flex-row gap-4'>
          <FontAwesome name="arrow-left" size={15} color="black" />
          <Text className='text-sm text-black'>Назад</Text>
        </TouchableOpacity>
        
      <ScrollView className='px-4 gap-4'>
        
        <Text className="text-xl font-bold text-dark-blue">Колледж тарихы</Text>
        
        <Text className='text-sm text-black'>
        Түркістан Ахмет Ясауи» кәсіби колледжі Қ.А.Ясауи атындағы ХҚТУ-нің филиалы ретінде 2006 жылы ашылды. Аталған оқу орны ХҚТУ-нің 2001 жылы құрылған «Түркістан» колледжі филиалының және 2006 жылы құрылған «Түркістан Ахмет Ясауи кәсіби колледжі» мекемесінің қызметтерін құқықтық иеленуші (жалғастырушы) болып саналады. 2012 жылы колледждің ережесіне университет Сенаты шешімімен өзгерістер енгізіліп, университет президентінің бұйрығы негізінде аталған соңғы екі заңды тұлғаны жабу туралы шешім қабылданды және 2013 жылы олар заңды түрде жабылды.
        </Text>

        <Text className='text-sm text-black font-bold'>
        «Түркістан Ахмет Ясауи» кәсіби колледжі университеттің №0137408 сериясы АБ мемлекеттік лицензиясына алынған қосымшалар негізінде техникалық және кәсіптік білім берудің келесі мамандықтары бойынша мамандар дайындайды:

        06120100 – “Есептеу техникасы және ақпараттық желілер”,
        06130100 – “Бағдарламалық қамтамасыз ету”,
        04210100 – “Құқықтану”,
        04110100 – “Есеп және аудит”,
        02120200 – “Киім дизайн”,
        08410100 – “Ветеринария”,
        01140500 – “Дене тәрбиесі және спорт”,
        10130300 – “Тамақтандыру ұйымдастыру”,
        07211300 – “Тағам өндірісінің технологиясы”,
        </Text>

        <Text className='text-sm text-black'>
        Түркістан Ахмет Ясауи» кәсіби колледжі Қ.А.Ясауи атындағы ХҚТУ-нің филиалы ретінде 2006 жылы ашылды. Аталған оқу орны ХҚТУ-нің 2001 жылы құрылған «Түркістан» колледжі филиалының және 2006 жылы құрылған «Түркістан Ахмет Ясауи кәсіби колледжі» мекемесінің қызметтерін құқықтық иеленуші (жалғастырушы) болып саналады. 2012 жылы колледждің ережесіне университет Сенаты шешімімен өзгерістер енгізіліп, университет президентінің бұйрығы негізінде аталған соңғы екі заңды тұлғаны жабу туралы шешім қабылданды және 2013 жылы олар заңды түрде жабылды.
        </Text>

        <Text className='text-sm text-black font-bold'>
        Колледж 2011 жылы «Turkish Standards Institution» мекемесінің сапа менеджменті жүйесі сертификатына ие болды.
        </Text>


      </ScrollView>
    </SafeAreaView>
  );
}
