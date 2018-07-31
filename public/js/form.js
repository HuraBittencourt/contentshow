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

    if (validateName(name)) {

        // Save message
        saveMessage(name, email, data, getIp());

        // Clear form
        document.getElementById('contactForm').reset();
    }else{

        alert("Insira um nome e sobrenome!");
    }

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

//Check if both name and surname are wrote
function validateName(nome) {
    let validName = nome.trim().match(/^[a-zA-ZáÁéÉ][a-zA-ZáÁéÉ]+([ ][a-zA-ZáÁéÉ]+)*([ ][a-zA-ZáÁéÉ][a-zA-ZáÁéÉ]+)+([ ][a-zA-ZáÁéÉ]+)*$/);
    if (validName) {
        return true;
    } else {
        return false;
    }
}