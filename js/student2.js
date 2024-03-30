function validateForm() {
    var email = document.getElementById("email").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email address. Plese input email address in format xxxxxxxx@yyyyyy.ccc");
        return false;
    }

    var age = document.getElementById("age").value;
    if (isNaN(age) || age < 12 || age > 70) {
        alert("Age must be a numeric value between 12 and 70");
        return false;
    }

    showPopup();
    return false; // Prevent form submission
}

function showPopup() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var like_services = document.querySelector('input[name="like-services"]:checked').value;
    var interested_area = "";
    var interestedCheckboxes = document.getElementsByName("interested-area");
    for (var i = 0; i < interestedCheckboxes.length; i++) {
        if (interestedCheckboxes[i].checked) {
            interested_area += interestedCheckboxes[i].value + ", ";
        }
    }
    interested_area = interested_area.slice(0, -2); // Remove trailing comma and space
    var marketing_channel = document.getElementById("marketing-channel").value;
    var suggestion = document.getElementById("suggestion").value;


    document.getElementById("popup-name").innerText = name;
    document.getElementById("popup-age").innerText = age;
    document.getElementById("popup-email").innerText = email;
    document.getElementById("popup-phone").innerText = phone;
    document.getElementById("popup-like-services").innerText = like_services;
    document.getElementById("popup-interested").innerText = interested_area;
    document.getElementById("popup-marketing-channel").innerText = marketing_channel;
    document.getElementById("popup-suggestion").innerText = suggestion;
    
    document.getElementById("email-content").value = "Your input data:\n\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Age: " + age + " years old\n" +
        "Services: " + like_services + "\n" +
        "Interested in: " + interested_area + "\n" +
        "Markketing channel: " + marketing_channel + "\n" +
        "Other suggestions: " + suggestion;

    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function confirmData() {
    email_address = "alexandra.marin.25.2004@gmail.com";
    email_subject = "Your input data";
    email_content = document.getElementById("email-content").value;
    email_link = "mailto:" + email_address + "?subject=" + encodeURIComponent(email_subject) + "&body=" + encodeURIComponent(email_content)
    // encodeURIComponent transform plain text into encoded one, replacing special characters. 
    //      Ex: "Alexandra Marin" will be transformed to "Alexandra%20Marin"
    window.location.href = email_link;

    // Close the popup
    cancelPopup();
}

function cancelPopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}
