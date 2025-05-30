import axios from 'axios';
import { useEffect } from 'react';

// const API_URL = 'http://192.168.172.105:4000/api';

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