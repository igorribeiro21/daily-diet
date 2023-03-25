import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION, Section } from "../storageConfig";

export async function getAll() {
    try{
        const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

        const items: Section[] = storage ? JSON.parse(storage) : []; 
 
        return items;
    }catch(error) {
        throw error;
    }
}