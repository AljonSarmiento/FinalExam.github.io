const products = [
  {
    id: 1,
    name: "Ninja 400",
    price: 335000,
    images: ["images/Ninja 400-1.jpg", "images/Ninja 400-2.jpg", "images/Ninja 400-3.jpg"],
  },
  {
    id: 2,
    name: "Ninja 500",
    price: 353800,
    images: ["images/Ninja 500-1.jpg", "images/Ninja 500-2.jpg", "images/Ninja 500-3.jpg"],
  },
  // Add more products here as needed
];

const productsContainer = document.getElementById("products");

products.forEach(product => {
  const carouselId = `carouselProduct${product.id}`;
  const productHTML = `
    <div class="col-12 col-sm-6 col-md-4 mb-3">
      <div class="card">
        <div id="${carouselId}" class="carousel slide">
          <div class="carousel-inner">
            ${product.images.map((img, index) => `
              <div class="carousel-item ${index === 0 ? "active" : ""}">
                <img src="${img}" class="card-img-top" alt="${product.name}" loading="lazy">
              </div>
            `).join("")}
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p>Price: ₱ <span>${product.price.toLocaleString()}</span></p>
          <input type="number" class="form-control" placeholder="Enter quantity" min="0" data-id="${product.id}">
        </div>
      </div>
    </div>
  `;
  productsContainer.innerHTML += productHTML;
});


// Dynamic handling of products
let name = document.getElementById("name");
let address = document.getElementById("address");
let carts = document.getElementById("carts");
let total = document.getElementById("total");
let cash = document.getElementById("cash");
let change = document.getElementById("change");

// Fetch all products dynamically
const products = document.querySelectorAll("[id^=productQuantity]");

function addOrder() {
    carts.textContent = "";
    let totalPrice = 0;

    products.forEach((productInput, index) => {
        const productName = document.getElementById(`productName${index + 1}`).textContent;
        const productPrice = parseFloat(document.getElementById(`productPrice${index + 1}`).textContent);
        const productQuantity = parseFloat(productInput.value) || 0;

        if (productQuantity > 0) {
            const itemTotal = productQuantity * productPrice;
            carts.textContent += `${productName} ${productQuantity} pc/s - ₱${itemTotal.toFixed(2)}\n`;
            totalPrice += itemTotal;
        }
    });

    total.value = `₱ ${totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    calculateChange();
}

function calculateChange() {
    const totalPrice = parseFloat(total.value.replace("₱ ", "").replace(/,/g, "")) || 0;
    const cashTendered = parseFloat(cash.value) || 0;

    if (cashTendered >= totalPrice) {
        const changeAmount = cashTendered - totalPrice;
        change.value = `₱ ${changeAmount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    } else {
        change.value = "";
    }
}

function displayReceipt() {
    if (carts.textContent.trim() === "") {
        alert("No orders found. Please add items to your cart.");
        return;
    }

    if (change.value === "" || parseFloat(change.value.replace("₱ ", "").replace(/,/g, "")) < 0) {
        alert("Insufficient cash amount. Please try again.");
        return;
    }

    let receipt = "Receipt:\n\n";
    receipt += carts.textContent;
    receipt += `\nTotal: ${total.value}`;
    receipt += `\nCash Tendered: ₱ ${cash.value}`;
    receipt += `\nChange: ${change.value}`;
    receipt += `\n\nThank you for your purchase, ${name.value}!`;
    receipt += `\nWe will ship to: ${address.value}!`;
    alert(receipt);

    // Clear fields
    carts.textContent = "";
    total.value = "";
    cash.value = "";
    change.value = "";
    name.value = "";
    address.value = "";

    products.forEach((productInput) => (productInput.value = ""));
}

// Add event listeners dynamically for all products
products.forEach((productInput) => {
    productInput.addEventListener("keyup", addOrder);
    productInput.addEventListener("click", addOrder);
});

// Event listeners for cash and checkout
cash.addEventListener("keyup", calculateChange);
document.getElementById("checkoutBtn").addEventListener("click", displayReceipt);
