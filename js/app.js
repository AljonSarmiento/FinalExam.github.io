// Cache DOM elements
let carts = document.getElementById("carts");
let total = document.getElementById("total");
let cash = document.getElementById("cash");
let change = document.getElementById("change");
let name = document.getElementById("name");
let address = document.getElementById("address");

// Product data (Name, Price, Quantity input elements)
let products = [
    { name: "Ninja 400", price: parseFloat(document.getElementById("productPrice1").textContent), quantityInput: document.getElementById("productQuantity1") },
    { name: "Ninja 500", price: parseFloat(document.getElementById("productPrice2").textContent), quantityInput: document.getElementById("productQuantity2") },
    { name: "Product 3", price: parseFloat(document.getElementById("productPrice3").textContent), quantityInput: document.getElementById("productQuantity3") },
    { name: "Product 4", price: parseFloat(document.getElementById("productPrice4").textContent), quantityInput: document.getElementById("productQuantity4") },
    { name: "Product 5", price: parseFloat(document.getElementById("productPrice5").textContent), quantityInput: document.getElementById("productQuantity5") },
    { name: "Product 6", price: parseFloat(document.getElementById("productPrice6").textContent), quantityInput: document.getElementById("productQuantity6") },
    { name: "Product 7", price: parseFloat(document.getElementById("productPrice7").textContent), quantityInput: document.getElementById("productQuantity7") },
    { name: "Product 8", price: parseFloat(document.getElementById("productPrice8").textContent), quantityInput: document.getElementById("productQuantity8") },
    { name: "Product 9", price: parseFloat(document.getElementById("productPrice9").textContent), quantityInput: document.getElementById("productQuantity9") }
];

// Helper function to add order
function addOrder() {
    carts.textContent = ""; // Clear previous cart contents
    let totalPrice = 0;

    products.forEach(product => {
        let quantity = parseFloat(product.quantityInput.value);
        if (quantity > 0) {
            let order = `${product.name} ${quantity}pc/s - ₱${(quantity * product.price).toFixed(2)}\n`;
            carts.textContent += order;
            totalPrice += quantity * product.price;
        }
    });

    total.value = '₱ ' + totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    calculateChange();
}

// Function to calculate change
function calculateChange() {
    let totalPrice = parseFloat(total.value.replace('₱ ', '').replace(/,/g, ''));
    let cashTendered = parseFloat(cash.value);

    if (cashTendered >= totalPrice) {
        let changeAmount = cashTendered - totalPrice;
        change.value = '₱ ' + changeAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
}

// Display receipt function
function displayReceipt() {
    if (carts.value.trim() === '') {
        alert("No orders found. Please add items to your cart.");
        return;
    }
    if (change.value !== '₱ 0.00') {
        let receipt = "Receipt:\n\n";
        receipt += carts.value;
        receipt += "\nTotal: " + total.value;
        receipt += "\nCash Tendered: ₱ " + cash.value;
        receipt += "\nChange: " + change.value;
        receipt += "\n\nThank you for your purchase, " + name.value + "!";
        receipt += "\nWe will ship to: " + address.value + "!";

        alert(receipt);

        // Reset all values
        carts.textContent = "";
        total.value = '';
        cash.value = '';
        change.value = '';
        name.value = '';
        address.value = '';

        products.forEach(product => {
            product.quantityInput.value = '';
        });
    } else {
        alert("Please enter cash amount");
    }
}

// Event listeners for quantity changes and checkout
products.forEach(product => {
    product.quantityInput.addEventListener("keyup", addOrder);
    product.quantityInput.addEventListener("click", addOrder);
});

cash.addEventListener("keyup", calculateChange);
document.getElementById('checkoutBtn').addEventListener('click', displayReceipt);
