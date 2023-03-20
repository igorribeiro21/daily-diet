import { mealDTO } from './mealDTO';
import { createNewMeal } from './createNewMeal';
import { deleteMeal } from './deleteMeal';

export async function updateMeal(newMeal: mealDTO, oldMeal?: mealDTO) {
    try {
        if (oldMeal)
            await deleteMeal(oldMeal);

        await createNewMeal(newMeal);
    } catch (error) {
        throw error;
    }


}