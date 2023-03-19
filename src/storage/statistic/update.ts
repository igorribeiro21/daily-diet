import AsyncStorage from '@react-native-async-storage/async-storage';
import { STATISTIC_COLLECTION } from '@storage/storageConfig';
import { statisticDTO } from './statisticDTO';

export async function update(statistic: statisticDTO) {
    try {
        await AsyncStorage.setItem(STATISTIC_COLLECTION, JSON.stringify(statistic));
    } catch (error) {
        throw error;
    }
}