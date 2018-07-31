// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

//Get date
var data = (moment().format('YYYY-MM-DD HH:mm:ss'));

// Capture IP Address
var ipAddress;
var getIpAddress = $.getJSON('http://gd.geobytes.com/GetCityDetails?callback=?', function (data) {
    ipAddress = [];
    ipAddress.push(data.geobytesipaddress)
});

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBab0SUTQMOWLah0cMMOHobAe6id_mrp5Y",
    authDomain: "contentshow-gama.firebaseapp.com",
    databaseURL: "https://contentshow-gama.firebaseio.com",
    projectId: "contentshow-gama",
    storageBucket: "contentshow-gama.appspot.com",
    messagingSenderId: "205921382978"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');

    // Save message
    saveMessage(name, email, data);

    // Show alert
    // document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function () {
        // document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, data) {
    var newMessageRef = messagesRef.push();
    getIpAddress;
    newMessageRef.set({
        name: name,
        email: email,
        data: data,
        ip: ipAddress[0]
    });
}
