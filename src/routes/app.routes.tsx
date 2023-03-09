import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EditAndNewMeal } from '@screens/EditAndNewMeal';
import { Feedback } from '@screens/Feedback';
import { Home } from '@screens/Home';
import { Meal } from '@screens/Meal';
import { Statistic } from '@screens/Statistic';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen 
                name='home'
                component={Home}
            />

            <Screen 
                name='editAndNewMeal'
                component={EditAndNewMeal}
            />

            <Screen 
                name='feedback'
                component={Feedback}
            />

            <Screen 
                name='meal'
                component={Meal}
            />

            <Screen 
                name='statistic'
                component={Statistic}
            />
        </Navigator>
    );
}