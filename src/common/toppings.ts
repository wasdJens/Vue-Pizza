import { Topping } from "@/interfaces/pizza";

export const toppings = [
  {
    name: "Cheese 🧀",
    id: 1
  },
  {
    name: "Tomato sauce 🍎",
    id: 2
  },
  {
    name: "Pepperoni 🌶",
    id: 3
  },
  {
    name: "Onions",
    id: 4
  },
  {
    name: "Sausage",
    id: 5
  },
  {
    name: "Bacon 🥓",
    id: 6
  },
  {
    name: "Black olives",
    id: 7
  },
  {
    name: "Green peppers",
    id: 8
  },
  {
    name: "Extra cheese 🧀",
    id: 9
  },
  {
    name: "Tuna 🐟",
    id: 10
  },
  {
    name: "Pineapple 🍍",
    id: 11
  }
] as Topping[];

export default toppings;

export function getRandomTopping(): Topping {
  const topping = toppings[Math.floor(Math.random() * toppings.length)];
  return topping;
}
