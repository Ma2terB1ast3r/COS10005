function validateOrderForm() {
    errorMsg = "";

    // Personal Details
    // Name
    if (!validateFullName()) {
        errorMsg += "Please enter a name\n";
    }
    // Contact Number
    if (!validateContactNumber()) {
        errorMsg += "Please enter a contact number\n";
    }
    // Email
    if (!validateEmail()) {
        errorMsg += "Please enter a valid email\n";
    }

    // Delivery/pickup
    if (!validateDeliveryType()) {
        errorMsg += "Please select a delivery type\n";
    }
    // Delivery Address (if delivery)
    if ($("input[name=deliveryType]:checked").val() == "delivery") {
        // Delivery Address
        if (!validateDeliveryAddress()) {
            errorMsg += "Please enter a delivery address\n";
        }
        // Delivery City
        if (!validateDeliveryCity()) {
            errorMsg += "Please enter a delivery city\n";
        }
        // Delivery State
        if (!validateDeliveryState()) {
            errorMsg += "Please enter a delivery state\n";
        }
        // Delivery Postcode
        if (!validateDeliveryPostcode()) {
            errorMsg += "Please enter a delivery postcode\n";
        }
    }

    // Payment Method
    if (!validatePaymentMethod()) {
        errorMsg += "Please select a payment type\n";
    }
    // Card Details (if online)
    if ($("input[name=paymentMethod]:checked").val() == "online") {
        // Card Number
        if (!validateCardNumber()) {
            errorMsg += "Please enter a card number\n";
        }
        // Card Name
        if (!validateCardName()) {
            errorMsg += "Please enter a card name\n";
        }
        // Card Expiry
        if (!validateCardExpiry()) {
            errorMsg += "Please enter a card expiry\n";
        }
        // Card CVV
        if (!validateCardCVV()) {
            errorMsg += "Please enter a card CVV\n";
        }

        // Copy delivery address to billing address
        if ($("#sameAddress").val() == "on") {
            copyDeliveryAddress();
        }
        // Billing Address
        if (!validateBillingAddress()) {
            errorMsg += "Please enter a billing address\n";
        }
        // Billing City
        if (!validateBillingCity()) {
            errorMsg += "Please enter a billing city\n";
        }
        // Billing State
        if (!validateBillingState()) {
            errorMsg += "Please enter a billing state\n";
        }
        // Billing Postcode
        if (!validateBillingPostcode()) {
            errorMsg += "Please enter a billing postcode\n";
        }
    }

    if (errorMsg != "") {
        alert(errorMsg);
        return false;
    }
}

// Validate delivery type
function validateDeliveryType() {
    deliveryType = $("input[name=deliveryType]:checked").val();

    if (deliveryType == "pickup") {
        $("#deliveryAddressCluster").slideUp();
        return true;
    } else if (deliveryType == "delivery") {
        $("#deliveryAddressCluster").slideDown();
        return true;
    }

    return false;
}

// Validate delivery address functions
function validateDeliveryAddress() {
    deliveryAddress = $("#deliveryAddress").val();

    if (deliveryAddress != "") {
        $("#deliveryAddress").removeClass("invalid");
        $("#deliveryAddress").addClass("valid");
        return true;
    }

    $("#deliveryAddress").removeClass("valid");
    $("#deliveryAddress").addClass("invalid");
    return false;
}
function validateDeliveryCity() {
    deliveryCity = $("#deliveryCity").val();

    if (deliveryCity != "") {
        $("#deliveryCity").removeClass("invalid");
        $("#deliveryCity").addClass("valid");
        return true;
    }

    $("#deliveryCity").removeClass("valid");
    $("#deliveryCity").addClass("invalid");
    return false;
}
function validateDeliveryState() {
    deliveryState = $("#deliveryState").val();

    if (deliveryState != "") {
        $("#deliveryState").removeClass("invalid");
        $("#deliveryState").addClass("valid");
        return true;
    }

    $("#deliveryState").removeClass("valid");
    $("#deliveryState").addClass("invalid");
    return false;
}
function validateDeliveryPostcode() {
    deliveryPostcode = $("#deliveryPostcode").val();

    if (deliveryPostcode != "" && deliveryPostcode.length == 4 && !isNaN(deliveryPostcode)) {
        $("#deliveryPostcode").removeClass("invalid");
        $("#deliveryPostcode").addClass("valid");
        return true;
    }

    $("#deliveryPostcode").removeClass("valid");
    $("#deliveryPostcode").addClass("invalid");
    return false;
}

// Validate payment type
function validatePaymentMethod() {
    paymentMethod = $("input[name=paymentMethod]:checked").val();

    if (paymentMethod == "pickup") {
        $("#onlinePaymentCluster").slideUp();
        return true;
    } else if (paymentMethod == "online") {
        $("#onlinePaymentCluster").slideDown();
        return true;
    }

    return false;
}

