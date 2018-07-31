
clickOnButton();
$(document).ready(function(){checkLocalStorage()});

function clickOnButton() {
    $("#button-submit").click(function () {
        $("#open-modal").click();
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