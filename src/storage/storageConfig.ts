export type Items = {
    name: string;
    active: boolean;
    hour: string;
}

type Item = Items;

export interface Section {
  title: Date;
  data: Item[]
}

export const MEAL_COLLECTION = '@daily-diet:meal';

