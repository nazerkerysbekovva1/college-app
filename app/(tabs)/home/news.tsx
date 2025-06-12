import { ScrollView, Image, TouchableOpacity, ImageSourcePropType, Text, View,ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Page: {
    title: string;
    date: string;
    description: string;
    image: ImageSourcePropType;
  };
  [key: string]: undefined | object;
};
type NavigationProp = StackNavigationProp<RootStackParamList, 'page'>;

export default function TabNewsScreen() {

  const navigation = useNavigation<NavigationProp>(); // Используем типизированную навигацию

  const handlePress = (title: string, date: string, description: string, image: ImageSourcePropType) => {
    // Переход на Page с передачей данных
    navigation.navigate('page', {
      title,
      date,
      description,
      image,
    });
  };

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <ScrollView className='px-4 gap-4 bg-white'>

      <TouchableOpacity 
          className="flex rounded-lg p-4 shadow-2xl shadow-blue-500/50 bg-white" // Увеличил тень и сделал её более заметной
          onPress={() => handlePress(
            'АЛАШ ҚАЙРАТКЕРІ БЕЙІМБЕТ МАЙЛИННІҢ ТУҒАНЫНА 130 ЖЫЛ',
            '22.11.2024',
            'Қараша айының 15-і күні кітапханашы М.Жумадуллаеваның ұйымдастыруымен кітапханада Б.Майлиннің туғанына 130 жыл толуына орай әдеби шығармаларды экрандау печа – куча өтті.',
            require('../../../assets/images/news/f1.jpg')
          )}
        >
          <Image 
            source={require('../../../assets/images/news/f1.jpg')} 
            style={{ width: '100%', height: 150, borderRadius: 10, marginBottom: 10 }}
          />
          <Text className="text-xl font-bold text-dark-blue">АЛАШ ҚАЙРАТКЕРІ БЕЙІМБЕТ МАЙЛИННІҢ ТУҒАНЫНА 130 ЖЫЛ</Text>
          <Text className='text-sm text-black font-bold'>22.11.2024</Text>
          <Text className='text-sm text-black'>Қараша айының 15-і күні кітапханашы М.Жумадуллаеваның ұйымдастыруымен кітапханада Б.Майлиннің туғанына 130 жыл толуына орай әдеби шығармаларды экрандау печа – куча өтті.</Text>
        </TouchableOpacity>

      <TouchableOpacity 
        className="flex rounded-lg p-4 shadow-2xl shadow-blue-500/50 bg-white"
        onPress={() => handlePress(
          '«ҚАРУ» ЖЕДЕЛ-ПРОФИЛАКТИКАЛЫҚ ІС-ШАРАСЫ ӨТУДЕ',
          '8.06.2025',
          'Түркістан станциясы желілік полиция бөлімінің қызмет ету аумағында, қызметтік және азаматтық қарумен, оның ішінде тіркелмеген атыс қаруымен жасалатын қылмыстардың алдын-алу, сондай-ақ заңсыз айналымдағы қаруларды анықтау, тәркілеу мақсатында 2025 жылдың 2-6 маусым аралығында «ҚАРУ» жедел-профилактикалық іс-шарасы өткізіліп жатыр. Өткізілетін іс-шараның негізгі мақсаты аудан көлемінде заңсыз сақтаудағы қаруды және оқ-дәрілерді тәркілеу, олардың сатып алу көздерін, оны заңсыз жеткізу арналарын анықтау, атыс қаруымен жасалатын қылмыстардың алдын-алу болып табылады. Сонымен қатар, заңсыз қаруды сақтау, алып жүрумен айналысатын тұлғалар мен ұйымдасқан қылмыстық топтарды анықтау, атыс қаруымен жасалатын қылмыстардың алдын-алу, ескерту және оларды ашу болып табылады. Іс-шара кезінде темір жол бойына жақын орналасқан қызметтік және азаматтық қару иелері тексеріліп, аудан аумағында рейдттік тексерулер жүргізілетін болады. Түркістан ст.ЖПБ.',
          require('../../../assets/images/news/f2.png') 
        )}
      >
        <Image 
          source={require('../../../assets/images/news/f2.png')} 
          style={{ width: '100%', height: 150, borderRadius: 10, marginBottom: 10 }}
        />
        <Text className="text-xl font-bold text-dark-blue">«ҚАРУ» ЖЕДЕЛ-ПРОФИЛАКТИКАЛЫҚ ІС-ШАРАСЫ ӨТУДЕ</Text>
        <Text className='text-sm text-black font-bold'>8.06.2025</Text>
        <Text className='text-sm text-black'>
          Түркістан станциясы желілік полиция бөлімінің қызмет ету аумағында, қызметтік және азаматтық қарумен, оның ішінде тіркелмеген атыс қаруымен жасалатын қылмыстардың алдын-алу, сондай-ақ заңсыз айналымдағы қаруларды анықтау...
        </Text>
      </TouchableOpacity>

        <TouchableOpacity 
            className="flex rounded-lg p-4 shadow-2xl shadow-blue-500/50 bg-white"
            onPress={() => handlePress(
              'МЕМЛЕКЕТТІК РӘМІЗДЕР – ҰЛТТЫҚ МАҚТАНЫШЫМЫЗ!',
              '8.06.2025',
              'ҚР Мемлекеттік рәміздер күніне орай барлық топтарда патриоттық тәрбие сағаттары өтті. Оқушылар Мемлекеттік Ту, Елтаңба мен Әнұранның тарихы және маңызы туралы тың мәліметтермен танысып, патриоттық бейнероликтерді тамашалады. Әнұранды жатқа орындап, рәміздердің ерекшеліктері жайлы еркін сұхбат жүргізілді. Бұл шара оқушылардың Отанға деген сүйіспеншілігін арттырып, мемлекеттік рәміздерге деген құрметін тереңдетуге бағытталды.',
              require('../../../assets/images/news/f3.png') // Файлды осы жолмен орналастырыңыз
            )}
          >
            <Image 
              source={require('../../../assets/images/news/f3.png')} 
              style={{ width: '100%', height: 150, borderRadius: 10, marginBottom: 10 }}
            />
            <Text className="text-xl font-bold text-dark-blue">МЕМЛЕКЕТТІК РӘМІЗДЕР – ҰЛТТЫҚ МАҚТАНЫШЫМЫЗ!</Text>
            <Text className='text-sm text-black font-bold'>8.06.2025</Text>
            <Text className='text-sm text-black'>
              ҚР Мемлекеттік рәміздер күніне орай барлық топтарда патриоттық тәрбие сағаттары өтті. Оқушылар Мемлекеттік Ту, Елтаңба мен Әнұранның тарихы және маңызы туралы тың мәліметтермен танысты...
            </Text>
          </TouchableOpacity>


          <TouchableOpacity 
            className="flex rounded-lg p-4 shadow-2xl shadow-blue-500/50 bg-white"
            onPress={() => handlePress(
              'РӘМІЗДЕР КҮНІНЕ АРНАЛҒАН ДӨҢГЕЛЕК ҮСТЕЛ ӨТТІ',
              '8.06.2025',
              'Бүгін еліміздің басты құндылықтарының бірі — Мемлекеттік рәміздер күніне арналған дөңгелек үстел өтті. Шара барысында ҚР Ту, Елтаңба, Әнұранының тарихы мен мәні жайлы айтылып, жастармен рухани тәрбие, патриоттық сезім және ұлттық бірегейлік жайлы ашық пікір алмасу болды. Шараның мақсаты – жас ұрпақтың бойына Отанға деген сүйіспеншілік пен құрметті сіңіру, ұлттық сана-сезімді арттыру. 🇰🇿 Мемлекеттік рәміздер — Тәуелсіздігіміздің нышаны, елдігіміздің айғағы!',
              require('../../../assets/images/news/f4.png') // Сурет файлының жолын нақты көрсетіңіз
            )}
          >
            <Image 
              source={require('../../../assets/images/news/f4.png')} 
              style={{ width: '100%', height: 150, borderRadius: 10, marginBottom: 10 }}
            />
            <Text className="text-xl font-bold text-dark-blue">РӘМІЗДЕР КҮНІНЕ АРНАЛҒАН ДӨҢГЕЛЕК ҮСТЕЛ ӨТТІ</Text>
            <Text className='text-sm text-black font-bold'>8.06.2025</Text>
            <Text className='text-sm text-black'>
              Бүгін еліміздің басты құндылықтарының бірі — Мемлекеттік рәміздер күніне арналған дөңгелек үстел өтті. Шара барысында ҚР Ту, Елтаңба, Әнұранының тарихы мен мәні айтылды...
            </Text>
          </TouchableOpacity>


      </ScrollView>
    </SafeAreaView>
    
  );
}
