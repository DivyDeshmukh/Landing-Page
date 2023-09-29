var a = document.querySelector("#menu h6");
var b = document.querySelectorAll("#menu h6")[1];
var flag = 0;

a.addEventListener("click", function() {
    a.style.borderBottom = "2.5px solid #E0E0E0";
    b.style.borderBottom = "none";
});

b.addEventListener("click", function() {
    b.style.borderBottom = "2.5px solid #E0E0E0";
    a.style.borderBottom = "none";
});

document.querySelector("#dropdown i").addEventListener("click", function() {
    if(flag === 0){
        document.querySelector("#dropdownList").style.display = "block";
        flag = 1;
    }else {
        document.querySelector("#dropdownList").style.display = "none";
        flag = 0;
    }
});
