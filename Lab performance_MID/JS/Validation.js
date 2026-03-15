const unitPrice = 1000;
const days = 30;
const quantityInput = document.getElementById("quantity");
const totalInput = document.getElementById("total");

quantityInput.addEventListener("input", calculateTotal) 

function calculateTotal(){
    let quantity = quantityField.value;
    if (quantity < 0) {
        alert("Quantity cannot be negative");
        quantityField.value = 0;
        totalInput = 0;
        return;
    }


    let total = unitPrice * quantity * days;

    totalInput.value = total;

    if (total > 1000) {
        alert("Congratulations! You are eligible for a gift coupon.");
    }

}