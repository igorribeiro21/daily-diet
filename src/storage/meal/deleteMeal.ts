import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from '@storage/storageConfig';
import moment from 'moment';
import { getAll } from './getAll';
import { mealDTO } from './mealDTO';

export async function deleteMeal(meal: mealDTO) {
    console.log('deleteMeal');
    let findAll = await getAll();

    const findDate = findAll.find(x => {
        let dataA = moment(x.title).format('YYYY-MM-DD');
        let dataB = moment(meal.date).format('YYYY-MM-DD');

        if (dataA === dataB)
            return x;
    });
    console.log('findDate',findDate)
    if (findDate) {
        const findIndex = findAll.findIndex(x => {
            let dataA = moment(x.title).format('YYYY-MM-DD');
            let dataB = moment(meal.date).format('YYYY-MM-DD');

            if (dataA === dataB)
                return x;
        });
        console.log('findIndex',findIndex)
        if (findIndex) {
            const findIndexMeal = findDate.data.findIndex(x =>
                x.date === meal.date &&
                x.description === meal.description &&
                x.insideDiet === meal.insideDiet &&
                x.name === meal.name
            );
            console.log('findIndexMeal',findIndexMeal)
            if(findIndexMeal != -1) {
                findDate.data.splice(findIndexMeal,1);
                console.log('splice findDate',findDate)
            }

            findAll.splice(findIndex, 1);
            console.log('splice findAll',findAll)
            if(findDate.data.length > 0) {
                findAll.push(findDate); 
                console.log('push findAll',findAll)
            }

            await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(findAll));
        }
    }
}