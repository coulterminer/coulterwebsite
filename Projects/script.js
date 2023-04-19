let python = document.getElementById("python")
let cpp = document.getElementById("cpp")
let lua = document.getElementById("lua")
let java = document.getElementById("java")
let js = document.getElementById("js")
let solidity = document.getElementById("solidity")

let pb_1 = document.getElementById("pb_1")
let pb_2 = document.getElementById("pb_2")
let pb_3 = document.getElementById("pb_3")
let pb_4 = document.getElementById("pb_4")
let pb_5 = document.getElementById("pb_5")
let pb_6 = document.getElementById("pb_6")
let pb_7 = document.getElementById("pb_7")
let pb_8 = document.getElementById("pb_8")


let python_enabled = true
let cpp_enabled = true
let lua_enabled = true
let java_enabled = true
let js_enabled = true
let solidity_enabled = true

function update(){
    if (python_enabled == false){
        pb_1.style.display = "none";
        pb_2.style.display = "none";
    } else {
        pb_1.style.display = "block";
        pb_2.style.display = "block";
    }

    if (cpp_enabled == false){
        pb_4.style.display = "none";
    } else {
        pb_4.style.display = "block";
    }

    if (lua_enabled == false){
        pb_6.style.display = "none";
    } else {
        pb_6.style.display = "block";
    }

    if (java_enabled == false){
        pb_5.style.display = "none";
    } else {
        pb_5.style.display = "block";
    }

    if (js_enabled == false){
        console.log("JS disabled, but nothing here :(")
    } else {

    }

    if (solidity_enabled == false) {
        pb_7.style.display = "none";
        pb_8.style.display = "none";
    } else {
        pb_7.style.display = "block";
        pb_8.style.display = "block";
    }
}

function py_select(){
    if (python_enabled){
        python_enabled = false
        python.style.fill = "rgba(0, 0, 0, 0.26)"
    } else {
        python_enabled = true
        python.style.fill = "#000000"
    }
    update()
}

function cpp_select(){
    if (cpp_enabled){
        cpp_enabled = false
        cpp.style.fill = "rgba(0, 0, 0, 0.26)"
    } else {
        cpp_enabled = true
        cpp.style.fill = "#000000"
    }
    update()
}

function lua_select(){
    if (lua_enabled){
        lua_enabled = false
        lua.style.fill = "rgba(0, 0, 0, 0.26)"
    } else {
        lua_enabled = true
        lua.style.fill = "#000000"
    }
    update()
}

function java_select(){
    if (java_enabled){
        java_enabled = false
        java.style.fill = "rgba(0, 0, 0, 0.26)"
    } else {
        java_enabled = true
        java.style.fill = "#000000"
    }
    update()
}

function js_select(){
    if (js_enabled){
        js_enabled = false
        js.style.fill = "rgba(0, 0, 0, 0.26)"
    } else {
        js_enabled = true
        js.style.fill = "#000000"
    }
    update()
}

function solidity_select(){
    if (solidity_enabled){
        solidity_enabled = false
        solidity.style.fill = "rgba(0, 0, 0, 0.26)"
    } else {
        solidity_enabled = true
        solidity.style.fill = "#000000"
    }
    update()
}
