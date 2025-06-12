import { Redirect } from 'expo-router';

export default function IndexRedirect() {
    // Перенаправляем пользователя на /home
    return <Redirect href="/home/homeIndex" />;
}
