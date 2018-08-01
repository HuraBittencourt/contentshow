// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

//Get date
var data = (moment().format('YYYY-MM-DD HH:mm:ss'));

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
    saveMessage(name, email, data, getIp());

    // Show alert
    // document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function () {
        // document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // Clear form
    document.getElementById('contactForm').reset();
    window.open("home.html","_self")
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, data, ip) {
    var newMessageRef = messagesRef.push();
    //getIpAddress;
    newMessageRef.set({
        name: name,
        email: email,
        data: data,
        ip: ip
    });
}

//Capture IP Address
function getIp() {
  const xhr = new XMLHttpRequest();
  const method = 'GET';
  const url = 'https://ipapi.co/json/';
  
  xhr.open(method, url, false)
  xhr.send();

  if(xhr.status == 200) {
    const respostaJson = JSON.parse(xhr.response);
    return respostaJson.ip;
  }
  return 'ERRO: Ocorreu algum problema com nossa api';
}
