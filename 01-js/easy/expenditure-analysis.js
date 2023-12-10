/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
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
