/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const obj = {};
  for (const transaction of transactions) {
    if (obj[transaction.category] !== undefined) {
      obj[transaction.category] += transaction.price;
    } else {
      obj[transaction.category] = transaction.price;
    }
  }
  let result = [];
  for (const prop in obj) {
    if (Object.hasOwnProperty.call(obj, prop)) {
      result.push({
        category: prop,
        totalSpent: obj[prop]
      });
    }
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
