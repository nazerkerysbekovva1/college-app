import { StyleSheet } from 'react-native';

import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Page: {
    name: string;
    position: string;
    image: any;
    email: string;
    facebook: string;
    instagram: string;
    achievements: string[];
  };
  [key: string]: undefined | object;
};
type NavigationProp = StackNavigationProp<RootStackParamList, 'Page'>;


export default function Akimshilik() {

  const navigation = useNavigation<NavigationProp>();

  const handlePress = (
    name: string,
    position: string,
    image: any,
    email: string,
    facebook: string,
    instagram: string,
    achievements: string[]
  ) => {
    navigation.navigate('page', {
      name,
      position,
      image,
      email,
      facebook,
      instagram,
      achievements,
    });
  };


  return (
    <SafeAreaView className='flex-1 bg-white'>
      <ScrollView className='px-4 gap-4 bg-white'>
        
        <TouchableOpacity 
          className="flex flex-row rounded-lg p-4 shadow-2xl shadow-blue-500/50 bg-white"
          onPress={() =>
            handlePress(
              'Кенжалиев Алтынбек Тұрлыбиұлы',
              '"Түркістан Ахмет Ясауи" кәсіби колледжінің директоры',
              require('./../../../assets/images/teachers/director.jpg'),
              'yassaui_kolledj@mail.ru',
              'Алтынбек Кенжалиев',
              'altynbek.kenzhaliyev',
              [
                '2008 жылдан бүгінге дейін «ЖҚТУ-нің жергілікті кәсіподақ комитеті» қоғамдық бірлестігінің төрағасы',
                '2010 жылдан ЖҚТУ-ге қарасты «Түркістан Ахмет Ясауи» кәсіби колледжінің директоры қызметтерін атқарып келеді',
                'Қазақстан Республикасы Білім және Ғылым министрлігінің «Білім саласының құрметті қызметкері» және «Ы.Алтынсарин» төсбелгілерімен марапатталған',
                'Экономика ғылымдарының кандидаты',
                '2016 жылдан Түркістан қалалық мәслихатының депутаты',
              ]
            )
          }
        >
          <View className='items-center mr-2'>
            <Image 
              source={require('./../../../assets/images/teachers/director.jpg')} 
              style={{ width: 115, height: 115, borderRadius: 2 }}
            />
          </View>
          <View className='flex-1 justify-center'>
            <Text className="text-base font-bold text-dark-blue mb-2">Кенжалиев Алтынбек Тұрлыбиұлы</Text>
            <Text className='text-sm text-black'>"Түркістан Ахмет Ясауи" кәсіби колледжінің директоры</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex flex-row rounded-lg p-4 shadow-2xl shadow-blue-500/50 bg-white"
          onPress={() =>
            handlePress(
              'Даурен Еркебалаев',
              'Директордың оқу жұмысы жөніндегі орынбасары',
              require('./../../../assets/images/teachers/dauren.jpg'),
              'dauren_717@mail.ru',
              'Еркебалаев Даурен',
              'dauren_yerkebalayev',
              [
                '1988 жылы 27 қазанда Түркістан қаласында туылған',
                '2006 жылы Түркістан қаласындағы Қ.А.Ясауи атындағы Халықаралық Қазақ-Түрік университетінің экономика факультетіне оқуға түсіп, 2010 жылы менеджмент мамандығы бойынша үздік дипломмен бітірген',
                '2011-2012 жылдары Түркістан қаласындағы Қ.А.Ясауи атындағы Халықаралық Қазақ-Түрік университетінің экономика факультетінің менеджмент мамандығы бойынша магистратурада оқыды',
                '2010-2011 жылдар аралығында Қазақстан және Түркия іскер адамдар қауымдастығында менеджер',
                '2012-2017 жылдар аралығында «Түркістан Ахмет Ясауи» кәсіби колледжінде мұғалім, тәжірибе жетекшісі, жастар ұйымының төрағасы қызметтерін атқарған',
                '2017- 2018 жылдар аралығында «Азаматтарға арналған үкімет» КЕАҚ маман қызметін атқарған',
                '2018-2019 жылдар аралығында «АТФ Банк» АҚ-да менеджер қызметін атқарған',
                '2019-2022 жж директордың оқу өндірістік жұмысы жөніндегі орынбасары қызметін атқарған',
                '2022 жылдан бастап директордың оқу жұмысы жөніндегі орынбасары қызметін атқарып келеді'
              ]
            )
          }
        >
          <View className='items-center mr-2'>
            <Image 
              source={require('./../../../assets/images/teachers/dauren.jpg')} 
              style={{ width: 115, height: 115, borderRadius: 2 }}
            />
          </View>
          <View className='flex-1 justify-center'>
            <Text className="text-base font-bold text-dark-blue mb-2">Даурен Еркебалаев</Text>
            <Text className='text-sm text-black'>Директордың оқу жұмысы жөніндегі орынбасары</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex flex-row rounded-lg p-4 shadow-2xl shadow-blue-500/50 bg-white"
          onPress={() =>
            handlePress(
              'Жақыпбеков Бақытбек',
              'Оқу өндірістік жұмысы жөніндегі орынбасары',
              require('./../../../assets/images/teachers/baqytbek.jpg'),
              'baken_1966@mail.ru',
              'Бақытбек Жақыпбеков',
              'bakytbekzhakypbekov',
              [
                '1966 жылы 31 шілдеде Жаңақорған ауданы, Кейден ауылында туылған',
                '1996 жылы Шымкент қаласындағы Қ.А.Ясауи атындағы Халықаралық Қазақ-Түрік университетінің бөлімшесіне оқуға түсіп, 2001 жылы «Тарих және география» мамандығы бойынша бітірген',
                '1989 жылдан бастап Жаңақорған ауданы, Кейден ауылындағы №208 орта мектебінің оқытушысы және 2001 жылдан бастап директордың тәрбие жұмысы жөніндегі орынбасары болып қызмет атқарған',
                '2009-2022 жж бастап ХҚТУ-ге қарасты «Түркістан Ахмет Ясауи» кәсіби колледжі директорының тәрбие жұмысы жөніндегі орынбасары қызметін атқарған',
                '2022 жылдың қыркүйек айынан бастап ХҚТУ-ге қарасты «Түркістан Ахмет Ясауи» кәсіби колледжі директордың оқу өндірістік жұмысы жөніндегі орынбасары қызметін атқарып келеді',
              ]
            )
          }
        >
          <View className='items-center mr-2'>
            <Image 
              source={require('./../../../assets/images/teachers/baqytbek.jpg')} 
              style={{ width: 115, height: 115, borderRadius: 2 }}
            />
          </View>
          <View className='flex-1 justify-center'>
            <Text className="text-base font-bold text-dark-blue mb-2">Жақыпбеков Бақытбек</Text>
            <Text className='text-sm text-black'>Оқу өндірістік жұмысы жөніндегі орынбасары</Text>
          </View>
        </TouchableOpacity>

          <TouchableOpacity 
          className="flex flex-row rounded-lg p-4 shadow-2xl shadow-blue-500/50 bg-white"
          onPress={() =>
            handlePress(
              'Шохан Надирбаев',
              'Тәрбие жұмысы жөніндегі орынбасары',
              require('./../../../assets/images/teachers/shokan.jpg'),
              'tore-89-89@mail.ru',
              'Шохан Надырбаев',
              'abilay03122016',
              [
                '1989 жылы 04 қаңтарда Сауран ауданы, Шекербұлақ ауылында туылған',
                '2014 жылы Шымкент қаласындағы Аймақтық әлеуметтік-инновациялық университетінің Спорт бөлімшесіне оқуға түсіп, 2018 жылы «Дене шынықтыру және спорт» мамандығы бойынша бітірген',
                '2018 - 2022 оқу жылдарында ХҚТУ-ге қарасты «Түркістан Ахмет Ясауи» кәсіби колледжінің Дене шынықтыру пәні мұғалімі қызметін атқарды',
                '2022 жылдың қыркүйек айынан бастап, директорының тәрбие жұмысы жөніндегі орынбасары қызметін атқаруда'
              ]
            )
          }
        >
          <View className='items-center mr-2'>
            <Image 
              source={require('./../../../assets/images/teachers/shokan.jpg')} 
              style={{ width: 115, height: 115, borderRadius: 2 }}
            />
          </View>
          <View className='flex-1 justify-center'>
            <Text className="text-base font-bold text-dark-blue mb-2">Шохан Надирбаев</Text>
            <Text className='text-sm text-black'>Тәрбие жұмысы жөніндегі орынбасары</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex flex-row rounded-lg p-4 shadow-2xl shadow-blue-500/50 bg-white"
          onPress={() =>
            handlePress(
              'Сұлтанбек Балауса Әбуқызы',
              'Кадр бөлімінің меңгерушісі',
              require('./../../../assets/images/teachers/balausa.jpg'),
              'sultanbek.balausa@bk.ru',
              'Сұлтанбек Балауса',
              'bono_belle',
              [
                '1995 жылы 11 мамырда Түркістан қаласында туылған',
                '2012 жылы Астана қаласындағы М.С.Нәрікбаев атындағы Қазақ Гуманитарлық заң университетінің «Халықаралық құқық» мамандығына түсіп, 2016 жылы бітірген',
                '2016 жылы Аймақтық әлеуметтік-инновациялық университетінің «Құқықтану» мамандығының магистратурасына түсіп, 2018 жылы «заң ғылымдарының магистрі» дәрежесін алды',
                '2016 жылы ҚР Әділет министрілігінің «Тіркеу қызметі және заң көмегін көрсету департаментінде» сарапшы қызметін атқарды',
                '2017-2021 жылдар «Түркістан Ахмет Ясауи» кәсіби колледжіне құқықтану мамандығы бойынша оқытушы болған',
                '2021 жылдан бүгінгі күнге дейін кадрлар бөлімінің меңгерушісі қызметін атқарып келеді'
              ]
            )
          }
        >
          <View className='items-center mr-2'>
            <Image 
              source={require('./../../../assets/images/teachers/balausa.jpg')} 
              style={{ width: 115, height: 115, borderRadius: 2 }}
            />
          </View>
          <View className='flex-1 justify-center'>
            <Text className="text-base font-bold text-dark-blue mb-2">Сұлтанбек Балауса Әбуқызы</Text>
            <Text className='text-sm text-black'>Кадр бөлімінің меңгерушісі</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex flex-row rounded-lg p-4 shadow-2xl shadow-blue-500/50 bg-white"
          onPress={() =>
            handlePress(
              'Замальдинов Наиль Зиядинұлы',
              'Шаруашылық бөлімінің меңгерушісі',
              require('./../../../assets/images/teachers/naul.jpg'),
              'nailzamaldinov@mail.ru',
              'Замальдинов Наиль',
              ' ',
              [
                '1968 жылы 15 қыркүйекте Түркістан қаласында туылған',
                '1993-1998 жылы Қожа Ахмет Ясауи атындағы Халықаралық Қазақ-Түрік университетін «Инженер эколог» мамандығы бойынша бітірген',
                '2010 жылдан бастап ХҚТУ-ге қарасты «Түркістан Ахмет Ясауи» кәсіби колледжінің шаруашылық бөлімінің меңгерушісі қызметін атқарып келеді'
              ]
            )
          }
        >
          <View className='items-center mr-2'>
            <Image 
              source={require('./../../../assets/images/teachers/naul.jpg')} 
              style={{ width: 115, height: 115, borderRadius: 2 }}
            />
          </View>
          <View className='flex-1 justify-center'>
            <Text className="text-base font-bold text-dark-blue mb-2">Замальдинов Наиль Зиядинұлы</Text>
            <Text className='text-sm text-black'>Шаруашылық бөлімінің меңгерушісі</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity 
          className="flex flex-row rounded-lg p-4 shadow-2xl shadow-blue-500/50 bg-white mb-20"
          onPress={() =>
            handlePress(
              'Дүйсенбай Фариза Мұхтарқызы',
              '«Түркістан Ахмет Ясауи» кәсіби колледжінің әдіскері',
              require('./../../../assets/images/teachers/fariza.jpeg'),
              'fduisenbai@mail.ru',
              'Дүйсенбай Фариза',
              'farizash__',
              [
                '1998 жылы Жаңақорған ауданында туылған',
                '2016-2020 жж. Қожа Ахмет Ясауи атындағы Халықаралық қазақ-түрік университетінде «5В011100-Информатика» мамандығы бойынша бакалавр 2020-2022жж. «7М01557-Информатика» мамандығы бойынша оқып, педагогикалық ғылымдар магистрі атанды',
                '2023 жылы «Педагог-модератор» санатына өтті',
                '2024 жылы Түркістан облысы, Білім беруді дамыту орталығының директоры Б.Төлімбеттің алғыс хатымен марапатталды',
                '2020 жылдан «Түркістан Ахмет Ясауи» кәсіби колледжінде арнайы пәндер оқытушысы және әдіскер қызметін атқаруда',
                '2021-2022 және 2022-2023 оқу жылдарында "Мобильді қосымшаларды құру" құзыреттілігі бойынша Worldskills облыстық чемпионатына студент дайындап жүлделі 3 орынды иеленді'
              ]
            )
          }
        >
          <View className='items-center mr-2'>
            <Image 
              source={require('./../../../assets/images/teachers/fariza.jpeg')} 
              style={{ width: 115, height: 115, borderRadius: 2 }}
            />
          </View>
          <View className='flex-1 justify-center'>
            <Text className="text-base font-bold text-dark-blue mb-2">Дүйсенбай Фариза Мұхтарқызы</Text>
            <Text className='text-sm text-black'>«Түркістан Ахмет Ясауи» кәсіби колледжінің әдіскері</Text>
          </View>
        </TouchableOpacity>
        

      </ScrollView>
    </SafeAreaView>
    
  );
}