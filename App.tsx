import { StatusBar } from 'expo-status-bar';
import { Home } from '@screens/Home';
import { Statistic } from '@screens/Statistic';
import { EditAndNewMeal } from '@screens/EditAndNewMeal';
import { Feedback } from '@screens/Feedback';
import { Meal } from '@screens/Meal';

export default function App() {
  return (
     <Meal insideDiet={false} />
    // <EditAndNewMeal edit={false} />
  );
}
