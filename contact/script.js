var ticket_type = document.getElementById("ticket_type");
var job_type = document.getElementById("job_type")
var job_type_text = document.getElementById("job_type_text")
var web_type = document.getElementById("web_type")
var web_type_text = document.getElementById("web_type_text")
var web_details = document.getElementById("web_details")
var python_details = document.getElementById("python_details")
var submit = document.getElementById("submit")

let t_type = "";
let j_type = "";
let w_type = "";
let w_details = "";
let p_details = ""

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
    } else if (job_type.value == "python"){
        j_type = "python";
        python_details.style.display = "block;"
        web_type.style.display = "none";
        web_type_text.style.display = "none";
    } else {
        j_type = "";
        web_type.style.display = "none";
        web_type_text.style.display = "none";
        python_details.style.display = "none;"
    }
}

web_type.onchange = function(){
    if (web_type.value != "sel"){
        w_type = web_type.value;
        web_details.style.display = "block";
    } else {
        w_type = ""
        web_details.style.display = "none";
    }
}

function submit_form(){
    console.log(t_type)
    console.log(j_type)
    console.log(w_type)
    console.log(web_details.value)
    console.log(python_details.value)
}

window.onload = function(){
    job_type.style.display = "none";
    job_type_text.style.display = "none";
    web_type.style.display = "none";
    web_type_text.style.display = "none";
    web_details.style.display = "none";   
    python_details.style.display = "none";   
}