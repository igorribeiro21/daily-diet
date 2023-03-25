import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from '@storage/storageConfig';
import moment from 'moment';
import { getAll } from './getAll';
import { mealDTO } from './mealDTO';

export async function deleteMeal(meal: mealDTO) {
    let findAll = await getAll();

    const findDate = findAll.find(x => {
        let dataA = moment(x.title).format('YYYY-MM-DD');
        let dataB = moment(meal.date).format('YYYY-MM-DD');

        if (dataA === dataB)
            return x;
    });
    
    if (findDate) {
        const findIndex = findAll.findIndex(x => {
            let dataA = moment(x.title).format('YYYY-MM-DD');
            let dataB = moment(meal.date).format('YYYY-MM-DD');

            if (dataA === dataB)
                return x;
        });
        
        if (findIndex != -1) {
            const findIndexMeal = findDate.data.findIndex(x =>
                x.date === meal.date &&
                x.description === meal.description &&
                x.insideDiet === meal.insideDiet &&
                x.name === meal.name
            );
            
            if(findIndexMeal != -1) {
                findDate.data.splice(findIndexMeal,1);
            }

            findAll.splice(findIndex, 1);
            
            if(findDate.data.length > 0) {
                findAll.push(findDate); 
            }

            await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(findAll));
        }
    }
}