import React, { useState, useRef, useEffect } from 'react';
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { postQuestion } from '@/data/api';

export default function Chat1() {
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);

  const [mode, setMode] = useState<'none' | 'group' | 'auditorium' | 'teacher'>('none');
  const [step, setStep] = useState<number>(0);
  const [input, setInput] = useState('');
  const [shift, setShift] = useState('');
  const [day, setDay] = useState('');
  const [group, setGroup] = useState('ИС-23-1');
  const [auditorium, setAuditorium] = useState('101');
  const [teacher, setTeacher] = useState('Айгүл Төлегенқызы');

  const daysOfWeek = ['Дүйсенбі', 'Сейсенбі', 'Сәрсенбі', 'Бейсенбі', 'Жұма', 'Сенбі', 'Жексенбі'];
  const auditoriums = ['101', '202', '305', 'Акт залы'];

  const [chat, setChat] = useState<{ sender: 'user' | 'bot'; message: string }[]>([]);

  const reset = () => {
    setStep(0);
    setShift('');
    setDay('');
    setGroup('');
    setAuditorium('');
    setTeacher('');
    setInput('');
  };

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [step, shift, day, group, auditorium, teacher, chat]);

  const renderBotMessage = (text: string) => (
    <View className="flex-row items-start space-x-2 max-w-[80%] mb-2">
      <FontAwesome name="user-circle" size={32} color="gray" />
      <View className="bg-gray-100 p-3 rounded-xl">
        <Text className="text-sm text-black">{text}</Text>
      </View>
    </View>
  );

  const renderUserMessage = (text: string) => (
    <View className="flex-row justify-end items-start space-x-2 self-end max-w-[80%] mb-2">
      <View className="bg-blue-500 p-3 rounded-xl">
        <Text className="text-sm text-white">{text}</Text>
      </View>
      <FontAwesome name="user-circle" size={28} color="gray" />
    </View>
  );

  const renderBotOptions = (options: string[], onSelect: (val: string) => void) => (
    <View className="flex-row flex-wrap gap-2 mb-2 max-w-full">
      {options.map((opt, idx) => (
        <TouchableOpacity
          key={idx}
          onPress={() => onSelect(opt)}
          className="bg-blue-100 px-4 py-2 rounded-xl"
        >
          <Text className="text-sm text-black">{opt}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderBackButton = () => (
    <TouchableOpacity onPress={() => {
      if (step > 0) setStep(step - 1);
      else {
        setMode('none');
        reset();
      }
    }} className="border border-gray-400 mt-4 p-2 rounded">
      <Text className="text-center text-gray-600">← Артқа қайту</Text>
    </TouchableOpacity>
  );

  const renderMainMenu = () => (
    <View>
      {renderBotMessage('Режимді таңдаңыз:')}
      {renderBotOptions([
        'Топ бойынша',
        'Аудитория бойынша',
        'Оқытушы бойынша'
      ], (opt) => {
        reset();
        if (opt === 'Топ бойынша') setMode('group');
        if (opt === 'Аудитория бойынша') setMode('auditorium');
        if (opt === 'Оқытушы бойынша') setMode('teacher');
      })}
    </View>
  );

  const renderGroupMode = () => (
    <View className="space-y-2">
      {step === 0 && (
        <>
          {renderBotMessage('Ауысым таңдаңыз:')}
          {renderBotOptions(['Азанғы', 'Түскі'], (val) => {
            setShift(val);
            setStep(1);
          })}
        </>
      )}
      {step === 1 && (
        <>
          {renderBotMessage('Күнді таңдаңыз:')}
          {renderBotOptions(daysOfWeek, (val) => {
            setDay(val);
            setStep(2);
          })}
        </>
      )}
      {step === 2 && (
        <>
          {renderBotMessage('Топтың атын енгізіңіз:')}
        </>
      )}
      {renderBackButton()}
    </View>
  );

  const renderAuditoriumMode = () => (
    <View className="space-y-2">
      {step === 0 && (
        <>
          {renderBotMessage('Аудитория таңдаңыз:')}
          {renderBotOptions(auditoriums, (val) => {
            setAuditorium(val);
            setStep(1);
            const msg = `${val} аудиториясында қандай сабақтар өтеді?`;
            setChat((prev) => [...prev, { sender: 'user', message: msg }]);
            postQuestion(msg).then(res =>
              setChat((prev) => [...prev, { sender: 'bot', message: res }])
            );
          })}
        </>
      )}
      {renderBackButton()}
    </View>
  );

  const renderTeacherMode = () => (
    <View className="space-y-2">
      {step === 0 && (
        <>
          {renderBotMessage('Оқытушының аты-жөнін енгізіңіз:')}
        </>
      )}
      {renderBackButton()}
    </View>
  );

  const handleSubmit = async () => {
    const questionToSend = input.trim();
    if (!questionToSend) return;

    if (mode === 'group' && step === 2) {
      setGroup(questionToSend);
      setStep(3);
      const msg = `${day} күні ${questionToSend} тобының (${shift}) сабақтары қандай?`;
      setChat((prev) => [...prev, { sender: 'user', message: msg }]);
      const botResponse = await postQuestion(msg);
      setChat((prev) => [...prev, { sender: 'bot', message: botResponse }]);
      setInput('');
      return;
    }

    if (mode === 'teacher' && step === 0) {
      setTeacher(questionToSend);
      setStep(1);
      const msg = `${questionToSend} оқытушысының сабақтары қандай?`;
      setChat((prev) => [...prev, { sender: 'user', message: msg }]);
      const botResponse = await postQuestion(msg);
      setChat((prev) => [...prev, { sender: 'bot', message: botResponse }]);
      setInput('');
      return;
    }

    if (mode === 'none') {
      setChat((prev) => [...prev, { sender: 'user', message: questionToSend }]);
      setInput('');
      const botResponse = await postQuestion(questionToSend);
      setChat((prev) => [...prev, { sender: 'bot', message: botResponse }]);
    }
  };

  const inputEnabled =
    (mode === 'group' && step === 2) ||
    (mode === 'teacher' && step === 0) ||
    mode === 'none';

  return (
    <SafeAreaView className="flex-1 bg-white px-4">
      <View className="py-2 items-center flex-row gap-4">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={15} color="black" />
        </TouchableOpacity>
        <Text className="text-sm text-black">Назад</Text>
      </View>

      {/* <View className="items-center mt-4">
        <View className="w-24 h-24 bg-gray-200 rounded-full items-center justify-center">
          <FontAwesome name="user-circle" size={50} color="gray" />
        </View>
        <Text className="mt-4 text-lg font-semibold text-gray-800">Қайырлы күн!</Text>
      </View> */}

      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end', paddingBottom: 147 }}
        onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
      >
        {chat.map((msg, idx) =>
          msg.sender === 'user'
            ? renderUserMessage(msg.message)
            : renderBotMessage(msg.message)
        )}
        {mode === 'none' && renderMainMenu()}
        {mode === 'group' && renderGroupMode()}
        {mode === 'auditorium' && renderAuditoriumMode()}
        {mode === 'teacher' && renderTeacherMode()}
      </ScrollView>

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View className="flex-row items-center pb-2 bg-white mb-18 absolute bottom-0">
          <TextInput
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-base"
            placeholder="Сұрақ жазыңыз..."
            value={input}
            onChangeText={setInput}
            onSubmitEditing={handleSubmit}
            editable={inputEnabled}
          />
          <TouchableOpacity
            onPress={handleSubmit}
            className={`ml-2 p-3 rounded-full ${inputEnabled ? 'bg-blue-900' : 'bg-gray-400'}`}
            disabled={!inputEnabled}
          >
            <FontAwesome name="send" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
