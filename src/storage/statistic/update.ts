import AsyncStorage from '@react-native-async-storage/async-storage';
import { STATISTIC_COLLECTION } from '@storage/storageConfig';
import { statisticDTO } from './statisticDTO';

export async function update(statistic: statisticDTO) {
    try {
        const newStatistic: statisticDTO = {
            mealInside: 0,
            mealNotInside: 0,
            porcentage: 0,
            sequence: 0,
            total: 0
        }
        await AsyncStorage.setItem(STATISTIC_COLLECTION, JSON.stringify(statistic));
        //await AsyncStorage.setItem(STATISTIC_COLLECTION, JSON.stringify(newStatistic));
    } catch (error) {
        throw error;
    }
}