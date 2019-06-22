export default interface Pizza {
  id: number;
  name: string;
  toppings: Topping[];
}

export interface Topping {
  name: string;
  id: number;
}
