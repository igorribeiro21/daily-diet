import { StatusBar } from 'expo-status-bar';
import { Home } from '@screens/Home';
import { Statistic } from '@screens/Statistic';
import { NewMeal } from '@screens/NewMeal';
import { Feedback } from '@screens/Feedback';

export default function App() {
  return (
    // <Home />
    <Feedback insideDiet={true}/>
  );
}
