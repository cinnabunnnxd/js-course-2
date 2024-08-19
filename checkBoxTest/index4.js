// .checked = property that determines the checked state of
//            HTML checkbox or ratio button element

const myCheckBox = document.getElementById('myCheckBox');
const visaBtn = document.getElementById('visaBtn');
const masterBtn = document.getElementById('masterBtn');
const payPalBtn = document.getElementById('payPalBtn');
const myButton = document.getElementById('myButton');
const result = document.getElementById('result');
const paymentResult = document.getElementById('paymentResult');

myButton.onclick = function () {
    if (myCheckBox.checked) {
        result.textContent = `u r subbed:)`
    } else {
        result.textContent = `ur not subbed:(`
    }

    if (visaBtn.checked) {
        paymentResult.textContent = `subbed using Visa`
    } else if (masterBtn.checked) {
        paymentResult.textContent = `subbed using  MasterCard`
    } else if (payPalBtn.checked) {
        paymentResult.textContent = `subbed using PayPal`
    } else {
        paymentResult.textContent = `must select a payment method`
    }


}