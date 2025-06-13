// Handles the change in product quantity (increase or decrease)
function handleProductChange(product, isIncreased) {
  // Log the product and whether it's being increased or decreased
  console.log(product, isIncreased);
  // Get the input element for the product count
  const productInput = document.getElementById(product + "-count");
  // Parse the current product count from the input value
  const productCount = parseInt(productInput.value);

  // Initialize new product count with the current count
  let newProductCount = productCount;

  // If the quantity is being increased, increment the count
  if (isIncreased == true) {
    newProductCount = productCount + 1;
  }

  // If the quantity is being decreased and is greater than 1, decrement the count
  if (isIncreased == false && productCount > 1) {
    newProductCount = productCount - 1;
  }

  // Update the input value with the new product count
  productInput.value = newProductCount;

  // Declare variable for the total price of the product
  let productTotal;
  // Calculate total for laptop
  if (product == "laptop") {
    productTotal = newProductCount * 1400;
  }
  // Calculate total for phone
  if (product == "phone") {
    productTotal = newProductCount * 1000;
  }
  // Calculate total for headphone
  if (product == "headphone") {
    productTotal = newProductCount * 250;
  }

  // Update the product total in the DOM
  document.getElementById(product + "-total").innerText = productTotal;

  // Update the checkout summary
  handleCheckOut();
}

// Handles the calculation and update of checkout totals
function handleCheckOut() {
  // Get the count of laptops
  const laptopCount = getItems("laptop");
  // Get the count of headphones
  const headphoneCount = getItems("headphone");
  // Get the count of phones
  const phoneCount = getItems("phone");
  // Calculate the total price for all products
  const totalPrice =
    laptopCount * 1400 + headphoneCount * 250 + phoneCount * 1000;
  // Get the subtotal element
  const subTotalElem = document.getElementById("sub-total");
  // If the subtotal element exists, update its value
  if (subTotalElem) subTotalElem.innerText = totalPrice;
  // Calculate the tax (rounded)
  const tax = Math.round(totalPrice * 0.0635);
  // Get the tax element
  const taxElem = document.getElementById("tax-amount");
  // If the tax element exists, update its value
  if (taxElem) taxElem.innerText = tax;

  // Calculate the grand total (total price + tax)
  const grandTotal = totalPrice + tax;
  // Get the grand total element
  const grandTotalElem = document.getElementById("grand-amount");
  // If the grand total element exists, update its value
  if (grandTotalElem) grandTotalElem.innerText = grandTotal;
}

// Gets the count of a specific product from the DOM
function getItems(product) {
  // Get the input element for the product count
  const productInput = document.getElementById(product + "-count");
  // Parse and return the product count
  const productCount = parseInt(productInput.value);
  return productCount;
}
