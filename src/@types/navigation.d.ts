import { mealDTO } from "@storage/mealDTO";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            editAndNewMeal: {
                edit: boolean;
                meal?: mealDTO
            };
            feedback: {
                insideDiet: boolean;
            };
            meal: {
                meal: mealDTO
            };
            statistic: undefined;
        } 
    }
}