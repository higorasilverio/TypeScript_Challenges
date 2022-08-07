import { SHOOPING_LIST } from "./ShoppingList";

type ValidType = {
  product: string;
  quantity: number;
};

function fixShoopingList() {
  const organizedShoppingList: ValidType[] = [];

  SHOOPING_LIST.forEach((item) => {
    if (typeof item.quantity !== "number") return;

    const index = organizedShoppingList.findIndex(
      (element) => element.product === item.product
    );

    if (index < 0) {
      organizedShoppingList.push(item as ValidType);
      return;
    }

    organizedShoppingList[index] = {
      product: item.product,
      quantity: organizedShoppingList[index].quantity + item.quantity,
    };
  });

  return organizedShoppingList;
}

console.log(fixShoopingList());
