function formValidate() {
    let firstName = document.getElementById("first").value;
    let lastName = document.getElementById("last").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phone").value;
    let pinCode = document.getElementById("pincode").value;
    let cardNumber = document.getElementById("card").value;
    let cardExpiry = document.getElementById("expiry").value;
    let cvv = document.getElementById("CVV").value;
    let flag = true;
    if(firstName === "") {
        document.getElementById("first").style.borderColor = "red";
        document.getElementById("firstName").innerText = "First Name is required";
        flag = false;
    }
    else if (!isValidFirstName(firstName)) {
        document.getElementById("first").style.borderColor = "red";
        document.getElementById("firstName").innerText = "First Name is not valid";
        flag = false;
    }
    else if (isValidFirstName(firstName)) {
        document.getElementById("first").style.borderColor = "#d4d4d4";
        document.getElementById("firstName").innerText = "";
    }
    if(lastName === "") {
        document.getElementById("last").style.borderColor = "red";
        document.getElementById("lastName").innerText = "Last Name is required";
        flag = false;
    }
    else if (!isValidLastName(lastName)) {
        document.getElementById("last").style.borderColor = "red";
        document.getElementById("lastName").innerText = "Last Name is not valid";
        flag = false;
    }
    else if (isValidLastName(lastName)) {
        document.getElementById("last").style.borderColor = "#d4d4d4";
        document.getElementById("lastName").innerText = "";
    }

    if(email === "") {
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("e-mail").innerText = "Email Address is required";
        flag = false;
    }
    else if (!isValidEmail(email)) {
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("e-mail").innerText = "Email Address is not valid";
        flag = false;
    }
    else if (isValidEmail(email)) {
        document.getElementById("email").style.borderColor = "#d4d4d4";
        document.getElementById("e-mail").innerText = "";
    }

    if(phoneNumber === "") {
        document.getElementById("phone").style.borderColor = "red";
        document.getElementById("phoneNumber").innerText = "Phone Number is required";
        flag = false;
    }
    else if (!isValidContactNumber(phoneNumber)) {
        document.getElementById("phone").style.borderColor = "red";
        document.getElementById("phoneNumber").innerText = "Phone Number is not valid";
        flag = false;
    }
    else if (isValidContactNumber(phoneNumber)) {
        document.getElementById("phone").style.borderColor = "#d4d4d4";
        document.getElementById("phoneNumber").innerText = "";
    }

    if(pinCode === "") {
        document.getElementById("pincode").style.borderColor = "red";
        document.getElementById("pinCode").innerText = "Pin Code is required";
        flag = false;
    }
    else if (!isValidPINCode(pinCode)) {
        document.getElementById("pincode").style.borderColor = "red";
        document.getElementById("pinCode").innerText = "Pin Code is not valid";
        flag = false;
    }
    else if (isValidPINCode(pinCode)) {
        document.getElementById("pincode").style.borderColor = "#d4d4d4";
        document.getElementById("pinCode").innerText = "";
    }

    if(cardNumber === "") {
        document.getElementById("card").style.borderColor = "red";
        document.getElementById("cardNumber").innerText = "Card Number is required";
        flag = false;
    }
    else if (!isValidCardNumber(cardNumber)) {
        document.getElementById("card").style.borderColor = "red";
        document.getElementById("cardNumber").innerText = "Card Number is not valid";
        flag = false;
    }
    else if (isValidCardNumber(cardNumber)) {
        document.getElementById("card").style.borderColor = "#d4d4d4";
        document.getElementById("cardNumber").innerText = "";
    }

    if(cardExpiry === "") {
        document.getElementById("expiry").style.borderColor = "red";
        document.getElementById("cardExpiry").innerText = "Card Expiry is required";
        flag = false;
    }
    else if (!isValidCardExpiry(cardExpiry)) {
        document.getElementById("expiry").style.borderColor = "red";
        document.getElementById("cardExpiry").innerText = "Card Expiry is not valid";
        flag = false;
    }
    else if (isValidCardExpiry(cardExpiry)) {
        document.getElementById("expiry").style.borderColor = "#d4d4d4";
        document.getElementById("cardExpiry").innerText = "";
    }

    if(cvv === "") {
        document.getElementById("CVV").style.borderColor = "red";
        document.getElementById("cvv").innerText = "CVV is required";
        flag = false;
    }
    else if (!isValidCVV(cvv)) {
        document.getElementById("CVV").style.borderColor = "red";
        document.getElementById("cvv").innerText = "CVV is not valid";
        flag = false;
    }
    else if (isValidCVV(cvv)) {
        document.getElementById("CVV").style.borderColor = "#d4d4d4";
        document.getElementById("cvv").innerText = "";
    }
    
    return flag ? true : false;
}
function isValidFirstName(firstName) {
    const firstNameRegex = /^[a-zA-Z]{1,30}$/;
    return firstNameRegex.test(firstName);
}
function isValidLastName(lastName) {
    const LastNameRegex = /^[a-zA-Z]{1,30}$/;
    return LastNameRegex.test(lastName);
}
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{1,50}$/;  
    return emailRegex.test(email);
}
function isValidContactNumber(contactNumber) {
    const contactNumberRegex = /^[6-9]\d{9}$/;
    return contactNumberRegex.test(contactNumber);
}
function isValidPINCode(pinCode) {
    const pinCodeRegex = /^[1-9][0-9]{5}$/;
    return pinCodeRegex.test(pinCode);
}
function isValidCardNumber(cardNumber) {
    const cardNumberRegex =/^\d{16}$/;
    return cardNumberRegex.test(cardNumber);
}

function isValidCardExpiry(cardExpiry) {
    const currentYear = new Date().getFullYear();
    const cardExpiryRegex = /^(20)[2-9][0-9]$/;
    return cardExpiryRegex.test(cardExpiry) && parseInt(cardExpiry) >= parseInt(currentYear);
}

function isValidCVV(cvv) {
    const cvvRegex = /^[0-9]{3,4}$/;
    return cvvRegex.test(cvv);
}