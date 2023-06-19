//Goal: calculate the final price of a product
// condition ? output : (another condition ? second output : (final output))
let originalPrice = 50;

let discountedPrice =
  originalPrice <= 50
    ? (10 / 100) * originalPrice
    : originalPrice > 50 && originalPrice <= 100
    ? (20 / 100) * originalPrice
    : (30 / 100) * originalPrice;

let finalPrice = originalPrice - discountedPrice;

console.log(
  "Final price is " +
    finalPrice +
    " with discounted price of " +
    discountedPrice
);
