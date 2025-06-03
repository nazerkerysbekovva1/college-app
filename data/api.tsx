import axios from 'axios';
import { useEffect } from 'react';

const API_URL = 'http://10.60.6.184:4000/api';

export const fetchData = async (endpoint: string): Promise<any> => {
  const headers: HeadersInit = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  const response = await fetch(`${API_URL}${endpoint}`, {
    method: 'GET',
    headers,
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data;
};

export const postQuestion = async (question: string): Promise<string> => {
  console.log(question);
   try {
    const response = await fetch(`${API_URL}/ask`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });

    if (!response.ok) {
        throw new Error('Желі қатесі');
      }

      const data = await response.json();
      return data.answer; // жауап `answer` түрінде келген жағдайда
    } catch (error) {
    console.error('Сервер қатесі:', error);
    return 'Қате орын алды. Кейінірек қайталап көріңіз.';
  }
};