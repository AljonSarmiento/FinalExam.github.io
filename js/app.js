let name = document.getElementById("name")
let address = document.getElementById("address")

        function addOrder(){
            carts.textContent=""
            let totalPrice = 0;
            
            
            if (parseFloat(productQuantity1.value) > 0){
                let order = productName1.textContent + ' ' + productQuantity1.value.toString() + 'pc/s ' + '- ₱' + (parseFloat(productQuantity1.value)*parseFloat(productPrice1.textContent)) + '\n'
                carts.textContent += order
                let quantity = parseFloat(productQuantity1.value);
                let price = parseFloat(productPrice1.textContent);
                totalPrice += quantity * price;
                
            }
            if (parseFloat(productQuantity2.value) > 0){
                let order=productName2.textContent + ' ' + productQuantity2.value.toString() + 'pc/s ' + '- ₱' + (parseFloat(productQuantity2.value)*parseFloat(productPrice2.textContent)) + '\n'
                carts.textContent += order
                let quantity = parseFloat(productQuantity2.value);
                let price = parseFloat(productPrice2.textContent);
                totalPrice += quantity * price;
            }
            if (parseFloat(productQuantity3.value) > 0){
                let order=productName3.textContent + ' ' + productQuantity3.value.toString() + 'pc/s ' + '- ₱' + (parseFloat(productQuantity3.value)*parseFloat(productPrice3.textContent)) + '\n'
                carts.textContent += order
                let quantity = parseFloat(productQuantity3.value);
                let price = parseFloat(productPrice3.textContent);
                totalPrice += quantity * price;
            }
            if (parseFloat(productQuantity4.value) > 0){
                let order=productName4.textContent + ' ' + productQuantity4.value.toString() + 'pc/s ' + '- ₱' + (parseFloat(productQuantity4.value)*parseFloat(productPrice4.textContent)) + '\n'
                carts.textContent += order
                let quantity = parseFloat(productQuantity4.value);
                let price = parseFloat(productPrice4.textContent);
                totalPrice += quantity * price;
            }
            if (parseFloat(productQuantity5.value) > 0){
                let order=productName5.textContent + ' ' + productQuantity5.value.toString() + 'pc/s ' + '- ₱' + (parseFloat(productQuantity5.value)*parseFloat(productPrice5.textContent)) + '\n'
                carts.textContent += order
                let quantity = parseFloat(productQuantity5.value);
                let price = parseFloat(productPrice5.textContent);
                totalPrice += quantity * price;
            }
            if (parseFloat(productQuantity6.value) > 0){
                let order=productName6.textContent + ' ' + productQuantity6.value.toString() + 'pc/s ' + '- ₱' + (parseFloat(productQuantity6.value)*parseFloat(productPrice6.textContent)) + '\n'
                carts.textContent += order
                let quantity = parseFloat(productQuantity6.value);
                let price = parseFloat(productPrice6.textContent);
                totalPrice += quantity * price;
            }
            if (parseFloat(productQuantity7.value) > 0){
                let order=productName7.textContent + ' ' + productQuantity7.value.toString() + 'pc/s ' + '- ₱' + (parseFloat(productQuantity7.value)*parseFloat(productPrice7.textContent)) + '\n'
                carts.textContent += order
                let quantity = parseFloat(productQuantity7.value);
                let price = parseFloat(productPrice7.textContent);
                totalPrice += quantity * price;
            }
            if (parseFloat(productQuantity8.value) > 0){
                let order=productName8.textContent + ' ' + productQuantity8.value.toString() + 'pc/s ' + '- ₱' + (parseFloat(productQuantity8.value)*parseFloat(productPrice8.textContent)) + '\n'
                carts.textContent += order
                let quantity = parseFloat(productQuantity8.value);
                let price = parseFloat(productPrice8.textContent);
                totalPrice += quantity * price;
            }
            if (parseFloat(productQuantity9.value) > 0){
                let order=productName9.textContent + ' ' + productQuantity9.value.toString() + 'pc/s ' + '- ₱' + (parseFloat(productQuantity9.value)*parseFloat(productPrice9.textContent)) + '\n'
                carts.textContent += order
                let quantity = parseFloat(productQuantity9.value);
                let price = parseFloat(productPrice9.textContent);
                totalPrice += quantity * price;
            }
            total.value = '₱ ' + totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            calculateChange();
        }


        //calculate the sukli
        function calculateChange() {
            let totalPrice = parseFloat(total.value.replace('₱ ', '').replace(/,/g, ''));;
            let cashTendered = parseFloat(cash.value);
            if (cashTendered >= totalPrice) {
                let changeAmount = cashTendered - totalPrice;
                change.value = '₱ ' + changeAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            }
            //else if(cash.value == 0) {
            //    alert('No orders found. Please add items to your cart.')
                
           // } else {
            //    alert('Insufficient amount! try again')
           // }
        }


        //display product details
        function displayReceipt() {

            if (carts.value.trim() === '') {
                alert("No orders found. Please add items to your cart.");
                return;
            }
            if(change.value!=0){
            let receipt = "Receipt:\n\n";
            receipt += carts.value;
            receipt += "\nTotal: " + total.value;
            receipt += "\nCash Tendered: ₱ " + cash.value;
            receipt += "\nChange: " + change.value;
            receipt += "\n\nThank you for your purchase, " + name.value + "!";
            receipt += "\nWe will ship to: " + address.value + "!";
            alert(receipt);

            
            carts.textContent = "";
            total.value = '';
            cash.value = '';
            change.value = '';
            name.value = '';
            address.value = '';


            productQuantity1.value = '';
            productQuantity2.value = '';
            productQuantity3.value = '';
            productQuantity4.value = '';
            productQuantity5.value = '';
            productQuantity6.value = '';
            productQuantity7.value = '';
            productQuantity8.value = '';
            productQuantity9.value = '';


            }else{
                alert("Please enter cash amount");
            }

   
        }



        productQuantity1.addEventListener("keyup", addOrder);
        productQuantity2.addEventListener("keyup", addOrder);
        productQuantity3.addEventListener("keyup", addOrder);
        productQuantity4.addEventListener("keyup", addOrder);
        productQuantity5.addEventListener("keyup", addOrder);
        productQuantity6.addEventListener("keyup", addOrder);
        productQuantity7.addEventListener("keyup", addOrder);
        productQuantity8.addEventListener("keyup", addOrder)
        productQuantity9.addEventListener("keyup", addOrder);
        

        document.getElementById('productQuantity1').addEventListener('click', addOrder);
        document.getElementById('productQuantity2').addEventListener('click', addOrder);
        document.getElementById('productQuantity3').addEventListener('click', addOrder);
        document.getElementById('productQuantity4').addEventListener('click', addOrder);
        document.getElementById('productQuantity5').addEventListener('click', addOrder);
        document.getElementById('productQuantity6').addEventListener('click', addOrder);
        document.getElementById('productQuantity7').addEventListener('click', addOrder);
        document.getElementById('productQuantity8').addEventListener('click', addOrder);
        document.getElementById('productQuantity9').addEventListener('click', addOrder);
        
        //document.getElementById('pay').addEventListener('click', calculateChange);
        cash.addEventListener("keyup", calculateChange);
        document.getElementById('checkoutBtn').addEventListener('click', displayReceipt);