// Billing address validation functions
function validateBillingAddress() {
    billingAddress = $("#billingAddress").val();

    if (billingAddress != "") {
        $("#billingAddress").removeClass("invalid");
        $("#billingAddress").addClass("valid");
        return true;
    }

    $("#billingAddress").removeClass("valid");
    $("#billingAddress").addClass("invalid");
    return false;
}
function validateBillingCity() {
    billingCity = $("#billingCity").val();

    if (billingCity != "") {
        $("#billingCity").removeClass("invalid");
        $("#billingCity").addClass("valid");
        return true;
    }

    $("#billingCity").removeClass("valid");
    $("#billingCity").addClass("invalid");
    return false;
}
function validateBillingState() {
    billingState = $("#billingState").val();

    if (billingState != "") {
        $("#billingState").removeClass("invalid");
        $("#billingState").addClass("valid");
        return true;
    }

    $("#billingState").removeClass("valid");
    $("#billingState").addClass("invalid");
    return false;
}
function validateBillingPostcode() {
    billingPostcode = $("#billingPostcode").val();

    if (billingPostcode != "" && billingPostcode.length == 4 && !isNaN(billingPostcode)) {
        $("#billingPostcode").removeClass("invalid");
        $("#billingPostcode").addClass("valid");
        return true;
    }

    $("#billingPostcode").removeClass("valid");
    $("#billingPostcode").addClass("invalid");
    return false;
}

// Personal details validation functions
function validateContactNumber() {
    contactNumber = $("#contactNumber").val();

    if (contactNumber != "" && contactNumber.length == 10 && !isNaN(contactNumber)) {
        $("#contactNumber").removeClass("invalid");
        $("#contactNumber").addClass("valid");
        return true;
    }

    $("#contactNumber").removeClass("valid");
    $("#contactNumber").addClass("invalid");
    return false;
}
function validateEmail() {
    email = $("#email").val();

    if (email != "" && email.includes("@") && email.includes(".")){
        $("#email").removeClass("invalid");
        $("#email").addClass("valid");
        return true;
    }

    $("#email").removeClass("valid");
    $("#email").addClass("invalid");
    return false;
}
function validateFullName() {
    fullName = $("#fullName").val();

    if (fullName != "") {
        $("#fullName").removeClass("invalid");
        $("#fullName").addClass("valid");
        return true;
    }

    $("#fullName").removeClass("valid");
    $("#fullName").addClass("invalid");
    return false;
}

// Validate card details
function validateCardNumber() {
    cardNumber = $("#cardNumber").val();

    // Check type of card
    if ($("#cardType").val() == "amex" && cardNumber.length == 15) {
        $("#cardNumber").removeClass("invalid");
        $("#cardNumber").addClass("valid");
        return true;
    }

    if ($("#cardType").val() != "amex" && cardNumber.length == 16) {
        $("#cardNumber").removeClass("invalid");
        $("#cardNumber").addClass("valid");
        return true;
    }

    $("#cardNumber").removeClass("valid");
    $("#cardNumber").addClass("invalid");
    return false;
}
function validateCardName() {
    cardName = $("#cardName").val();

    if (cardName != "") {
        $("#cardName").removeClass("invalid");
        $("#cardName").addClass("valid");
        return true;
    }

    $("#cardName").removeClass("valid");
    $("#cardName").addClass("invalid");
    return false;
}
function validateCardExpiry() {
    cardExpiry = $("#cardExpiry").val();

    if (cardExpiry != "") {
        $("#cardExpiry").removeClass("invalid");
        $("#cardExpiry").addClass("valid");
        return true;
    }

    $("#cardExpiry").removeClass("valid");
    $("#cardExpiry").addClass("invalid");
    return false;
}
function validateCardCVV() {
    cardCVV = $("#cardCVV").val();

    if (cardCVV != "" && cardCVV.length == 3 && !isNaN(cardCVV)) {
        $("#cardCVV").removeClass("invalid");
        $("#cardCVV").addClass("valid");
        return true;
    }

    $("#cardCVV").removeClass("valid");
    $("#cardCVV").addClass("invalid");
    return false;
}

// Copy delivery address to billing address
function copyDeliveryAddress() {
    deliveryAddress = $("#deliveryAddress").val();
    deliveryCity = $("#deliveryCity").val();
    deliveryState = $("#deliveryState").val();
    deliveryPostcode = $("#deliveryPostcode").val();

    $("#billingAddress").val(deliveryAddress);
    $("#billingCity").val(deliveryCity);
    $("#billingState").val(deliveryState);
    $("#billingPostcode").val(deliveryPostcode);
}

function init() {
    // Add event listener for when the form is submitted
    $("#orderForm").submit(validateOrderForm);

    // Add event listener for when the radio button is changed
    $("input[name=deliveryType]").change(validateDeliveryType);
    $("input[name=paymentMethod]").change(validatePaymentMethod);
    $("#sameAddress").change(copyDeliveryAddress);
    $("#cardType").change(validateCardNumber);

    // Add event listener for all inputs on blur to run relevant validation function
    $("#deliveryAddress").blur(validateDeliveryAddress);
    $("#deliveryCity").blur(validateDeliveryCity);
    $("#deliveryState").blur(validateDeliveryState);
    $("#deliveryPostcode").blur(validateDeliveryPostcode);
    $("#billingAddress").blur(validateBillingAddress);
    $("#billingCity").blur(validateBillingCity);
    $("#billingState").blur(validateBillingState);
    $("#billingPostcode").blur(validateBillingPostcode);
    $("#contactNumber").blur(validateContactNumber);
    $("#email").blur(validateEmail);
    $("#fullName").blur(validateFullName);
    $("#cardNumber").blur(validateCardNumber);
    $("#cardName").blur(validateCardName);
    $("#cardExpiry").blur(validateCardExpiry);
    $("#cardCVV").blur(validateCardCVV);
}

init()