import { getAll } from './getAll';
import { Section, MEAL_COLLECTION } from '../storageConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { mealDTO } from './mealDTO';
import moment from 'moment';

export async function createNewMeal(dados: mealDTO) {
    try {        
        let findAll = await getAll();
        
        const findDate = findAll.find(x => {
            let dataA = moment(x.title).format("YYYY-MM-DD");
            let dataB = moment(dados.date).format("YYYY-MM-DD");

            if (dataA === dataB)
                return x;
        });
        
        if (findDate) {
            const findIndex = findAll.findIndex(x => {
                let dataA = moment(x.title).format("YYYY-MM-DD");
                let dataB = moment(dados.date).format("YYYY-MM-DD");

                if (dataA === dataB)
                    return x;
            });
            
            findDate.data.push({
                insideDiet: dados.insideDiet,
                name: dados.name,
                date: dados.date,
                description: dados.description
            });
            
            findDate.data = findDate.data.sort((a, b) => {
                let compare = moment(a.date).isAfter(b.date);
                let compareReturn = 0;

                if (compare)
                    compareReturn = -1;
                else
                    compareReturn = 1;

                return compareReturn
            });

            

                 findAll.splice(findIndex, 1);
                 findAll.push(findDate); 
        } else {
            const items: mealDTO[] = [];
            items.push({
                insideDiet: dados.insideDiet,
                name: dados.name,
                date: dados.date,
                description: dados.description
            });
            
            const obj: Section = {
                title: dados.date,
                data: items
            };

            findAll.push(obj);
        }

        findAll = findAll.sort((a,b) => {
            let compare = moment(a.title).isAfter(b.title);
                let compareReturn = 0;

                if (compare)
                    compareReturn = -1;
                else
                    compareReturn = 1;

                return compareReturn
        });
        
        await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(findAll));
        //await AsyncStorage.setItem(MEAL_COLLECTION,JSON.stringify([]));
    } catch (error) {
        throw error;
    }
}