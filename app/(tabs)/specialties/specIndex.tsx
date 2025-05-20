import React from 'react';
import { Text, View, ScrollView, ImageBackground, SafeAreaView, TouchableOpacity } from 'react-native';

export default function TabSpecialtiesScreen() {
  const specialties = [
    {
      id: '06120100',
      name: 'Есептеу техникасы және ақпараттық желілер',
      subSpecialties: [
        { id: '3W06120101', name: 'Компьютерлік ақпараттық қамтамасыз ету операторы' },
      ],
    },
    {
      id: '06130100',
      name: 'Бағдарламалық қамтамасыз ету',
      subSpecialties: [
        { id: '3W06130102', name: 'Web-дизайнер' },
        { id: '4S06130103', name: 'Бағдарламалық қамтамасыздандыруды құрастырушы' },
      ],
    },
    {
      id: '0201000',
      name: 'Құқықтану',
      subSpecialties: [
        { id: '4S04210101', name: 'Заңгер' },
      ],
    },
    {
      id: '04110100',
      name: 'Есеп және аудит',
      subSpecialties: [
        { id: '4S04110102', name: 'Бухгалтер' },
      ],
    },
    {
      id: '02120200',
      name: 'Киім дизайн',
      subSpecialties: [
        { id: '4S02120203', name: 'Киім дизайнері' },
      ],
    },
    {
      id: '08410100',
      name: 'Ветеринария',
      subSpecialties: [
        { id: '4S08410104', name: 'Ветеринариялық техник' },
        { id: '4S08410105', name: 'Ветеринариялық фельдшер' },
      ],
    },
    {
      id: '01140500',
      name: 'Дене тәрбиесі және спорт',
      subSpecialties: [
        { id: '4S01140503', name: 'Спорт жаттықтырушысы, оқытушы' },
      ],
    },
    {
      id: '10130300',
      name: 'Тамақтандыру ұйымдастыру',
      subSpecialties: [
        { id: '3W10130302', name: 'Аспазшы' },
      ],
    },
    {
      id: '07211300',
      name: 'Тағам өндірісінің технологиясы',
      subSpecialties: [
        { id: '4S07211303', name: 'Техник - технолог' },
      ],
    },
  ];

  return (
    <ImageBackground
      source={require('../../../assets/images/spec/etb.png')} // Replace with your background image
      className="flex-1"
      resizeMode="cover"
    >
      <SafeAreaView className="flex-1 px-4 pt-10">
        <ScrollView >
        {specialties.map((specialty) => (
          <TouchableOpacity key={specialty.id} className="bg-white/90 px-4 py-2 mb-4 rounded-lg shadow-md">
            <Text className="text-base font-bold text-dark-blue">
              {specialty.id} - {specialty.name}
            </Text>
            {specialty.subSpecialties.map((sub) => (
              <Text key={sub.id} className="text-base text-gray-600 ml-2 mt-2">
                • {sub.id} - {sub.name}
              </Text>
            ))}
          </TouchableOpacity>
        ))}
      </ScrollView>
      </SafeAreaView>
      
    </ImageBackground>
  );
}
