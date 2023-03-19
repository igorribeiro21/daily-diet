import AsyncStorage from '@react-native-async-storage/async-storage';
import { STATISTIC_COLLECTION } from '@storage/storageConfig';
import { statisticDTO } from './statisticDTO';

export async function getAll() {
    try {
        const storage = await AsyncStorage.getItem(STATISTIC_COLLECTION);

        const statistic: statisticDTO = storage ? JSON.parse(storage) : {};

        return statistic;
    }
    catch(error) {
        throw error;
    }
}