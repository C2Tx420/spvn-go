import { Redirect } from 'expo-router';

export default function Index() {
  const user = 'aaa';
  if (user) {
    return <Redirect href={'/dashboard'} />
  } else {
    return <Redirect href={'/login'} />
  }
}
