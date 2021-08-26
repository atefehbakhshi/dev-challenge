let backbagCounter = 1
let shoesCounter = 1
let backbagCount = 94.99;
let backbagDiscount = 54.99;
let shoesCount = 124.99;
let shoesDiscount = 74.99;
let shipping = 19;

function minusFunction(event) {
    if (event.id == "backbag-minus") {
        if (backbagCounter > 0) {
            backbagCounter--
            document.getElementById("backbag-num").innerHTML = backbagCounter
            document.getElementById("backbag-count").innerHTML = "$" + (backbagCounter * backbagCount).toFixed(2)
            document.getElementById("backbag-discount").innerHTML = "$" + (backbagCounter * backbagDiscount).toFixed(2)
        }
        else {
            backbagCounter = 0
        }
    }
    if (event.id == "shoes-minus") {
        if (shoesCounter > 0) {
            shoesCounter--
            document.getElementById("shoes-num").innerHTML = shoesCounter
            document.getElementById("shoes-count").innerHTML = "$" + (shoesCounter * shoesCount).toFixed(2)
            document.getElementById("shoes-discount").innerHTML = "$" + (shoesCounter * shoesDiscount).toFixed(2)
        }
        else {
            shoesCounter = 0
        }
    }
    document.getElementById("total").innerHTML = ((shipping) + (backbagCounter * backbagDiscount) + (shoesCounter * shoesDiscount)).toFixed(2)
}

function plusFunction(event) {
    if (event.id == "backbag-plus") {
        backbagCounter++
        document.getElementById("backbag-num").innerHTML = backbagCounter
        document.getElementById("backbag-count").innerHTML = "$" + (backbagCounter * backbagCount).toFixed(2)
        document.getElementById("backbag-discount").innerHTML = "$" + (backbagCounter * backbagDiscount).toFixed(2)
    }
    if (event.id == "shoes-plus") {
        shoesCounter++
        document.getElementById("shoes-num").innerHTML = shoesCounter
        document.getElementById("shoes-count").innerHTML = "$" + (shoesCounter * shoesCount).toFixed(2)
        document.getElementById("shoes-discount").innerHTML = "$" + (shoesCounter * shoesDiscount).toFixed(2)
    }
    document.getElementById("total").innerHTML = ((shipping) + (backbagCounter * backbagDiscount) + (shoesCounter * shoesDiscount)).toFixed(2)
}


function validateForm() {
    let email = document.forms["myForm"]["email"].value;
    let phone = document.forms["myForm"]["phone"].value;
    let fname = document.forms["myForm"]["fname"].value;
    let address = document.forms["myForm"]["address"].value;
    let city = document.forms["myForm"]["city"].value;
    let postalCode = document.forms["myForm"]["postalCode"].value;

    if (email == "") {
        alert("email must be filled out");
        return false;
    }
    else if (phone == "") {
        alert("phone must be filled out");
        return false;
    }
    else if (fname == "") {
        alert("full name must be filled out");
        return false;
    }
    else if (address == "") {
        alert("address must be filled out");
        return false;
    }
    else if (city == "") {
        alert("city must be filled out");
        return false;
    }
    else if (postalCode == "") {
        alert("city must be filled out");
        return false;
    }
    else {
        alert("Successful submited")
    }
}


