var ticket_type = document.getElementById("ticket_type");

var job_type = document.getElementById("job_type")
var job_type_text = document.getElementById("job_type_text")
var web_type = document.getElementById("web_type")
var web_type_text = document.getElementById("web_type_text")

let t_type = "";
let j_type = "";

ticket_type.onchange = function(){
    if (ticket_type.value == "job_related"){
        job_type.style.display = "block";
        job_type_text.style.display = "block";
        t_type = "job_related";
    } else {
        job_type.style.display = "none";
        job_type_text.style.display = "none";
        t_type = "bug";
    }
}

job_type.onchange = function(){
    if (job_type.value == "website") {
        web_type.style.display = "block";
        web_type_text.style.display = "block";
        j_type = "website";
    } else {
        web_type.style.display = "none";
        web_type_text.style.display = "none";
    }
}



window.onload = function(){
    job_type.style.display = "none";
    job_type_text.style.display = "none";
    web_type.style.display = "none";
    web_type_text.style.display = "none";      
}