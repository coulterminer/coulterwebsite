let bitcoin = document.getElementById("bitcoin")
let btc_qr = document.getElementById("btc_qr")
let btc_enabled = false

let ethereum = document.getElementById("eth")
let eth_qr = document.getElementById("eth_qr")
let eth_enabled = false

let solana = document.getElementById("solana")
let sol_qr = document.getElementById("sol_qr")
let sol_enabled = false

let tron = document.getElementById("tron")
let tron_qr = document.getElementById("tron_qr")
let tron_enabled = false

let band = document.getElementById("band")
let band_qr = document.getElementById("band_qr")
let band_enabled = false

let monero = document.getElementById("monero")
let xmr_qr = document.getElementById("xmr_qr")
let xmr_enabled = false

let ethclassic = document.getElementById("etc")
let etc_qr = document.getElementById("etc_qr")
let etc_enabled = false

let t_title = document.getElementById("t_title")

function animate_title_text(message, delay_time) {
    let i = 0;
    let interval = setInterval(function() {
      if (i < message.length) {
        t_title.innerHTML += message.charAt(i);
        i++;
      } else {
        clearInterval(interval);
      }
    }, delay_time / message.length);
}

function rev_animate_title_text(delay_time) {
    let message = t_title.innerHTML;
    let i = message.length - 1;
    let interval = setInterval(function() {
      if (i >= 0) {
        t_title.innerHTML = t_title.innerHTML.slice(0, -1);
        i--;
      } else {
        clearInterval(interval);
      }
    }, delay_time / message.length);
}

const title_animation_text = {
    1: "Python Flask and Socket",
    2: "Fullstack Web Dev",
    3: "AWS Cloud Practitioner",
    4: "Cloud Automation and Devops",
    5: "CompTIA A+",
    6: "CompTIA Net+",
    7: "Cryptography",
    8: "Linux", 
    9: "Cisco PacketTracer",
    10: "Android App Developer",
    11: "Proficient in Git",
    12: "PCAP",
    13: "Server Management and Hosting",
    14: "CyberSecurity",
};

function animate() {
    const keys = Object.keys(title_animation_text);
    const shuffledKeys = shuffleArray(keys);

    function animateNext(index = 0) {
        if (index >= shuffledKeys.length) {
            return;
        }

        const key = shuffledKeys[index];
        const message = title_animation_text[key];

        animate_title_text(message, 1000);

        setTimeout(function() {
            rev_animate_title_text(1000);
        }, 2000);

        setTimeout(function() {
            animateNext(index + 1);
        }, 4000);
    }

    animateNext();
}

function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

  

window.onload = function(){
    btc_qr.style.display = "none";
    eth_qr.style.display = "none";
    sol_qr.style.display = "none";
    tron_qr.style.display = "none";
    band_qr.style.display = "none";
    xmr_qr.style.display = "none";
    etc_qr.style.display = "none";
    setTimeout(function() { animate() }, 1500)
}


bitcoin.onclick = function(){
    if (btc_enabled){
        btc_qr.style.display = "none";
        btc_enabled = false
    } else {
        btc_qr.style.display = "block";
        btc_enabled = true
    }
}

ethereum.onclick = function(){
    if (eth_enabled){
        eth_qr.style.display = "none";
        eth_enabled = false
    } else {
        eth_qr.style.display = "block";
        eth_enabled = true
    }
}

solana.onclick = function(){
    if (sol_enabled){
        sol_qr.style.display = "none";
        sol_enabled = false
    } else {
        sol_qr.style.display = "block";
        sol_enabled = true
    }
}

tron.onclick = function(){
    if (tron_enabled){
        tron_qr.style.display = "none";
        tron_enabled = false
    } else {
        tron_qr.style.display = "block";
        tron_enabled = true
    }
}

band.onclick = function(){
    if (band_enabled){
        band_qr.style.display = "none";
        band_enabled = false
    } else {
        band_qr.style.display = "block";
        band_enabled = true
    }
}

monero.onclick = function(){
    if (xmr_enabled){
        xmr_qr.style.display = "none";
        xmr_enabled = false
    } else {
        xmr_qr.style.display = "block";
        xmr_enabled = true
    }
}

ethclassic.onclick = function(){
    if (etc_enabled){
        etc_qr.style.display = "none";
        etc_enabled = false
    } else {
        etc_qr.style.display = "block";
        etc_enabled = true
    }
}