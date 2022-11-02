function detailHandler() {
    document.getElementById("formBody").style.display = "none";
    document.getElementById("detailedBody").style.display = "grid"; 
}

function findlHandler() {
    document.getElementById("formBody").style.display = "grid";
    document.getElementById("detailedBody").style.display = "none";
}

function showFoundWord() {
    document.getElementById("findDash").style.display = "none";
    document.getElementById("founded").style.display = "block";
}