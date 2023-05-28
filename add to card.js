const current_cards = [
  { id: 1, quantity: 1 },
  { id: 2, quantity: 1 },
  { id: 3, quantity: 1 },
];

const product = { id: 10, quantity: 2 };

const apiProduct = [
  { id: 1, name: "Product1" },
  { id: 2, name: "Product2" },
  { id: 3, name: "Product3" },
  { id: 4, name: "Product4" },
];

const addProducts = () => {
  let returnResult = current_cards.find((el) => el.id === product.id);
  return returnResult;
};

const changeQuantity = () => {
  return current_cards.map((el) => {
    el.id === product.id ? (el.quantity += product.quantity) : el;
  });
};
addProducts() ? console.log(true) : console.log(false);

(() => {
  if (addProducts()) {
    return changeQuantity();
  } else {
    return current_cards.push(product);
  }
})();

(() => {
  current_cards.forEach((el) => {
    apiProduct.forEach((elment) => {
      if (elment.id === el.id) {
        el.name = elment.name;
      }
    });
  });
})();
console.log(current_cards);
