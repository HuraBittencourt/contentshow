
clickOnButton();
$(document).ready(function(){checkLocalStorage()});

function clickOnButton() {
    $("#button-submit").click(function () {
        $("#open-modal").click();
    });
    $("#button-submit-get-ebook").click(function () {
        $("#get-ebook").click();
    });
}

function checkLocalStorage() {
    var _localStorage = localStorage.getItem("registerEbook");
    if (_localStorage == null) {
        saveLocalStorage();
        $("#get-ebook").click();
    }
}

function saveLocalStorage() {
    localStorage.setItem("registerEbook", "true");
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}