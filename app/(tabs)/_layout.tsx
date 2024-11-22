import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import { Text } from '@/components/Themed';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
  size?: number; // Добавлено для передачи размера
}) {
  return <FontAwesome size={props.size ?? 28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false, // По умолчанию скрываем заголовок для всех вкладок
      }}
    >
      {/* Tab 1 */}
      <Tabs.Screen
        name="home"
        options={{
          headerShown: true, // Показать заголовок только для первой вкладки
          headerTitle: () => (
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: Colors.light.text }}>
              «Түркістан Ахмет Ясауи» кәсіби колледжі
            </Text>
          ),
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} size={25} />, // Установка размера иконки
          tabBarLabel: 'Басты', // Изменение текста в нижнем меню
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />

      {/* Tab 2 */}
      <Tabs.Screen
        name="teachers"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} size={25} />, // Установка размера иконки
          tabBarLabel: 'Оқытушылар', // Изменение текста в нижнем меню
        }}
      />

      {/* Tab 3 */}
      <Tabs.Screen
        name="chat"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="send" color={color} size={22} />, // Установка размера иконки
          tabBarLabel: 'Чат', // Изменение текста в нижнем меню
        }}
      />

      {/* Tab 4 */}
      <Tabs.Screen
        name="info"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="info" color={color} size={25} />, // Установка размера иконки
          tabBarLabel: 'Ақпарат', // Изменение текста в нижнем меню
        }}
      />
    </Tabs>
  );
}
